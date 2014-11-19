global.TEST_DATABASE = "mongodb://localhost/TestDataBase_xx1243";

var should = require("should");
var app = require("../../server/app");
var http = require("http");
var testPort = 9999;
var testServer;
var mongoose = require("mongoose");
var User = mongoose.model("wiki");

describe('REST API for /wiki', function () {
    //Start the Server before the TESTS
    before(function (done) {
        testServer = app.listen(testPort, function () {
            console.log("Server is listening on: " + testPort);
            done();
        })
            .on('error',function(err){
                console.log(err);
            });
    })

    beforeEach(function(done){
        User.remove({}, function ()
        {
            console.log("blabla");
            var w1 = {"title" : "Bla Blah", "url" :"lars@a.dk","abstract": "xxx", "categories":  [ "newShit" ], "links" : ["sdkjfsuhg.com"], "headings": [{"heading" : "sufhuwi", "position": 4353}] };
            var w2 =  {"title" : "hallo", "url" :"lars@a.dk","abstract": "hxfgx", "categories": [ "newShit2", "copy"], "links" : ["sdkjfsuhg.com"], "headings": [{"heading" : "sufhuwi", "position": 4653}] };
            var w3 = {"title" : "hallfdgo", "url" :"lars@a.dk","abstract": "vala", "categories": [ "copy"], "links" : ["sdkjfsuhg.com"], "headings": [{"heading" : "sufhuwi", "position": 4653}] };
            User.create(w1,function(err){
                User.create(w2, function(err){
                    User.create(w3, function(err){
                        done();

                    })
                })
            });
            //  var array = [{"title" : "Bla Blah", "url" :"lars@a.dk","abstract": "xxx", "categories":  [ "newShit", "copy" ], "links" : ["sdkjfsuhg.com"], "headings": [{"heading" : "sufhuwi", "position": 4353}] },
            //    {"title" : "hallo", "url" :"lars@a.dk","abstract": "hxfgx", "categories": [ "newShit2", "copy"], "links" : ["sdkjfsuhg.com"], "headings": [{"heading" : "sufhuwi", "position": 4653}] }];
            //  User.create(array,function(err){
            //    done();
            //
            //
            //  });
        });
    })

    after(function(){  //Stop server after the test
        //Uncomment the line below to completely remove the database, leaving the mongoose instance as before the tests
        //mongoose.connection.db.dropDatabase();
        testServer.close();
    })

    it("Should get tilte", function (done) {
        http.get("http://localhost:"+testPort+"/api/wiki/getWiki/Bla Blah",function(res){
            res.setEncoding("utf8");//response data is now a string
            res.on("data",function(chunk){
                var n = JSON.parse(chunk);
                n.length.should.equal(1);
                n[0].title.should.equal("Bla Blah");
                n[0].abstract.should.equal("xxx");
                n[0].categories[0].should.equal("newShit");
                //n[1].title.should.equal("hallo");
                done();
            });
        })
    });


    it("Should get tilte2", function (done) {
        http.get("http://localhost:"+testPort+"/api/wiki/getWiki/hallo",function(res){
            res.setEncoding("utf8");//response data is now a string
            res.on("data",function(chunk){
                var n = JSON.parse(chunk);
                n.length.should.equal(1);
                // n[0].title.should.equal("Bla Bla");
                n[0].title.should.equal("hallo");
                done();
            });
        })
    });

    it("Should find wiki by string",function (done) {
        http.get("http://localhost:"+testPort+"/api/wiki/findWiki/h",function(res){
            res.setEncoding("utf8");//response data is now a string
            res.on("data",function(chunk){
                var n = JSON.parse(chunk);
                n.length.should.equal(3);
                // n[0].title.should.equal("Bla Bla");
                //n[2].title.should.equal("hallo");
                n[0].title.should.equal("Bla Blah");
                n[0].abstract.should.equal("xxx");
                done();
            });
        })
    });

    it("Should get category", function (done) {
        http.get("http://localhost:"+testPort+"/api/wiki/categories",function(res){
            res.setEncoding("utf8");//response data is now a string
            res.on("data",function(chunk){
                var n = JSON.parse(chunk);
                n.length.should.equal(3);
                n[0].should.equal("copy");
                n[2].should.equal("newShit2")
                done();
            });
        })
    });

    it("Should get abstract and title for category", function(done){
        http.get("http://localhost:"+testPort+"/api/wiki/copy",function(res){
            res.setEncoding('utf8');
            res.on("data", function(chunk){
                var n=JSON.parse(chunk);
                n.length.should.equal(2);
                n[0].title.should.equal("hallfdgo");
                n[1].abstract.should.equal("hxfgx");
                done();
            })
        })

    })

});
