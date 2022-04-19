
import db from "../data/dblocal.js"

const controller = {
  list: function (req, res) {
    console.log("Controller LIST");
    res.status(200).json(db.data.bandas);
  },

  add: function (req, res) {
    console.log("Controller ADD req.body: ", req.body);
    let obj = {
      id: req.body.id,
      name: req.body.name,
      country: req.body.country,
      style: req.body.style,
    }
    db.data.bandas[obj.id] = obj;
    db.write();
    res.status(200).json(db.data.bandas);
  },

  update: function (req, res) {
    console.log("Controller UPDATE req.body: ", req.body);
    let obj = {
      id: req.body.id,
      name: req.body.name,
      country: req.body.country,
      style: req.body.style,
    }
    db.data.bandas[obj.id] = obj;
    db.write();
    res.status(200).json(db.data.bandas);
  },

  remove: function (req, res) {
    console.log("Controller REMOVE req.body: ", req.body);
    let id = req.body.id;
    delete db.data.bandas[id];
    db.write();
    res.status(200).json(db.data.bandas);
  },
};

export default controller;