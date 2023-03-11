import 'package:flutter/material.dart';
import 'package:loc_coupon/models/product_model.dart';

class CartScreen extends StatelessWidget {
  //const CartScreen({required Key key}) : super(key: key);

  makeitem(int index) {
    return ListTile(
      contentPadding: EdgeInsets.all(20),
      leading: Image(
        image: AssetImage(cart[index].imageUrl),
        height: double.infinity,
        width: 100,
        fit: BoxFit.contain,
      ),
      title: Text(cart[index].name),
      subtitle: Text(
        "x1",
        style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
      ),
      trailing: Text("\$${cart[index].price.toStringAsFixed(2)}",
          style: TextStyle(
              color: Colors.orange, fontWeight: FontWeight.bold, fontSize: 16)),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        centerTitle: true,
        backgroundColor: Colors.white,
        title: Text(
          "Shopping Cart (${cart.length})",
          style: TextStyle(color: Colors.black),
        ),
      ),
      body: Column(
        children: [
          Expanded(
            child: ListView.separated(
              itemBuilder: (ctx, index) => makeitem(index),
              separatorBuilder: (ctx, index) => Divider(color: Colors.grey[300]),
              itemCount: cart.length,
            ),
          ),
          Container(
            height: 80,
            color: Colors.orange,
            child: Center(
              child: Text(
                "PLACE ORDER",
                style: TextStyle(
                    color: Colors.white, fontSize: 20, fontWeight: FontWeight.bold),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
