import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';


class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  Icon _heartIcon = Icon(Icons.favorite_border_outlined,color: Colors.white,);
  bool _checkLike = false;
  Icon _doneIcon = Icon(Icons.done_outlined,);
  bool _checkDone = false;
  int _selectedIndex = 0;
  String _display="";
  void _clickedItem(int index){
    setState(() {
      _selectedIndex=index;
      switch(_selectedIndex){
        case 0 : {
          _display = "$_selectedIndex: Home view";
        }
        break;
        case 1 : {
          _display = "$_selectedIndex: Settings view";
        }
        break;
        case 2 : {
          _display = "$_selectedIndex: Account view";
        }
        break;
      }
    });
  }
  void _pressThisSearch(){
    print('Search button');
  }
  void _pressThisHeart(){
    setState(() {
      if(_checkLike){
        _heartIcon = Icon(Icons.favorite_outlined,color: Colors.white,);
        _checkLike = false;
      }else{
        _heartIcon = Icon(Icons.favorite_border_outlined,color: Colors.white,);
        _checkLike = true;
      }
    });
  }
  void _iconChanger(){
    setState(() {
      if(_checkDone){
        _doneIcon = Icon(Icons.done_outlined,);
        _checkDone = false;
      }else{
        _doneIcon = Icon(Icons.done_all_outlined,);
        _checkDone = true;
      }

    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Scribes'),
        backgroundColor: Colors.cyan,
        actions: <Widget>[
          IconButton(
            icon: _heartIcon,
            onPressed: _pressThisHeart,
          ),
        ],
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              '${_display}',
              style: TextStyle(color: Colors.cyan,fontSize: 50),
            )
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _iconChanger,
        backgroundColor: Colors.indigo,
        foregroundColor: Colors.black,
        child: _doneIcon,
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.endFloat,

      bottomNavigationBar: BottomNavigationBar(
          items: <BottomNavigationBarItem>[
            BottomNavigationBarItem(
              icon: Icon(Icons.home_outlined, color: Colors.white),
              title: Text('Home',style: TextStyle(color: Colors.white))
           ),
            BottomNavigationBarItem(
                icon: Icon(Icons.settings, color: Colors.white),
                title: Text('Settings',style: TextStyle(color: Colors.white))
            ),
            BottomNavigationBarItem(
                icon: Icon(Icons.account_circle, color: Colors.white),
                title: Text('Account',style: TextStyle(color: Colors.white))
            ),
          ],
        backgroundColor: Colors.cyan,
        currentIndex: _selectedIndex,
        onTap: _clickedItem,
      )
    );
  }


}
