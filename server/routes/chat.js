const express = require('express');
const router = express.Router();
module.exports = (db, ObjectId) => {
    const collection = db.collection('chat');
    router.get('/', (req, res, next) => {
        collection.find().toArray((err, chats) => {
            if(err) throw err;
            res.status(200).json(chats);
        })
    })

    router.post('/', (req, res, next) => {
        console.log(req.body)
        const data = {  
            name : req.body.name,
            message : req.body.message
        }

        collection.insertOne(data, (err, chatData) => {
            if(err) throw err;
            res.status(201).json(chatData);
        })
    })

    router.delete('/:id', (req, res, next) => {
        collection.findOneAndDelete({_id : ObjectId(req.params.id)}, (err,result)=>{
            if(err) throw err;
            res.status(200).json(result);
        })
    })



    return router;
}