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
      const result = await client.query({
        text: "SELECT price, description, location, image, chalet.id FROM reservation JOIN chalet ON id_chalet = chalet.id WHERE id_client = $1",
        values: [query.rows[0].id]
      })
      res.json(result.rows)
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
    res.json(email)
    return
  }
})

router.get('/me', async (req, res) => {
  const result = await client.query({
    text: "SELECT email,status,age,profile_picture,id FROM users WHERE id=$1",
    values: [req.session.userId]
  })
  if (result.rows.length) {
    res.json(result.rows[0])
  }
  else {
    res.status(403).json({message: "vous n'êtes pas connecté"})
  }
  
})

router.get('/listChalet', async (req, res) => {
  const result = await client.query("SELECT * FROM chalet")
  res.json(result.rows)
})

router.get('/chalet/:id', async (req, res) => {
  const result = await client.query({
    text: "SELECT * FROM chalet WHERE id = $1",
    values: [req.params.id]
  })
  console.log(req.params.id,result.rows[0])
  res.json(result.rows[0]) 
})

router.post('/deconnect', (req, res) => {
  req.session.destroy()
  res.json({message : "succesful deconnection"})
})

router.post('/reservation', async (req, res) => {

})

module.exports = router