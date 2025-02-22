const express = require("express");
const Url = require("../models/Url");
const urlController = require("../controller/urlController.js")
const router = express.Router();

router.post('/shortenUrl',urlController.addUrl)

router.get('/:shortUrl',urlController.getUrl)

module.exports=router