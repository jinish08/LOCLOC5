import 'package:flutter/material.dart';
import 'package:razorpay_flutter/razorpay_flutter.dart';

class PaymentScreen extends StatefulWidget {
  const PaymentScreen({Key? key}) : super(key: key);

  @override
  State<PaymentScreen> createState() => _PaymentScreenState();
}

class _PaymentScreenState extends State<PaymentScreen> {

  late Razorpay _razorpay;

  @override
  void initState() {
    super.initState();
    _razorpay = Razorpay();
    _razorpay.on(Razorpay.EVENT_PAYMENT_SUCCESS, _handlePaymentSuccess);
    _razorpay.on(Razorpay.EVENT_PAYMENT_ERROR, _handlePaymentError);
    _razorpay.on(Razorpay.EVENT_EXTERNAL_WALLET, _handleExternalWallet);
  }

  // to handle successful payments
  void _handlePaymentSuccess(PaymentSuccessResponse response) {
    print("SUCCESS: " + response.paymentId!);
  }

  // to handle payment errors. I am just printing the response.
  void _handlePaymentError(PaymentFailureResponse response) {
    print("ERROR: " + response.code.toString() + " - " + response.message!);
  }

  // to handle cases when payment is made via external wallet.
  void _handleExternalWallet(ExternalWalletResponse response) {
    print("EXTERNAL_WALLET: " + response.walletName!);
  }

  void openCheckout() async {
    var options = {
      'key': 'rzp_test_prFpp5n1LUT3OR',
      'amount': 100*100,
      'name': 'Your E-Commerce App',
      'description': 'Fine T-Shirt',
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
    }
  }


  @override
  Widget build(BuildContext context) {
    return Container(
      child: TextButton(onPressed: openCheckout, child: Text('Pay Now')),
    );
  }
}
