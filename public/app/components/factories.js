'use strict';

angular.module('myAppRename.factories', []).
    factory('WikiFactory',function ($http) {
      var url = "/api";
      var api = {};
      api.getWiki = function(title){
        return $http.get(url+'/wiki/getWiki/'+title);
      }
      api.findWiki = function(searchString){
        return $http.get(url+'/wiki/findWiki/'+searchString);
      }
      api.getCategories = function(){
        return $http.get(url+'/wiki/categories');
      }
      api.getWikiToCategories = function(category){
        return $http.get(url+"/wiki/"+category);
      }
      api.getTitles= function(){
        return $http.get(url+"/wikiTitle/titles");
      }
      return api;
    });