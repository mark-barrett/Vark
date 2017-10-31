const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;


// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://admin:admin@ds227045.mlab.com:27045/vark', (err, db) => {
        if(err) return console.log(err);

        closure(db);
    })
}

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
    connection((db) => {
        db.collection('users')
        .find()
        .toArray()
        .then((users) => {
            response.data = users;
            res.json(response);
        })
        .catch((err) => {
            sendError(err, res);
        });
    })
})

// Add/register a user
router.post('/users', (req, res) => {
    var newUser = req.body;

    connection((db) => {
        db.collection('users').insertOne(newUser, (err, doc) => {
            if(err) {
                console.log("Cannot add a user");
            } else {
                res.redirect('/');
            }
        })
    })
})

module.exports = router;