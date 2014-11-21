/**
 * Created by Pranit Anand on 20-11-2014.
 */
global.TEST_DATABASE = "mongodb://localhost/TestDataBase_xx1243";

var should = require("should");
var app = require("../../server/app");
var http = require("http");
var testPort = 9999;
var testServer;
var mongoose = require("mongoose");
var User = mongoose.model("wiki");
var wiki = require("../../server/model/wikiFacade");
describe('Facade for system', function () {
    //Start the Server before the TESTS
    before(function (done) {
        testServer = app.listen(testPort, function () {
            console.log("Server is listening on: " + testPort);
            done();
        })
            .on('error', function (err) {
                console.log(err);
            });
    })

    beforeEach(function (done) {
        User.remove({}, function () {
            console.log("blabla");
            var w1 = {
                "title": "Bla Blah",
                "url": "lars@a.dk",
                "abstract": "xxx",
                "categories": ["newShit"],
                "links": ["sdkjfsuhg.com"],
                "headings": [{"heading": "sufhuwi", "position": 4353}]
            };
            var w2 = {
                "title": "hallo",
                "url": "lars@a.dk",
                "abstract": "hxfgx",
                "categories": ["newShit2", "copy"],
                "links": ["sdkjfsuhg.com"],
                "headings": [{"heading": "sufhuwi", "position": 4653}]
            };
            var w3 = {
                "title": "hallfdgo",
                "url": "lars@a.dk",
                "abstract": "vala",
                "categories": ["copy"],
                "links": ["sdkjfsuhg.com"],
                "headings": [{"heading": "sufhuwi", "position": 4653}]
            };
            User.create(w1, function (err) {
                User.create(w2, function (err) {
                    User.create(w3, function (err) {
                        done();

                    })
                })
            });
        });
    })

    after(function () {  //Stop server after the test
        //Uncomment the line below to completely remove the database, leaving the mongoose instance as before the tests
        //mongoose.connection.db.dropDatabase();
        testServer.close();
    })
    it('should test for title', function (done) {

        wiki.getWiki("hallo", function (res) {

            res.setEncoding("utf8");
            res.on("data", function (chunk) {
                var result = JSON.parse(chunk);
                result.length.should.equal(1);
                result[0].title.should.equal("hallo");
                result[0].abstract.should.equal("hxfgx");
                done();
            })
        });

        //wiki.getWiki(title , function (err, wikis) {
        //    if (err) {
        //        res.status(err.status || 400);
        //        res.end(JSON.stringify({error: err.toString()}));
        //        return;
        //    }
        //    res.header("Content-type","application/json");
        //    res.end(JSON.stringify(wikis));
        //    return;
        //});
        //
        //it("Should get abstract and title for category", function(done){
        //    http.get("http://localhost:"+testPort+"/api/wiki/copy",function(res){
        //        res.setEncoding('utf8');
        //        res.on("data", function(chunk){
        //            var n=JSON.parse(chunk);
        //            n.length.should.equal(2);
        //            n[0].title.should.equal("hallfdgo");
        //            n[1].abstract.should.equal("hxfgx");
        //            done();
        //        })
        //    })

     //   })


        it('should test for fetching title and abstract by title', function (done) {
            wiki.findWiki("hallo", function (res) {
                res.setEncoding("utf8");
                res.on("data", function (chunk) {
                    var result = JSON.parse(chunk);
                    result.length.should.equal(1);
                    result[0].title.should.equal("hallo");
                    result[0].abstract.should.equal("hxfgx");
                    done();
                })
            });

        });

        it('should test for fetching categories', function (done) {
            wiki.getCategories(function (res) {
                res.setEncoding("utf8");
                res.on("data", function (chunk) {
                    var result = JSON.parse(chunk);
                    result.length.should.equal(3);
                    result[0].should.equal("newShit");
                    result[1].should.equal("newShit2");
                    done();
                })
            });

        });

        it('should test for fetching title and abstract by categories', function (done) {
            wiki.getWikisWithCategory("copy", function (res) {
                res.setEncoding("utf8");
                res.on("data", function (chunk) {
                    var result = JSON.parse(chunk);
                    result.length.should.equal(1);
                    result[0].abstract.should.equal("vala");
                    done();
                })
            });

        });

        it('should test for fetching title and abstract by categories', function (done) {
            wiki.getWikisWithCategory("copy", function (res) {
                res.setEncoding("utf8");
                res.on("data", function (chunk) {
                    var result = JSON.parse(chunk);
                    result.length.should.equal(1);
                    result[0].abstract.should.equal("vala");
                    done();
                })
            });

        });

        it('should test for fetching titles', function (done) {
            wiki.getTitles(function (res) {
                res.setEncoding("utf8");
                res.on("data", function (chunk) {
                    var result = JSON.parse(chunk);
                    result.length.should.equal(3);
                    result[0].should.equal("Bla Blah");
                    done();
                })
            });

        });


    });
})