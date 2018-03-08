const mongoose = require('mongoose');
const lista = require('../models/List');
const Users = require('../models/User');
const dbName = 'viajefacils';

mongoose.connect(`mongodb://localhost/${dbName}`)
    .then(res=>console.log(`conected to ${dbName}`))
    .catch(err=>console.log(err));

mongoose.Promise = Promise;

const lista = [
    {
        name: "Camiseta corta",
        temperature: 24,
        WeatherText: "Rain"
        },
        {
        name: "Pantalon Corto",
        temperature: 24,
        WeatherText: "Rain"
        },{
        name: "Sudadera",
        temperature: 10,
        WeatherText: "Rain"
            
        },{
        name: "Cantimplora",
        temperature: 11,
        WeatherText: "Rain"
        }
  ]

const users = 
    {
      username: "jesus",
      password: "1234",
      email: "jesusdelrioc@gmail.com",
      photo: "https://farm4.static.flickr.com/3922/14417871450_8842b73463_b.jpg"
    }
  

List.collection.drop();
Users.collection.drop();

Promise.all([Users.create(users),List.create(listas)])
    .then(array=>{
        console.log('Seeds Created!');
        mongoose.connection.close();

    })
    .catch(err=>console.log(err));