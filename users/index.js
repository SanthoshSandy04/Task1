const express = require('express')
const router = express.Router()
const search = require('./search');
const remove = require('./delete');
const add_books = require('./add');
const group = require('./group');


router.get("/search", search);
router.get("/delete", remove);
router.put("/add", add_books);
router.get("/group", group);



module.exports = router;