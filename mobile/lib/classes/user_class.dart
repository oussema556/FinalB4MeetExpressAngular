import 'package:flutter/widgets.dart';

class User{
  int _id;
  String _full_name;
  String _Email;
  String _Password;
  DateTime _CreateDate;
  String _Bio;
  Image _profilePic;
  Image _CoverPic;
  String _City;
  String _Country;
  BigInt _phone;


  User(
      this._id,
      this._full_name,
      this._Email,
      this._Password,
      this._CreateDate,
      this._Bio,
      this._profilePic,
      this._CoverPic,
      this._City,
      this._Country,
      this._phone);

  BigInt get phone => _phone;
  String get Country => _Country;
  String get City => _City;
  Image get CoverPic => _CoverPic;
  Image get profilePic => _profilePic;
  String get Bio => _Bio;
  DateTime get CreateDate => _CreateDate;
  String get Password => _Password;
  String get Email => _Email;
  String get full_name => _full_name;
  int get id => _id;

  set phone(BigInt value) {
    _phone = value;
  }
  set Country(String value) {
    _Country = value;
  }
  set City(String value) {
    _City = value;
  }
  set CoverPic(Image value) {
    _CoverPic = value;
  }
  set profilePic(Image value) {
    _profilePic = value;
  }
  set Bio(String value) {
    _Bio = value;
  }
  set CreateDate(DateTime value) {
    _CreateDate = value;
  }
  set Password(String value) {
    _Password = value;
  }
  set Email(String value) {
    _Email = value;
  }
  set full_name(String value) {
    _full_name = value;
  }
  set id(int value) {
    _id = value;
  }
}
