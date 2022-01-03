import 'package:flutter/material.dart';
import 'home.dart';
import 'login.dart';

class ScribesApp extends StatefulWidget {
  const ScribesApp({Key? key}) : super(key: key);

  @override
  State<ScribesApp> createState() => _ScribesAppState();
}

class _ScribesAppState extends State<ScribesApp> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Scribes',
      theme: ThemeData(primarySwatch: Colors.blue),
      initialRoute: '/login',
      onGenerateRoute: _getRoute,
      routes: {
        '/' : (BuildContext context)=>HomePage(),
      },
    );
  }

  Route<dynamic>? _getRoute(RouteSettings settings) {
    if (settings.name != '/login') {
      return null;
    }

    return MaterialPageRoute<void>(
      settings: settings,
      builder: (BuildContext context) => const LoginPage(),
      fullscreenDialog: true,
    );
  }
}