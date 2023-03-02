const mongoose = require('mongoose')

// definition du schéma
const postSchema = mongoose.Schema(
  {
    titre : {type: String, required: true},
    contenu : {type: String, required: true}
  }
)

// creation du model Appareil
module.exports = mongoose.model('Post', postSchema)