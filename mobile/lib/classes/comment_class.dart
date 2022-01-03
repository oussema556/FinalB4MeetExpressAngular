import 'dart:ffi';

class CommentClass{
  int _comment_id;
  int _user_id;
  int _post_id;
  String _comment_content;

  CommentClass(
      this._comment_id, this._user_id, this._post_id, this._comment_content);

  String get comment_content => _comment_content;

  int get post_id => _post_id;

  int get user_id => _user_id;

  int get comment_id => _comment_id;

  set comment_content(String value) {
    _comment_content = value;
  }

  set post_id(int value) {
    _post_id = value;
  }

  set user_id(int value) {
    _user_id = value;
  }

  set comment_id(int value) {
    _comment_id = value;
  }
}