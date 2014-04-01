(: Reset database. Creates collections or empties them :)

if (is-available-collection("content"))
then truncate("content");
else create("content");

if (is-available-collection("index"))
then truncate("index");
else create("index");

