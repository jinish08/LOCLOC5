import 'package:flutter/material.dart';
//import 'package:shop_app/models/Cart.dart';
import 'package:loc_coupon/models/product_model.dart';
//import '../../../constants.dart';
//import '../../../size_config.dart';

class CartCard extends StatefulWidget {
  const CartCard({
    Key? key,
    required this.cart,
    required this.index,
  }) : super(key: key);

  final List<Product> cart;
  final int index;

  @override
  State<CartCard> createState() => _CartCardState();
}

class _CartCardState extends State<CartCard> {
  @override
  Widget build(BuildContext context) {
    return Dismissible(
      key: Key(widget.index.toString()),
      direction: DismissDirection.endToStart,
      onDismissed: (direction) {
        widget.cart.removeAt(widget.index);
      },
      child: Row(
        children: [
          SizedBox(
            width: 88,
            child: AspectRatio(
              aspectRatio: 0.88,
              child: Container(
                padding: EdgeInsets.all(10),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(15),
                ),
                child: Image.asset(widget.cart[widget.index].imageUrl),
              ),
            ),
          ),
          SizedBox(width: 20),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                widget.cart[widget.index].name,
                style: TextStyle(color: Colors.black, fontSize: 16),
                maxLines: 2,
              ),
              SizedBox(height: 10),
              Text.rich(
                TextSpan(
                  text: "Rs. ${widget.cart[widget.index].price}",
                  style: TextStyle(
                      fontWeight: FontWeight.w600, color: Colors.cyan),
                  children: [
                    TextSpan(
                        text: " x1",
                        style: Theme.of(context).textTheme.bodyText1),
                  ],
                ),
              )
            ],
          )
        ],
      ),
    );
  }
}
