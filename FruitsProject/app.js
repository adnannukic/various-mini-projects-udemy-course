const mongoose = require('mongoose');

//konektujemo se na mongo server, i tražimo fruitsDB, ako ne postoji onda je automatski kreira
mongoose.connect('mongodb://localhost:27017/fruitsDB');

//Kreiranje Scheme, odnosno kako ce svaki objekat unutar
//naše kolekcije izgledati
const fruitsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "No name specified"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

//Ime kolekcije postavljamo u jednini "Fruit",
//mongoose ga u pozadini sačuva kao množinu "Fruits"
const Fruit = mongoose.model("Fruit", fruitsSchema);

//Nakon kreiranja blueprinta, odnosno Schema-e, i kreiranja kolekcije
//možemo krenuti u kreiranje dokumenta!
const fruit = new Fruit({
    name: "Mango",
    rating: 10,
    review: "Pretty"
});

fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitsSchema
});
const Person = mongoose.model("Person", personSchema);
const person = new Person({
    name: "Alma",
    age: 22,
    favouriteFruit: fruit
});
// person.save();

Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);
    }
    else {
        mongoose.connection.close();
        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        });
    }
});

Person.updateOne({_id: "63791fc8fc59707e025eff0c"}, {favouriteFruit: fruit}, function(err){
    if(err) {
        console.log(err);
    }

    else {
        console.log("Successfully updated document");
    }
});

// Person.deleteMany({ name: "John" }, function (err) {
//     if (err) {
//         console.log(err);
//     }

//     else {
//         console.log("Successfully deleted many document with name 'John'");
//     }
// });