const db = require("../models");
const bcrypt = require("bcryptjs");
const User =db.user;


exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.getUser = async (req,res)=>{
  const id = req.params.id;
  const user = await User.findById(id).populate("roles");

  res.send(user);

}

exports.changePassword = async (req,res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  if(user._id != req.userId){
    return res.status(401).send({
      message: `You can only update your own profile`
    })
  }else{
    user.password = bcrypt.hashSync(req.body.password, 8)
    user.save()
        .then(data =>{
          res.send(data);
        })
  }

}

exports.changeGeneralInfos = async (req,res) =>{
  const id = req.params.id;
  const user = await User.findById(id);
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  if(user._id != req.userId){
    return res.status(401).send({
      message: `You can only update your own profile`
    })
  }else{
    User.findByIdAndUpdate(id,req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update User with id=${id}. Maybe User was not found!`
            });
          } else res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating User with id=" + id
          });
        });
  }
}