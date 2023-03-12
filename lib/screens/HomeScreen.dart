import 'dart:async';

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:loc_coupon/models/product_model.dart';
import 'package:loc_coupon/screens/CartScreen.dart';
import 'package:loc_coupon/widgets/productcarousal.dart';
import 'package:flutter/services.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class HomeScreen extends StatefulWidget {
  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

//List<Product> cart = [];

Future<void> fetchData() async {
  String url = "http://172.20.10.3:9000/api/coupon/getCoupons";
  final msg = jsonEncode({"userId": "amandakay14583"});
  var response =
      await http.post(Uri.parse(url), headers: {"Content-Type": "application/json"}, body: msg);
  print(response.body);
}

class _HomeScreenState extends State<HomeScreen> {
  //const HomeScreen({required Key key}) : super(key: key);
  int len = 0;
  void cartUp() async {
    setState(() {
      len++;
      print(len);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 5.0,
        leading: Padding(
          padding: EdgeInsets.only(left: 20),
          child: InkResponse(
            onTap: () {},
            child: Icon(
              Icons.menu,
              size: 30,
              color: Colors.black,
            ),
          ),
        ),
        title: Text(
          "Your Ecommerce App",
          style: GoogleFonts.aladin(color: Colors.black, fontSize: 35),
        ),
        centerTitle: true,
        actions: <Widget>[
          Stack(
            children: <Widget>[
              Padding(
                padding: EdgeInsets.only(top: 10, right: 20),
                child: InkResponse(
                  onTap: () {
                    Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (_) => CartScreen(
                                  cart: cart,
                                )));
                  },
                  child: Icon(
                    Icons.shopping_basket,
                    size: 30,
                    color: Colors.black,
                  ),
                ),
              ),
              Positioned(
                bottom: 8,
                right: 16,
                child: Container(
                  height: 20,
                  width: 20,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    color: Colors.orange,
                  ),
                  child: Center(
                    child: Text(
                      "${len}",
                      style: TextStyle(fontWeight: FontWeight.w500, color: Colors.white),
                    ),
                  ),
                ),
              )
            ],
          ),
          Padding(
            padding: EdgeInsets.only(right: 20),
            child: InkResponse(
              onTap: () {},
              child: Icon(
                Icons.search,
                size: 30,
                color: Colors.black,
              ),
            ),
          ),
        ],
      ),
      body: ListView(
        children: <Widget>[
          Stack(
            children: <Widget>[
              Image(
                image: AssetImage("assets/images/samsung_gear_vr.jpg"),
              ),
              Positioned(
                left: 20,
                right: 20,
                bottom: 30,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Text("POPULAR",
                        style: TextStyle(
                            color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold)),
                    SizedBox(
                      height: 10,
                    ),
                    Text("The future of",
                        style: TextStyle(
                            color: Colors.white, fontSize: 30, fontWeight: FontWeight.w500)),
                    Text("virtual reality",
                        style: TextStyle(
                            color: Colors.white, fontSize: 32, fontWeight: FontWeight.bold)),
                    SizedBox(height: 15),
                    Container(
                      padding: EdgeInsets.all(10),
                      height: 70,
                      width: double.infinity,
                      color: Colors.white,
                      child: Row(
                        children: <Widget>[
                          Image(
                            image: AssetImage('assets/images/gear_vr.jpg'),
                            height: 50,
                          ),
                          SizedBox(
                            width: 10,
                          ),
                          Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: const <Widget>[
                              Text(
                                "Samsung Gear VR",
                                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                              ),
                              Text(
                                "FOR GAMERS",
                                style: TextStyle(fontWeight: FontWeight.w600, color: Colors.grey),
                              ),
                            ],
                          ),
                          Expanded(
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.end,
                              children: <Widget>[
                                Container(
                                  width: 60,
                                  child: ElevatedButton(
                                    child: Icon(
                                      Icons.arrow_forward,
                                      color: Colors.white,
                                      size: 30,
                                    ),
                                    onPressed: () {},
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    )
                  ],
                ),
              )
            ],
          ),
          const SizedBox(
            height: 15,
          ),
          EmbededComponent(),
          SizedBox(
            height: 15,
          ),
          ProductCarousal(title: "Deals of the Day!", products: products, cartUp: cartUp),
          ProductCarousal(title: "Popular Books", products: books, cartUp: cartUp),
        ],
      ),
    );
  }
}

class EmbededComponent extends StatelessWidget {
  // EmbededComponent({required this.bg,required this.text1});
  final String code = "AXU21AZ3";
  void copyToClipboard(String text) {
    Clipboard.setData(ClipboardData(text: text));
  }

  void _showToastCorrect(BuildContext context) {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        elevation: 10,
        duration: Duration(seconds: 2),
        content: Text('Copied to Clipboard!'),
      ),
    );
  }

  final Stream<List> _bids = (() {
    late final StreamController<List> controller;
    var response;
    bool loaded = false;
    controller = StreamController<List>(
      onListen: () async {
        String url = "http://172.20.10.3:9000/api/coupon/getCoupons";
        final msg = jsonEncode({"userId": "amandakay14583"});
        response = await http.post(Uri.parse(url),
            headers: {"Content-Type": "application/json"}, body: msg);
        print(response);
        print(response.body);
        // await Future<void>.delayed(const Duration(seconds: 1));
        // controller.add(1);
        // await Future<void>.delayed(const Duration(seconds: 1));
        // await controller.close();
      },
    );
    return response.body;
  })();

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<Object>(
        stream: _bids,
        builder: (context, snapshot) {
          return SizedBox(
            width: 800,
            height: 175,
            child: ListView.builder(
                scrollDirection: Axis.horizontal,
                itemCount: 3,
                itemBuilder: (context, snapshot) {
                  return GestureDetector(
                    onTap: () {
                      copyToClipboard(code);
                      _showToastCorrect(context);
                    },
                    child: Container(
                      margin: const EdgeInsets.all(15),
                      height: 150,
                      width: MediaQuery.of(context).size.width - 35,
                      decoration: BoxDecoration(
                        color: Colors.black,
                        borderRadius: BorderRadius.circular(15),
                        boxShadow: const [
                          BoxShadow(
                              color: Colors.black,
                              offset: Offset(2, 2),
                              blurStyle: BlurStyle.normal,
                              blurRadius: 10),
                        ],
                      ),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Expanded(
                            flex: 2,
                            child: Padding(
                              padding: EdgeInsets.all(15),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                children: [
                                  Text(
                                    "Flat 15% on 1st Purchase",
                                    style: GoogleFonts.breeSerif(fontSize: 25, color: Colors.white),
                                  ),
                                  Text(
                                    "Code: $code",
                                    style: GoogleFonts.notoSerif(fontSize: 20, color: Colors.white),
                                  )
                                ],
                              ),
                            ),
                          ),
                          ClipRRect(
                              borderRadius: BorderRadius.only(
                                  topRight: Radius.circular(15), bottomRight: Radius.circular(15)),
                              child: Image.network(
                                  "https://asset20.ckassets.com/resources/image/ckseller/CKS-Headphones-000032_2-1613480840.jpg"))
                        ],
                      ),
                    ),
                  );
                }),
          );
        });
  }
}
