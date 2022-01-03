class Message{
  int _msg_id;
  String _msg_content;
  DateTime _creation_date;
  int _sender_id;

  Message(this._msg_id, this._msg_content, this._creation_date, this._sender_id);

  int get sender_id => _sender_id;
  DateTime get creation_date => _creation_date;
  String get msg_content => _msg_content;
  int get msg_id => _msg_id;

  set sender_id(int value) {
    _sender_id = value;
  }
  set creation_date(DateTime value) {
    _creation_date = value;
  }
  set msg_content(String value) {
    _msg_content = value;
  }
  set msg_id(int value) {
    _msg_id = value;
  }
}