class Category{
  int _category_id;
  String _category_name;

  Category(this._category_id, this._category_name);

  String get category_name => _category_name;

  set category_id(int value) {
    _category_id = value;
  }

  int get category_id => _category_id;

  set category_name(String value) {
    _category_name = value;
  }
}