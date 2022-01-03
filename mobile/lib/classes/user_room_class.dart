class UserRoom{
  int _room_id;
  int _user_id;

  UserRoom(this._room_id, this._user_id);

  int get user_id => _user_id;
  int get room_id => _room_id;

  set user_id(int value) {
    _user_id = value;
  }
  set room_id(int value) {
    _room_id = value;
  }
}