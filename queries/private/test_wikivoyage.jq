(: Test query for wikivoyage API :)

import module namespace http="http://zorba.io/modules/http-client";
import module namespace html = "http://www.zorba-xquery.com/modules/converters/html";
import module namespace res = "http://www.28msec.com/modules/http-response";
import module namespace wikivoyage = "http://guide.com/wikivoyage";

wikivoyage:get-page("Covent Garden")