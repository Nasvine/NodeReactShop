// Importe le module 'express' et l'assigne à la variable 'express'.
const express = require("express");
// Crée une application express et l'assigne à la variable 'app'.
const app = express();
// Importe le module 'dotenv' qui permet de charger les variables d'environnement depuis un fichier .env.
const dotenv = require("dotenv");
// Charge les variables d'environnement à partir du fichier .env.
dotenv.config();
// Récupère la valeur de la variable d'environnement 'PORT' et l'assigne à la constante 'PORT'.
const PORT = process.env.PORT;
const products = require('./data/Products');

const cors = require('cors');

app.use(cors());

// Définit une route pour l'URL '/' avec la méthode HTTP 'GET'.
// Lorsque quelqu'un accède à la racine de l'application, elle renvoie "app in running".

// app.get('/', (req, res) => {
//     res.send("app in running");
// })

//Connect to mongo DB

const mongoose = require("mongoose");
//connect db
mongoose
  .connect(process.env.MONGOOSEDB_RUL)
  .then(() => console.log("db connected"))
  .then((err) => {
    err;
  });

// username mongo :vinenassara
// password mongo :y3sMVcvC3tr2H1RE
//mongodb+srv://vinenassara:y3sMVcvC3tr2H1RE@cluster0.hugcciw.mongodb.net/react-node-app

const databaseSeeder = require("./databaseSeeder");

//database seeder routes
app.use("/api/seed", databaseSeeder);

const userRoute = require("./routes/User");
const productRoute = require("./routes/Product");
const orderRoute = require("./routes/Order");

app.use(express.json())

app.get('/message', (req, res) => {
  res.json({ message: "Hello from server!" });
});



//routes for users
app.use("/api/users", userRoute);

//routes for products
app.use("/api/products", productRoute);

//routes for orders
app.use("/api/orders", orderRoute);





// Ligne 13-15: Lance le serveur express pour écouter les connexions entrantes sur le port spécifié par la variable 'PORT'.
// Une fois que le serveur est démarré, affiche un message dans la console.

app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`)
} )


// APi

// app.get('/api/products', (req, res) => {
//     res.json(products);
// })

// app.get('/api/products/:id', (req, res) => {
//     const product = products.find((product) => product.id == req.params.id)
//     res.json(product);
// })