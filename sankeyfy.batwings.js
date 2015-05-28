{
    labelBlockHeader='<!DOCTYPE html>\
<html lang="en">\
  <head>\
    <meta charset="utf-8">\
    <meta http-equiv="X-UA-Compatible" content="IE=edge">\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->\
    <meta name="description" content="">\
    <meta name="author" content="">\
    <link rel="icon" href="../../favicon.ico">\
\
    <title>james-irwin@github/enron</title>\
\
    <!-- Bootstrap core CSS -->\
    <link href="../dist/css/bootstrap.min.css" rel="stylesheet">\
    <!-- Bootstrap theme -->\
    <link href="../dist/css/bootstrap-theme.min.css" rel="stylesheet">\
\
    <!-- Custom styles for this template -->\
    <link href="theme.css" rel="stylesheet">\
<script>\
  (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\
  })(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');\
\
  ga(\'create\', \'UA-16765789-5\', \'auto\');\
  ga(\'send\', \'pageview\');\
\
</script>\
<style>\
@import url(\'http://fonts.googleapis.com/css?family=Noto+Sans:400,700\');\
\
*{\
  margin: 0;\
  padding: 0;\
}\
h1{\
  width: 500px;\
  height: 100px;\
  position: absolute;\
  top: 35%;\
  left: 50%;\
  margin: -100px 0 0 -275px;\
  font-size: 3.2em;\
  font-weight: 700;\
  text-align: center;\
  line-height: 100px;\
  color: #aaa;\
}\
\
h2{\
  width: 500px;\
  height: 100px;\
  position: absolute;\
  top: 50%;\
  left: 50%;\
  margin: 0 0 0 -225px;\
  font-size: 1.6em;\
  font-weight: 400;\
  text-align: center;\
  line-height: 100%;\
  color: #bbb;\
}\
\
body{\
  background: #f0f0f0;\
  font-family: \'Noto Sans\', sans-serif;\
}\
\
.vspace{\
margin-bottom: 350px;\
}\
.corner-ribbon{\
  width: 200px;\
  background: #e43;\
  position: absolute;\
  top: 25px;\
  left: -5px;\
  text-align: right;\
  line-height: 30px;\
  letter-spacing: 1px;\
  color: #f0f0f0;\
}\
\
.corner-ribbon.sticky{\
  position: absolute;\
}\
\
.corner-ribbon.shadow{\
  box-shadow: 0 0 3px rgba(0,0,0,.3);\
}\
\
.corner-ribbon.top-left-1{\
  top: 15px;\
}\
.corner-ribbon.top-left-2{\
  top: 50px;\
}\
.corner-ribbon.top-left-3{\
  top: 85px;\
}\
.corner-ribbon.top-left-4{\
  top: 120px;\
}\
.corner-ribbon.top-left-5{\
  top: 155px;\
}\
.corner-ribbon.top-left-6{\
  top: 190px;\
}\
.corner-ribbon.top-left-7{\
  top: 225px;\
}\
.corner-ribbon.top-left-8{\
  top: 260px;\
}\
.corner-ribbon.top-left-9{\
  top: 295px;\
}\
.corner-ribbon.top-left-10{\
  top: 330px;\
}\
.corner-ribbon.top-right-1{\
  top: 15px;\
  right: -25px;\
  left: auto;\
  text-align: left;\
}\
.corner-ribbon.top-right-2{\
  top: 50px;\
  right: -25px;\
  left: auto;\
  text-align: left;\
}\
.corner-ribbon.top-right-3{\
  top: 85px;\
  right: -25px;\
  left: auto;\
  text-align: left;\
}\
.corner-ribbon.top-right-4{\
  top: 120px;\
  right: -25px;\
  left: auto;\
  text-align: left;\
}\
.corner-ribbon.top-right-5{\
  top: 155px;\
  right: -25px;\
  left: auto;\
  text-align: left;\
}\
.corner-ribbon.top-right-6{\
  top: 190px;\
  right: -25px;\
  left: auto;\
  text-align: left;\
}\
.corner-ribbon.top-right-7{\
  top: 225px;\
  right: -25px;\
  left: auto;\
  text-align: left;\
}\
.corner-ribbon.top-right-8{\
  top: 260px;\
  right: -25px;\
  left: auto;\
  text-align: left;\
}\
.corner-ribbon.top-right-9{\
  top: 295px;\
  right: -25px;\
  left: auto;\
  text-align: left;\
}\
.corner-ribbon.top-right-10{\
  top: 330px;\
  right: -25px;\
  left: auto;\
  text-align: left;\
}\
\
.corner-ribbon.bottom-left{\
  top: auto;\
  bottom: 25px;\
  left: -50px;\
  transform: rotate(-45deg);\
  -webkit-transform: rotate(-45deg);\
}\
\
.corner-ribbon.bottom-right{\
  top: auto;\
  right: -50px;\
  bottom: 25px;\
  left: auto;\
  transform: rotate(-45deg);\
  -webkit-transform: rotate(-45deg);\
}\
\
.corner-ribbon.white{background: #f0f0f0; color: #555;}\
.corner-ribbon.black{background: #333;}\
.corner-ribbon.grey{background: #999;}\
.corner-ribbon.blue{background: #39d;}\
.corner-ribbon.green{background: #2c7;}\
.corner-ribbon.turquoise{background: #1b9;}\
.corner-ribbon.purple{background: #95b;}\
.corner-ribbon.red{background: #e43;}\
.corner-ribbon.orange{background: #e82;}\
.corner-ribbon.yellow{background: #ec0;}\
</style>\
\
  </head>\
\
  <body role="document">\
\
<div class="container theme-showcase" role="main">\
    <p></p><div>';
    labelCloseFromColumnOpenNameColumn='<h1>';
    
    labelCloseNameColumnOpenToColumn='</h1>';
    labelCloseToColumn='</div><div class="vspace"> </div>';
    
    sankeyOpen='<div>\
      <script type=\'text/javascript\' src=\'https://www.google.com/jsapi\'></script>\
<script type=\'text/javascript\'>\
\
    google.load(\'visualization\', \'1.1\', {packages:[\'sankey\']});\
    google.setOnLoadCallback(drawChart);\
    function drawChart() {\
        var data = new google.visualization.DataTable();\
            data.addColumn(\'string\', \'From\');\
            data.addColumn(\'string\', \'To\');\
            data.addColumn(\'number\', \'Mails\');\
            data.addRows([';
    
    
    sankeyClose='            ]);\
       var options = {width: 860};\
       var chart = new\ google.visualization.Sankey(document.getElementById(\'thechart\'));\
chart.draw(data, options);\
}\
</script>\
</div>\
\
<div id=\'thechart\' style=\'width: 860px; height: 700px;\'></div>\
</div>\
';

    pageFooter='<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">\
</script>\
    <script src="../dist/js/bootstrap.min.js"></script>\
</script>\
</body>\
</html>';
} // HTML strings


var countingCallbacks=0;
var targetCountingCallbacks=2; // Inbound + outbound.
var centreName=process.argv[2];
var inbound=[];
var outbound=[];
var batwingFingers=[]; // Left & right batwing fingers
var batwingCallbacks=0;
var targetBatwingCallbacks=0; // Set after finding the length of inbound + outbound.

function batfinger_collection_complete_now_emit(){
    batwingCallbacks++;
    //console.log(batwingCallbacks + '/' + targetBatwingCallbacks);
    if (targetBatwingCallbacks!=batwingCallbacks)
        return;
    // Drop out all of the batwing things ...
    //console.log(JSON.stringify(batwingFingers));
    for (var i=0;i<batwingFingers.length;i++)
    {
        console.log('[\''+ batwingFingers[i].from.replace(/\'/g,"") +
                    '\', \'' + batwingFingers[i].to.replace(/\'/g,"") +
                    '\', '+ batwingFingers[i].count +
                    '],'
                   );
    }  
        
    console.log(sankeyClose);
    console.log(pageFooter);
}

function collectAggregates(direction, who, stash){
    var postData = JSON.stringify({
        "size": 0,
        "aggs": {
                "from": {
                    "terms": {"field": direction}
                }
            }
        });
    var fullpath;
    if (direction=='from')
        fullpath='/enron/_search?q=to:'+who;
    else
        fullpath='/enron/_search?q=from:'+who;
    
    var options = {
        hostname: 'localhost',
        port: 9200,
        path: fullpath,
        method: 'POST',
        headers: {
                'Content-Type': 'application/json',
                'Content-Length': postData.length
                }
};
    var http=require('http');
    var req = http.request(options, function(res) {
        var data='';
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            data=data+chunk; });

        res.on('end', function () {

            var buckets=JSON.parse(data).aggregations.from.buckets;
            for (var bucket=1;bucket<buckets.length;bucket++) {
                var strlen=buckets[bucket].key.length;
                var tail=buckets[bucket].key.substring(strlen-4, strlen);
                if (tail!='.com')
                {
                    if (direction=='to')
                        stash.push({'from' :'from:from '+buckets[bucket].key,
                                    'to'   : 'from '+who,
                                    'count':buckets[bucket].doc_count});
                    else
                        stash.push({'from' : 'to '+who,
                                    'to'   : 'to:to '+buckets[bucket].key,
                                    'count':buckets[bucket].doc_count});
                }
            }
            batfinger_collection_complete_now_emit();
        });
    });

    req.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });

    // write (post) data to request body
    req.write(postData);
    req.end();    
}

function collection_complete_now_emit() {
    countingCallbacks++;
    if (targetCountingCallbacks!=countingCallbacks)
        return;

    // Emit the clickable table of labels and the sankey diagram
    // given the two datasets inbound; outbound and the centre being
    // centreName

  {// Label block
    console.log(labelBlockHeader); // This is up to the start of the LHS data
    for (var i=0; i<inbound.length;i++) {
        console.log('<a href="'+ inbound[i].from.replace(/\'/g,"") +
                    '.batwings.html" class="corner-ribbon top-left-'+
                    (i+1) +
                    ' sticky green shadow"> ' + inbound[i].from.replace(/\'/g,"")+
                    '</span></a>');
    }
    console.log(labelCloseFromColumnOpenNameColumn);
    console.log('<a href="'+centreName+'.html">'+centreName+'</a>');
    console.log(labelCloseNameColumnOpenToColumn);
    for (var i=0; i<outbound.length;i++) {
        console.log('<a href="'+ outbound[i].to.replace(/\'/g,"") +
                    '.batwings.html" class="corner-ribbon top-right-'+
                    (i+1) +
                    ' sticky orange shadow"> ' +
                    outbound[i].to.replace(/\'/g,"")+
                    '</span></a>');
    }
    console.log(labelCloseToColumn);
      
  } // Label block
    
  { // Sankey block
      console.log(sankeyOpen);
      targetBatwingCallbacks=inbound.length+outbound.length;
      //console.log('in:'+inbound.length + '/out:'+outbound.length);
      for (var i=0;i<inbound.length;i++){
          console.log('[\'from '+ inbound[i].from.replace(/\'/g,"") +'\', \'' +
                     centreName.replace(/\'/g,"") + '\',' +
                     inbound[i].count + '],');
          collectAggregates('to', inbound[i].from.replace(/\'/g,""), batwingFingers);
      }
      
      for (var i=0;i<outbound.length;i++){
          console.log('[\'' + centreName.replace(/\'/g,"") + '\',' +
                      '\'to '+ outbound[i].to.replace(/\'/g,"") +'\','+
                     outbound[i].count + '],');
          collectAggregates('from', outbound[i].to.replace(/\'/g,""), batwingFingers);
      }
  } // Sankey block
}

function collectInbound() {
    var postData = JSON.stringify({
        "size": 0,
        "aggs": {
                "from": {
                    "terms": {"field": "from"}
                }
            }
        });

    var fullpath='/enron/_search?q=to:'+centreName;
    var options = {
        hostname: 'localhost',
        port: 9200,
        path: fullpath,
        method: 'POST',
        headers: {
                'Content-Type': 'application/json',
                'Content-Length': postData.length
                }
};
    var http=require('http');
    var req = http.request(options, function(res) {
        var data='';
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            data=data+chunk; });

        res.on('end', function () {

            var buckets=JSON.parse(data).aggregations.from.buckets;
            for (var bucket=1;bucket<buckets.length;bucket++) {
                var strlen=buckets[bucket].key.length;
                var tail=buckets[bucket].key.substring(strlen-4, strlen);
                if (tail!='.com')
                    inbound.push({'from' :buckets[bucket].key,
                               'count':buckets[bucket].doc_count});
            }
            collection_complete_now_emit();
        });
    });

    req.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });

    // write (post) data to request body
    req.write(postData);
    req.end();
}

function collectOutbound() {
    var postData = JSON.stringify({
        "size": 0,
        "aggs": {
                "from": {
                    "terms": {"field": "to"}
                }
            }
        });

    var fullpath='/enron/_search?q=from:'+centreName;
    var options = {
        hostname: 'localhost',
        port: 9200,
        path: fullpath,
        method: 'POST',
        headers: {
                'Content-Type': 'application/json',
                'Content-Length': postData.length
                }
};
    var http=require('http');
    var req = http.request(options, function(res) {
        var data='';
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            data=data+chunk; });

        res.on('end', function () {

            var buckets=JSON.parse(data).aggregations.from.buckets;
            for (var bucket=1;bucket<buckets.length;bucket++) {
                var strlen=buckets[bucket].key.length;
                var tail=buckets[bucket].key.substring(strlen-4, strlen);
                if (tail!='.com')
                    outbound.push({'to' :buckets[bucket].key,
                               'count':buckets[bucket].doc_count});
            }
            collection_complete_now_emit();
        });
    });

    req.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });

    // write (post) data to request body
    req.write(postData);
    req.end();
}


collectInbound();
collectOutbound();
