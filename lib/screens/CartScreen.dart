import 'package:flutter/material.dart';
import 'package:loc_coupon/models/product_model.dart';
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

  void cartDown() {
    setState(() {
      len--;
      print(len);
    });
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
          Container(
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
          Container(
            height: 80,
            color: Colors.orange,
            child: Center(
              child: InkResponse(
                onTap: () async {
                  String str = "";
                  for (int i = 0; i < len; i++) str += (c[i].name) + ",";
                  // Check coupon code as well, change sum after it
                  //openCheckout(str, sum);
                  //if(controller.text) in coupons list apply coupon
                  // String url = 'http://10.0.2.2:9000/api/coupon/getCoupons';
                },
                child: Text(
                  "Make Payment Rs." + sum.toString(),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
