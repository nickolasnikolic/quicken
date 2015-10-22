var express = require('express');
var router = express.Router();

var AmazonAPI = require('amz-products');

router.get('/az/:searchQuery', function(req, res, next) {
  var amazon = new AmazonAPI({
    accessKeyId     : process.env.AMAZON_ACCESS,
    secretAccessKey : process.env.AMAZON_SECRET,
    associateId     : process.env.AMAZON_ASSOCIATE_TAG
  });

  amazon.getItemsInBrowseNode({
    Keywords: req.params.searchQuery,
    SearchIndex: 'Books',
    ResponseGroup: 'Large'
  }, function(err, response){
    res.status(200).send(response);
  });

});

router.get('/', function(req, res, next) {
  res.status(200).send('test');
});

module.exports = router;
