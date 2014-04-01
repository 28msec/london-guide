(: Initialize database with "London" and fetch content from wikivoyage, geonames and dbpedia :)

import module namespace catalog = "http://guide.com/catalog";
import module namespace wikivoyage = "http://guide.com/wikivoyage";
import module namespace geonames = "http://guide.com/geonames";
import module namespace dbpedia = "http://guide.com/dbpedia";

catalog:add("wikivoyage", "London", (), ());
flush();

for $iteration in 1 to 6
return
{
  wikivoyage:process("London");
  geonames:process();
  dbpedia:process();
}