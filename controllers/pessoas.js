
import db from "../data/dblocal.js"

const controller = {
  list: function (req, res) {
    console.log("Controller LIST");
    res.status(200).json(db.data.pessoas);
  },

  add: function (req, res) {
    console.log("Controller ADD req.body: ", req.body);
    let obj = {
      id: req.body.id,
      name: req.body.name,
    }
    db.data.pessoas[obj.id] = obj;
    db.write();
    res.status(200).json(db.data.pessoas);
  },

  update: function (req, res) {
    console.log("Controller UPDATE req.body: ", req.body);
    let obj = {
      id: req.body.id,
      name: req.body.name,
    }
    db.data.pessoas[obj.id] = obj;
    db.write();
    res.status(200).json(db.data.pessoas);
  },

  remove: function (req, res) {
    console.log("Controller REMOVE req.body: ", req.body);
    let id = req.body.id;
    delete db.data.pessoas[id];
    db.write();
    res.status(200).json(db.data.pessoas);
  },
};

export default controller;