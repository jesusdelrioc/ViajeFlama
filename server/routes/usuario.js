const express = require('express')
const router = express.Router()
const usuario = require("../models/User")

router.get('/', (req, res, next) => {
  usuario.findById(req.user._id)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json({
      message: "usuario no encontrado",
      error: err
    }))
});

router.put('/edit/:id', (req, res, next) => {
  console.log("(.)(.)")
  const id = req.params.id;
  const username  = req.body.form.username;
  const updates =   username 
  console.log(req.body.form.username)
  usuario.findByIdAndUpdate(
    id,
    {username },
    { new: true }
  )
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json({
      message: "usuario no encontrado",
      error: err
    }));
});


module.exports = router;
