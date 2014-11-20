/**
 * Created by Valentina on 11/18/2014.
 */
var mongoose = require('mongoose');
var model = require('../model/db');
var wikiFacade = mongoose.model('wiki');


function getWiki(title, callback){
model.WikiModel.find({title : title})
    .exec(function (err, details){
        if(err){
            return callback(err);
        }
        callback(null, details);
    })
}
function findWiki(searchString, callback){
model.WikiModel.find({title : {$regex: new RegExp(searchString, "i")}})
    .exec(function (err, details){
        if(err){
            return callback(err);
        }
        var thisArray = new Array();
        details.forEach(function (detail){
            var thisOne = {title: detail.title, abstract: detail.abstract}
            thisArray.push(thisOne);
        });
        callback(null, thisArray);
    })
}
function getCategories(callback){
model.WikiModel.find({})
    .distinct('categories')
    .exec(function (err, details){
        if(err){
            return callback(err);
        }
        callback(null, details);
    })
}
function getWikisWithCategory(category, callback){
    console.log('category : '+ category);
    model.WikiModel.find({categories : category})
       //.select('title abstract')
        .exec(function (err, details){
            if(err){
                return callback(err);
            }
            var thisArray = new Array();
            details.forEach(function (detail){
                var thisOne = {title: detail.title, abstract: detail.abstract}
                thisArray.push(thisOne);
            });
            callback(null, thisArray);
        })
}

function getTitles(callback){
    model.WikiModel.find({})
        .distinct('title')
        .exec(function (err, details){
            if(err){
                return callback(err);
            }
            callback(null, details);
        })
}

module.exports = {
    getWiki : getWiki,
    findWiki: findWiki,
    getCategories : getCategories,
    getWikisWithCategory : getWikisWithCategory,
    getTitles: getTitles

}