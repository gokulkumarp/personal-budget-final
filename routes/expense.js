const express = require('express');
const router = express.Router();

const { create, read,readById,monthlyReport } = require('../controllers/expense');

router.post('/create', create);
router.get('/', read);
router.get('/:id', readById);
router.get('/monthlyReport',monthlyReport)
module.exports = router;