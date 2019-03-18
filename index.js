// implement your API here
const express = require('express')

const db = require('./data/db.js')

const server = express();

server.use(express.json())

///CREATE operations
server.post('/api/users', (req, res) => {
    //Creates a user using the information sent inside the request body
    const userInfo = req.body;
    console.log('user information', userInfo);
})

///READ operations
server.get('/api/users', (req, res) => {
    //returns an array of all the user objects contained in db
    db
    .find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(error => {
        res.status(500).json({ error: "The users information could not be retrieved." })
    })
}) //not working yet

server.get('/api/users:id', (req, res) => {
    res.send('Sanity Check')
})

//UPDATE operations
server.put('/api/users/:id', (req, res) => {
    //Updates the user with the specified id using data from the request body. Returns the modified document, NOT the original.
})

//DELETE operations
server.delete('/api/users/:id', (req, res) => {
    //Removes the user with the specified id and returns the deleted user
})

server.listen(5000, () => {
    console.log('\n** API up and running on port 5k ***')
})

