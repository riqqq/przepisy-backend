const Przepis = require('../models/przepis.model');

exports.createPrzepis = (req, res) => {
    let produkty = req.body.wymaganeProdukty + '';
    let wymaganeProduktyArr = produkty.split(', ');
    const przepis = new Przepis({
        nazwa: req.body.nazwa,
        opis: req.body.opis,
        trudnosc: req.body.trudnosc,
        wymaganeProdukty: wymaganeProduktyArr,
        postedBy: req.body.postedBy
    });

    przepis.save().then(data => {
        res.status(200).json(data);
    }).catch(err => {
        res.status(500).json({
            message: "Fail!",
            error: err.message
        });
    });
};

exports.getPrzepis = (req, res) => {
    Przepis.findById(req.params.id).select('-__v')
    .then(przepis => {
        res.status(200).json(przepis);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Przepis not found with id " + req.params.id,
                error: err
            });
        }

        return res.status(500).send({
            message: "Error retrieving Przepis with id " + req.params.id,
            error: err
        });
    });
};

exports.przepisy = (req, res) => {
    Przepis.find().select('-__v').then(przepisInfos => {
        res.status(200).json(przepisInfos);
    }).catch(error => {
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    });
};

exports.deletePrzepis = (req, res) => {
    let przepisId = req.params.id;

    Przepis.findByIdAndRemove(przepisId).select('-__v -_id')
    .then(przepis => {
        if(!przepis){
            res.status(404).json({
                message: "Przepis does not exist with id = " + przepisId,
                error: "404",
            });
        }
        res.status(200).json({});
    }).catch(err => {
        return res.status(500).send({
            message: "Error -> Can NOT delete a przepis with id = " + przepisId,
            error: err.message
        });
    });
};

exports.updatePrzepis = (req, res) => {
    let produkty = req.body.wymaganeProdukty + '';
    let wymaganeProduktyArr = produkty.split(', ');
    Przepis.findByIdAndUpdate(
        req.body._id,
        {
            nazwa: req.body.nazwa,
            opis: req.body.opis,
            trudnosc: req.body.trudnosc,
            wymaganeProdukty: wymaganeProduktyArr
        },
        {new: true}
    ).select('-__v')
    .then(przepis => {
        if(!przepis){
            return res.status(404).send({
                message: "Error -> Can NOT update a przepis with id = " + req.params.id,
                error: "Not found!"
            });
        }

        res.status(200).json(przepis);
    }).catch(err => {
        return res.status(500).send({
            message: "Error -> Can not update a przepis with id = " + req.params.id,
            error: err.message
        });
    });
};