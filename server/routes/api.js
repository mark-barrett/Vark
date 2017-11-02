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

/*
    The following endpoints are for the user. Get all users, create a user, and get a user
*/

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
});

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
});

// Find user end point in order to check if the user exists
router.get('/users/:email', (req, res) => {
    connection((db) => {
        db.collection('users')
        .findOne({ email: req.params.email })
        .then((user) => {
            response.data = user;
            res.json(response);
        })
        .catch((err) => {
            sendError(err, res);
        });

    })
});

/*
    The following endpoints are for posts. Create a new posts. Get all of a users posts by email.
*/

// Add a post
router.post('/posts', (req, res) => {
    var newPost = req.body;

    connection((db) => {
        db.collection('posts').insertOne(newPost, (err, doc) => {
            if(err) {
                console.log("Cannot add post");
            } else {
                res.redirect('/');
            }
        })
    })
});

// Find all posts based on the user
router.get('/posts/:email', (req, res) => {
    connection((db) => {
        db.collection('posts')
        .find({ email: req.params.email })
        .toArray()
        .then((posts) => {
            response.data = posts;
            res.json(response);
        })
        .catch((err) => {
            sendError(err, res);
        });

    })
});



/*
    The following endpoints are for comments. Create a new comment. Get all comments based on the post.
*/

// Add a post
router.post('/comments', (req, res) => {
    var newComment = req.body;

    connection((db) => {
        db.collection('comments').insertOne(newComment, (err, doc) => {
            if(err) {
                console.log("Cannot add comment");
            } else {
                res.redirect('/');
            }
        })
    })
});

// Find all posts based on the user
router.get('/comments/:post_id', (req, res) => {
    connection((db) => {
        db.collection('comments')
        .find({ postId: req.params.post_id })
        .toArray()
        .then((comments) => {
            response.data = comments;
            res.json(response);
        })
        .catch((err) => {
            sendError(err, res);
        });

    })
});


module.exports = router;