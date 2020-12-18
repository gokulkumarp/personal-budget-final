const express = require('express');
const router = express.Router();

const { create,read, monthBudget} = require('../controllers/budget');

router.post('/create', create);
router.get('/', read);
router.get('/monthBudget', monthBudget)

module.exports = router;