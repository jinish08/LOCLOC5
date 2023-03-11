import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:loc_coupon/UI/getStarted.dart';
import 'package:provider/provider.dart';
import 'UI/wrapper.dart';
import 'auth/auth.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:get/get.dart';

void main() async{
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(StreamProvider<User?>.value(
    value: AuthService().user,
    initialData: FirebaseAuth.instance.currentUser,
    child: GetMaterialApp(
      theme: ThemeData(
        textTheme: TextTheme(
            bodyLarge: GoogleFonts.aladin(fontSize: 14,color: Colors.white)
        ),
      ),
        home: const GetStarted()
    ),
  ));
  // runApp(const MyApp());
}

