var express = require('express');
var router = express.Router();
var axios = require('axios')
const {json} = require("express");
const storehash = "q6toa31zw";
const authToken = "6iou227eew6ip7sejtzm3qw91fwtleh"

/* GET users listing. */
router.get('/', async function(req, response, next) {
  const customer = req.query.customer;
  const config = {
    url: `https://api.bigcommerce.com/stores/${storehash}/v2/orders?customer_id=${4}`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Auth-Token	': authToken
    },
  }
  await axios(config).then(res => {
    response.send(res.data);
  });

});

module.exports = router;
