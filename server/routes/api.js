const express = require('express')
const router = express.Router()

const bcrypt = require('bcrypt')
const { Client } = require('pg')

const client = new Client({
 user: 'postgres',
 host: 'localhost',
 password: '123',
 database: 'Projet'
})

client.connect()

class Panier {
  constructor () {
    this.createdAt = new Date()
    this.updatedAt = new Date()
    this.articles = []
  }
}

router.use((req, res, next) => {
  // l'utilisateur n'est pas reconnu, lui attribuer un panier dans req.session
  if (typeof req.session.panier === 'undefined') {
    req.session.panier = new Panier()
  }
  next()
})

router.post('/login', async (req,res) => {
  const email = req.body.email
  const password = req.body.password
  const query = await client.query({
    text: "SELECT * FROM users WHERE email=$1",
    values: [email]
  })
  if (query.rows.length) {
    const pass = await bcrypt.compare(password, query.rows[0].password)
    if (! query.length && pass && query.rows[0].id!== req.session.userId) {
      req.session.userId = query.rows[0].id
      res.json(query.rows[0].id)
      return
    }
    else if(query.rows[0].id === req.session.userId && query.rows[0].email === email && pass) {
      res.status(401).json({message : 'utilisateur déjà authentifier'})
      return
    }
  }
  else {
    res.status(403).json({message: "vous n'êtes pas enregistré"})
  }
})
  
router.post('/register', async (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const status = req.body.status
  const age = req.body.age
  const hash = await bcrypt.hash(password, 10)
  const result = await client.query("SELECT email FROM users")
  if (typeof email !== 'string' || email === '' ||
      typeof password !== 'string' || password === '') {
    return
  }
  else if (result.rows.filter(element => element.email == email).length) {
    res.status(400).json({ message: 'email déjà utilisé'})
    return
  }
  else {
    await client.query({
      text: "INSERT INTO Users(email, password, status, age) VALUES ($1, $2, $3, $4)",
      values: [email, hash.toString(), status, age]
    })
    console.log(req.session.userId)
    res.json(email)
    return
  }
})

router.get('/ListChalet', async (req,res) => {
  const result = await client.query("SELECT * FROM Chalet")
  res.json(result)
})

module.exports = router