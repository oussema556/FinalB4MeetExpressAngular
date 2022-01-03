class Like{
  int _user_id;
  int _post_id;

  Like(this._user_id, this._post_id);

  int get post_id => _post_id;

  set user_id(int value) {
    _user_id = value;
  }

  int get user_id => _user_id;

  set post_id(int value) {
    _post_id = value;
  }
}