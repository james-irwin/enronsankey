var request = require('request');

var MailParser = require("mailparser").MailParser,
    mailparser = new MailParser(),
    fs = require("fs");

mailparser.on("end", function(mail_object){
    var doc={};
    if (typeof mail_object.to != 'undefined')
    for (var i=0; i<mail_object.to.length; i++)
    {
        doc.from=mail_object.from[0].address;
        doc.to=mail_object.to[i].address;
        request.post(
        'http://localhost:9200/enron/mail/',
            { json: doc },
            function (error, response, body)
            {
                    //if (!error && response.statusCode == 200)
                    //{
                    //    console.log(body)
                    //}
		    ;
            }
        );

    }
});

fs.createReadStream(process.argv[2]).pipe(mailparser);