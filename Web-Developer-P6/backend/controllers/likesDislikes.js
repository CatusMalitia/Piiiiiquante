const Thing = require('../models/Thing');

exports.likesDislikes = (req, res, next) => {
    Thing.findOne({_id : req.params.id})
    .then(object => {
            if((!object.usersLiked.includes(req.body.userId)) && req.body.like === 1) {
                Thing.updateOne({_id : req.params.id},
                    {
                        $inc: {likes: 1},
                        $push: {usersLiked: req.body.userId}
                    })
                    .then(() => res.status(200).json({ message: "Le like de l'utilisateur est bien incrémenté" }))
                    .catch(error => res.status(404).json( {error} ));
            }
            if(object.usersLiked.includes(req.body.userId) && req.body.like === 0) {
                Thing.updateOne({_id : req.params.id},
                    {
                        $inc: {likes: -1},
                        $pull: {usersLiked: req.body.userId}
                    })
                    .then(() => res.status(200).json({ message: "Le like de l'utilisateur est bien décrémenté" }))
                    .catch(error => res.status(404).json( {error} ))
            }
            if(!object.usersDisliked.includes(req.body.userId) && req.body.like === -1) {
                Thing.updateOne({_id : req.params.id},
                    {
                        $inc: {dislikes: 1},
                        $push: {usersDisliked: req.body.userId}
                    })
                    .then(() => res.status(200).json({ message: "Le dislike de l'utilisateur est bien incrémenté" }))
                    .catch(error => res.status(404).json( {error} ));
            }
            if(object.usersDisliked.includes(req.body.userId) && req.body.like === 0) {
                Thing.updateOne({_id : req.params.id},
                    {
                        $inc: {dislikes: -1},
                        $pull: {usersDisliked: req.body.userId}
                    })
                    .then(() => res.status(200).json({ message: "Le dislike de l'utilisateur est bien incrémenté" }))
                    .catch(error => res.status(404).json( {error} ));
            }
    })
    .catch(error => res.status(404).json( {error} ));   
};





        /*else {
        switch(req.body.likes) {

        case 1 :
            if(!object.usersLiked.includes(req.body.userId) && req.body.like === 1) {
                Thing.updateOne({_id : req.params.id},
                    {
                        $inc: {likes: 1},
                        $push: {usersLiked: req.body.userId}
                    })
                    .then(() => res.status(200).json({ message: "Le like de l'utilisateur est bien incrémenté" }))
                    .catch(error => res.status(404).json( {error} ));
            }
            break;
        case -1 :

            if(!object.usersDisliked.includes(req.body.userId) && req.body.like === -1) {
                Thing.updateOne({_id : req.params.id},
                    {
                        $inc: {dislikes: 1},
                        $push: {usersDisliked: req.body.userId}
                    })
                    .then(() => res.status(200).json({ message: "Le dislike de l'utilisateur est bien incrémenté" }))
                    .catch(error => res.status(404).json( {error} ));
            }
            break;
        case 0 :
            if(object.usersLiked.includes(req.body.userId) && req.body.like === 0) {
                Thing.updateOne({_id : req.params.id},
                    {
                        $inc: {likes: -1},
                        $pull: {usersLiked: req.body.userId}
                    })
                    .then(() => res.status(200).json({ message: "Le like de l'utilisateur est bien décrémenté" }))
                    .catch(error => res.status(404).json( {error} ))
            }
            else if(object.usersLiked.includes(req.body.userId) && req.body.like === 0) {
                Thing.updateOne({_id : req.params.id},
                    {
                        $inc: {dislikes: -1},
                        $pull: {usersDisliked: req.body.userId}
                    })
                    .then(() => res.status(200).json({ message: "Le dislike de l'utilisateur est bien incrémenté" }))
                    .catch(error => res.status(404).json( {error} ));
            }
            break;
        }
        }  */
