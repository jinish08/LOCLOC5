import 'package:firebase_auth/firebase_auth.dart';
import 'package:loc_coupon/UI/login.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'bottomBar.dart';

class Wrapper extends StatelessWidget {
  const Wrapper({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final user = Provider.of<User?>(context);

    if(user == null) {
      return const LoginPage();
    }
    return const AnimatedBottomBar();
  }
}
