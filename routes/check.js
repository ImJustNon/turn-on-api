const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const urlEncoded = bodyParser.urlencoded({
    extended: true,
    limit: "50mb",
});
const db = require("../database/connect.js");

router.get("/api/check", urlEncoded, async(req, res) => {
    
    const rows = db.prepare('SELECT * FROM turn_on_api').all();
    // status 1 = ON
    // status 0 = OFF
    if(rows[0].status === 1){
        return res.json({
            status: 1,
        });
    }
    if(rows[0].status === 0){
        return res.json({
            status: 0,
        });
    }
});

module.exports = router;