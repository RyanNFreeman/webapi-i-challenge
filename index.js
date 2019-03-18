// implement your API here
const express = require('express')

const db = require('./data/db.js')

const server = express();

server.use(express.json())

///CREATE operations
server.post('/api/users', (req, res) => {
    //Creates a user using the information sent inside the request body
    const newUser = req.body;
    !newUser.name || !newUser.bio ?
    res.status(400).json({ errorMessage: "Please provide name and bio for the user."})
    : db
        .insert(newUser)
        .then(user => {
            res.status(201).json(user);
        })
        .catch(error => {
            res.status(500).json({
                error: "There was an error while saving the user to the database"
            })
        })
}) //NOT WORKING YET

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
}) //WORKING

server.get('/api/users:id', (req, res) => {
    const { id } = req.params;
    db.findById(id)
    .then(users => {
        res.status(200).json(users)
    })
    .catch(error => {
        res.status(404).json({ })
    })
    
}) // NOT WORKING YET

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

