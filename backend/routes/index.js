const
    express = require('express'),
    router = express.Router(),
    Network = require('../models').Network;

router.post('/user/networks', (req, res) => {
    Network.find({creator: req.user._id}).then(networks=>{
        res.json(networks);
    });
});

router.post('/save/network', req => {
    const newNetwork = new Network({
        data: req.body.network,
        creator: req.user._id
    });
    newNetwork.save();
});

module.exports = router;
