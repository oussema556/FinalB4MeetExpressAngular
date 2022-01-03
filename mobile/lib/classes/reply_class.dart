class Reply{
  int _user_id;
  int _comment_id;
  String _reply_comment;

  Reply(this._user_id, this._comment_id, this._reply_comment);

  String get reply_comment => _reply_comment;

  set user_id(int value) {
    _user_id = value;
  }

  int get comment_id => _comment_id;

  int get user_id => _user_id;

  set comment_id(int value) {
    _comment_id = value;
  }

  set reply_comment(String value) {
    _reply_comment = value;
  }
}