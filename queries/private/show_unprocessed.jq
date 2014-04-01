(: Show number of unprocessed entries for all services during bulkload :)

import module namespace catalog = "http://guide.com/catalog";

{ 
  dbpedia : count(catalog:get-unprocessed("dbpedia")._id),
  geonames : count(catalog:get-unprocessed("geonames")._id),
  wikivoyage : count(catalog:get-unprocessed("wikivoyage")._id)
}