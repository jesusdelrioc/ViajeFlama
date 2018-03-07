const express = require('express')
const router = express.Router()
const productos =require("../models/Product")

router.get('/list', (req, res, next) => {
  productos.find()
    .then((list) => res.status(200).json(list))
    .catch((err) => res.status(500).json({
      message:"error",
      error:err
    }))
});
router.get('/list/:id', (req, res, next)=>{
productos.findById(req.params.id)
    .then((list) => res.status(200).json(list))
    .catch((err) => res.status(500).json({
      message:"error",
      error:err
}))
});

router.post('/new', (req, res, next) => {
  const name = req.body.name
  const newproductos = new Productos({
  name, username, password
  })
 
newproductos.save()
  .then((newproductos) => res.status(200).json(newproductos))
  .catch(err => res.status(500).json({
    message: "no se puede mostrar",
    error:err
  }))
});


module.exports = router;

