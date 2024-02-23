const mongoose = require("mongoose");

// const reviewSchema = new mongoose.Schema({
//   name: { Type: String, required: true },
//   rating: { type: Number, required: true },
//   comment: { type: String, required: true },
//   user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
// });

const prodcutSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true, default: 0 },
  numReview: { type: Number, required: true, default: 0 },
  price: { type: Number, required: true, default: 0 },
  countInStock: { type: Number, required: true, default: 0 },

  // reviews: [reviewSchema],
});

module.exports = mongoose.model("Product", prodcutSchema)


// Ce code source utilise Mongoose, une bibliothèque pour MongoDB avec Node.js, pour définir deux schémas de données liés aux produits et aux avis.

//     Ligne 1 : Importe le module mongoose.

//     Ligne 3-10 : Définit le schéma de données pour les avis (reviewSchema). Ce schéma comprend plusieurs champs :
//         name : Le nom associé à l'avis (de type String, obligatoire).
//         rating : La note de l'avis (de type Number, obligatoire).
//         comment : Le commentaire associé à l'avis (de type String, obligatoire).
//         user : L'ID de l'utilisateur qui a écrit l'avis, référençant le schéma "User" de Mongoose.

//     Ligne 12-24 : Définit le schéma de données pour les produits (productSchema). Ce schéma comprend plusieurs champs :
//         name : Le nom du produit (de type String, obligatoire).
//         image : Le chemin de l'image associée au produit (de type String, obligatoire).
//         description : La description du produit (de type String, obligatoire).
//         rating : La note moyenne du produit (de type Number, obligatoire, avec une valeur par défaut de 0).
//         numReview : Le nombre d'avis sur le produit (de type Number, obligatoire, avec une valeur par défaut de 0).
//         price : Le prix du produit (de type Number, obligatoire, avec une valeur par défaut de 0).
//         countInStock : Le nombre d'articles en stock (de type Number, obligatoire, avec une valeur par défaut de 0).
//         reviews : Un tableau d'objets d'avis, utilisant le schéma reviewSchema défini précédemment.

//     Ligne 26 : Exporte le modèle Mongoose basé sur le schéma du produit. Ce modèle est appelé "Product" et utilisera le schéma productSchema pour définir la structure des données dans la collection associée dans MongoDB.

// En résumé, ce code définit des schémas de données Mongoose pour les produits et les avis, puis exporte un modèle Mongoose pour les produits. Ce modèle peut être utilisé pour interagir avec une base de données MongoDB et effectuer des opérations CRUD (Create, Read, Update, Delete) sur les produits.