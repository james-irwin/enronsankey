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
  </head>\
\
  <body role="document">\
\
<div class="container theme-showcase" role="main">\
    <p></p>\
<div class="row marketing">\
<div class="col-lg-3">\
<div class="btn-group-vertical" role="group" aria-label="...">\
<div class="list-group">';
    
    labelCloseFromColumnOpenNameColumn='</div>\
</div>\
</div>\
\
<div class="col-lg-3">\
<div class="btn-group-vertical" role="group" aria-label="...">\
<div class="page-header"><h1>';
    
    labelCloseNameColumnOpenToColumn='</h1></div>\
</div>\
</div>\
\
    <div class="col-lg-3">\
<div class="btn-group-vertical" role="group" aria-label="...">\
<div class="list-group">';
    labelCloseToColumn='</div>\
</div>\
</div>\
</div>';
    
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
<div id=\'thechart\' style=\'width: 860px; height: 300px;\'></div>\
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
var targetCountingCallbacks=2; // Inbound + outbouns.
var centreName=process.argv[2];
var inbound=[];
var outbound=[];


function collection_complete_now_emit() {
    countingCallbacks++;
    if (targetCountingCallbacks!=countingCallbacks)
        return;

    // Emit the clickable table of labels and the sankey diagram
    // given the two datasets inbound; outbound and the centre being
    // centreName

  {// Label block
    console.log(labelBlockHeader); // This is up to the start of the LHS data
    for (var i=1; i<inbound.length;i++) {
        console.log('<a href="'+ inbound[i].from +
                    '.html" class="list-group-item"> ' + inbound[i].from+ 
                    ' <span class="badge">' + inbound[i].count + '</span></a>');
    }
    console.log(labelCloseFromColumnOpenNameColumn);
    console.log(centreName);
    console.log(labelCloseNameColumnOpenToColumn);
    for (var i=1; i<outbound.length;i++) {
        console.log('<a href="'+ outbound[i].to +
                    '.html" class="list-group-item"> ' + outbound[i].to+ 
                    ' <span class="badge">' + outbound[i].count + '</span></a>');
    }
    console.log(labelCloseToColumn);
      
  } // Label block
    
  { // Sankey block
      console.log(sankeyOpen);
      for (var i=1;i<inbound.length;i++){
          console.log('[\'from '+ inbound[i].from +'\', \'' +
                     centreName + '\',' +
                     inbound[i].count + '],');
      }
      for (var i=1;i<outbound.length;i++){
          console.log('[\'' + centreName + '\',' +
                      '\'to '+ outbound[i].to +'\','+
                     outbound[i].count + '],');
      }
      console.log(sankeyClose);
  } // Sankey block
    
    console.log(pageFooter);
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
