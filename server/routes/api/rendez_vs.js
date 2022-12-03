const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const router = express.Router();
const schemaRendey_vs = mongoose.Schema({

    date_rdv :  String,
    status :    String,
    patient :   String,
    act :       String,
})


const Rendey_v = mongoose.model('Rendey_v', schemaRendey_vs);

app.use(express.json());
// getdata
router.get('/', async (req, res) => {

    const data = await Rendey_v.find();
    res.send(data)
})
// insert data
router.post('/', async (req, res) => {
    const Rendey_v = new Rendey_v({
        date_rdv :   req.body.date_rdv,
        status :req.body.status,
        patient :   req.body.patient,
        act :   req.body.act
    })
    data = await Rendey_v.save();
    res.send(data)
})
// update data
router.put('/:id', async (req, res) => {
    const id = req.params.id;

    const rendey_v = await Rendey_v.findById(id);
    rendey_v.date_rdv    = req.body.date_rdv;
    rendey_v.status  = req.body.status;
    rendey_v.patient     = req.body.patient;
    rendey_v.act     = req.body.act;

    const data = await rendey_v.save();
    res.send(data);
})
// update data
router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    const Rendey_v = await Rendey_v.findById(id);
    
    const data = await Rendey_v.delete();
    res.send(data);
})


module.exports = router;