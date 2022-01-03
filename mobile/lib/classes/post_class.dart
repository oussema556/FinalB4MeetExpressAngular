class Post{
  int _post_id;
  String _title;
  String _content;
  List<String> _categories;
  DateTime _create_date;
  int _like;
  int _comments;
  String _picture;
  int _user_id;

  Post(
      this._post_id,
      this._title,
      this._content,
      this._categories,
      this._create_date,
      this._like,
      this._comments,
      this._picture,
      this._user_id);

  int get user_id => _user_id;

  String get picture => _picture;

  int get comments => _comments;

  int get like => _like;

  DateTime get create_date => _create_date;

  List<String> get categories => _categories;

  String get content => _content;

  String get title => _title;

  set post_id(int value) {
    _post_id = value;
  }

  int get post_id => _post_id;

  set title(String value) {
    _title = value;
  }

  set user_id(int value) {
    _user_id = value;
  }

  set picture(String value) {
    _picture = value;
  }

  set comments(int value) {
    _comments = value;
  }

  set like(int value) {
    _like = value;
  }

  set create_date(DateTime value) {
    _create_date = value;
  }

  set categories(List<String> value) {
    _categories = value;
  }

  set content(String value) {
    _content = value;
  }
}