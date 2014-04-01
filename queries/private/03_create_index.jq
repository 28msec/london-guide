(: Rebuild search index :)

import module namespace index = "http://guide.com/index";

if (is-available-collection("index"))
then truncate("index");
else create("index");

index:build-index()