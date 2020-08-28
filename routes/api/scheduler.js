const express = require('express');
const router = express.Router();
const {
    createEvent,
    readEvent,
    upcertEvent,
    deleteEvent
} = require('../../data/dal')

router.get('/', async function(req, res) {
    const data = await readEvent();
        res.send(data);
});

router.post('/', async function(req, res) {
    const body = req.body;
    const data = await createEvent(body);
        res.send(data);
});

router.put('/:id', async function(req, res )  {
    const body = req.body;
    const id = req.params.id;
    const data = await upcertEvent(id, body);
        res.send(data);
    ;
});

router.delete('/:id', async function(req, res) {
    const data = await deleteEvent(req.params.id); 
        res.send(data)
    });
module.exports = router;