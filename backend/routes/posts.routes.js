const express = require('express')
const route = express.Router()
const Post = require("../models/post.model");

posts = [
  { '_id': "12", 'titre': "ghofrane", 'contenu': "gjhhg" },
  { '_id': "13", 'titre': "siwar", 'contenu': "hkj" },
  { '_id': "14", 'titre': "malek", 'contenu': "ghgb" },
  { '_id': "15", 'titre': "raed", 'contenu': "ygf" },
]
// GET
route.get("/", (req, res) => {
  res.status(200).json(posts)
})

// GET/:id
route.get("/:id", (req, res) => {

  Post = posts.find((e) => {
    return e._id == req.params.id
  })

  if (Post == undefined) {
    res.status(404).json({'message': 'post not found!'})
  }
  else {
    res.status(200).json(Post)
  }
})
// POST
route.post('/', (req, res) => {
  posts.push(req.body)
  res.status(201).json(posts)
})
//PUT
route.put('/:id', (req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if (err) {
      res.send(err);
    } else {
      post.titre = req.body.titre;
      post.contenu = req.body.contenu;

      post.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.json({ message: 'Post mis à jour avec succès.' });
        }
      });
    }
  });
});
//Delete
route.delete('/:id', (req, res) => {
  Post = posts.find((e) => {
    return e._id == req.params.id
  })

  Post.remove((e) =>{
    return e._id == req.params.id }
  )
    {
    if (err) {
      res.send(err);
    }
    else {
      res.status(204).json({ message: 'Post supprimé avec succès.' });
    }
  }
});
module.exports = route