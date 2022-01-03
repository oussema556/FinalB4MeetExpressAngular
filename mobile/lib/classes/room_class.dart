class Room{
  int _room_id;
  DateTime _CreationDate;
  String _lastMsg;

  Room(this._room_id, this._CreationDate, this._lastMsg);

  int get room_id => _room_id;
  DateTime get CreationDate => _CreationDate;
  String get lastMsg => _lastMsg;
  set room_id(int value) {
    _room_id = value;
  }

  set CreationDate(DateTime value) {
    _CreationDate = value;
  }

  set lastMsg(String value) {
    _lastMsg = value;
  }
}