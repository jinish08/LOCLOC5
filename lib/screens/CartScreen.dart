import 'package:flutter/material.dart';
import 'package:loc_coupon/models/product_model.dart';
import 'package:loc_coupon/screens/HomeScreen.dart';
import 'package:loc_coupon/screens/PaymentScreen.dart';
import 'package:loc_coupon/screens/cart/components/cart_card.dart';
//import 'package:razorpay_flutter/razorpay_flutter.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class CartScreen extends StatefulWidget {
  const CartScreen({
    Key? key,
    required this.cart,
  }) : super(key: key);

  final List<Product> cart;

  @override
  State<CartScreen> createState() => _CartScreenState();
}

class _CartScreenState extends State<CartScreen> {
  List<Product> c = [];
  int len = 0;
  double sum = 0;
  double newsum = 0;
  bool couponApplied = false;
  TextEditingController controller = TextEditingController();

  @override
  void initState() {
    super.initState();
    /*_razorpay = Razorpay();
    _razorpay.on(Razorpay.EVENT_PAYMENT_SUCCESS, _handlePaymentSuccess);
    _razorpay.on(Razorpay.EVENT_PAYMENT_ERROR, _handlePaymentError);
    _razorpay.on(Razorpay.EVENT_EXTERNAL_WALLET, _handleExternalWallet);*/
    c = widget.cart;
    len = c.length;
    getPrice(c.length);
  }

  void _showToastCorrect(BuildContext context, String msg) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        elevation: 10,
        duration: Duration(seconds: 2),
        content: Text(msg),
      ),
    );
  }

  void getPrice(int len) {
    for (int i = 0; i < len; i++) sum += c[i].price;
    print(sum);
  }

  //const CartScreen({required Key key}) : super(key: key);
  makeitem(int index, cartDown) {
    return Dismissible(
      key: Key(index.toString()),
      direction: DismissDirection.endToStart,
      onDismissed: (direction) {
        c.removeAt(index);
      },
      child: ListTile(
        contentPadding: EdgeInsets.all(20),
        leading: Image(
          image: AssetImage(c[index].imageUrl),
          height: double.infinity,
          width: 100,
          fit: BoxFit.contain,
        ),
        title: Text(c[index].name),
        subtitle: Text(
          "x1",
          style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
        ),
        trailing: Text("\$${c[index].price.toStringAsFixed(2)}",
            style: TextStyle(color: Colors.orange, fontWeight: FontWeight.bold, fontSize: 16)),
      ),
    );
  }

  Future<bool> validateCoupons(String coupon) async {
    String url = "http://192.168.0.105:9000/api/coupon/validate";
    final msg = jsonEncode({"couponID": coupon});
    var response =
    await http.post(Uri.parse(url), headers: {"Content-Type": "application/json"}, body: msg);
    //print(response.body);
    bool r = response.body.toLowerCase() == 'true';

    String url2 = "http://192.168.0.105:9000/api/coupon/rules";
    final msg2 = jsonEncode({"userId": "amandakay34138", "couponId": coupon});
    var response2 = await http.post(Uri.parse(url2), headers: {"Content-Type": "application/json"}, body: msg2);
    //print(response2.body);

    String url3 = "http://192.168.0.105:9000/api/coupon/dynamicrules";
    final msg3 = jsonEncode({"rules": response2.body, "age":20, "country":"India", "cartValue":sum, "cartItems":len});
    var response3 = await http.post(Uri.parse(url3), headers: {"Content-Type": "application/json"}, body: msg3);
    bool r2 = response3.body.toLowerCase() == 'true';
    return r&&r2;
  }

  /*late Razorpay _razorpay;

  // to handle successful payments
  void _handlePaymentSuccess(PaymentSuccessResponse response) {
    print("SUCCESS: " + response.paymentId!);
    //Ping api to reduce coupon code
  }

  // to handle payment errors. I am just printing the response.
  void _handlePaymentError(PaymentFailureResponse response) {
    print("ERROR: " + response.code.toString() + " - " + response.message!);
  }

  // to handle cases when payment is made via external wallet.
  void _handleExternalWallet(ExternalWalletResponse response) {
    print("EXTERNAL_WALLET: " + response.walletName!);
  }*/

  void openCheckout(var items, var cost) async {
    /*var options = {
      'key': 'rzp_test_prFpp5n1LUT3OR',
      'amount': 100*cost,
      'name': 'Your E-Commerce App',
      'description': items,
      'retry': {'enabled': true, 'max_count': 1},
      'send_sms_hash': true,
      'prefill': {'contact': '8888888888', 'email': 'test@razorpay.com'},
      'external': {
        'wallets': ['paytm']
      }
    };

    try {
      _razorpay.open(options);  // this line will open your Razorpay interface.
    } catch (e) {
      debugPrint('Error: e');   // prints the error if unable to open the interface.
    }*/

  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        centerTitle: true,
        backgroundColor: Colors.white,
        title: Text(
          "Shopping Cart (${c.length})",
          style: TextStyle(color: Colors.black),
        ),
      ),
      body: Column(
        children: [
          Expanded(
            child: ListView.separated(
              itemBuilder: (ctx, index) => CartCard(
                cart: c,
                index: index,
              ),
              separatorBuilder: (ctx, index) => Divider(color: Colors.grey[300]),
              itemCount: c.length,
            ),
          ),
          Row(
            children: [
              Container(
                width: 328,
                padding: EdgeInsets.fromLTRB(10, 2, 10, 2),
                decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(5), border: Border.all(color: Colors.red)),
                child: TextField(
                  decoration: InputDecoration(
                    border: InputBorder.none,
                    labelText: "Enter Coupon Code",
                  ),
                  controller: controller,
                ),
              ),
              TextButton(
              onPressed: () async {
                  var futCoupons = await fetchCoupons();
                  var coupons = futCoupons.substring(2, futCoupons.length-2).replaceAll("\"", "").split(",");
                  if(coupons.contains(controller.text.toUpperCase()) && await validateCoupons(controller.text))
                  {
                    String url = "http://192.168.0.105:9000/api/coupon/getCouponsDisc";
                    final msg = jsonEncode({"couponId": controller.text});
                    var response =
                    await http.post(Uri.parse(url), headers: {"Content-Type": "application/json"}, body: msg);
                    double disc = double.parse(response.body);
                    setState(() {
                      couponApplied = true;
                      newsum = sum * (1-disc/100);
                    });
                    _showToastCorrect(context, "Coupon Applied Successfully!");
                  }
                  else
                    _showToastCorrect(context, "Invalid Coupon :(");
                },
               child: Text("Validate", style: TextStyle(color: Colors.orange),))
            ],
          ),
          Container(
            height: 80,
            color: Colors.orange,
            child: Center(
              child: InkResponse(
                onTap: () async {
                  if(couponApplied)
                    {
                      String url2 = "http://192.168.0.105:9000/api/coupon/checkout";
                      final msg2 = jsonEncode({"userId": "amandakay34138", "couponId": controller.text});
                      var response2 = await http.post(Uri.parse(url2), headers: {"Content-Type": "application/json"}, body: msg2);
                      print(response2.body);
                      if(response2.body == "completed")
                        _showToastCorrect(context, "Order Successful with Coupon applied");
                      else
                        _showToastCorrect(context, "Order Failed");
                    }
                  else
                    _showToastCorrect(context, "Order Successful");

                },
                child: Text(
                  "Make Payment Rs." + (newsum == 0.0?sum.toString():newsum.toString()),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
