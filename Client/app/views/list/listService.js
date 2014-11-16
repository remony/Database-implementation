angular.module('app.listService', ['ngRoute', 'ngCookies', 'ngMaterial'])

.factory('listService', function($http, $mdToast, $cookies, $location, $rootScope){
  return {
    getCameras: function(callback) {
      return $http({url:'http://localhost/Backend/camera', method:'GET',dataType:'json', headers: {
               'Content-Type': 'application/json; charset=utf-8',
               'Authorization': $cookies.monster_cookie
           }}).success(callback);
    },
    getCountries: function(callback) {
      return $http({url:'http://localhost/Backend/countries', method:'GET',dataType:'json', headers: {
               'Content-Type': 'application/json; charset=utf-8',
               'Authorization': $cookies.monster_cookie
           }}).success(callback);
    },
    getCustomers: function(callback) {
      return $http({url:'http://localhost/Backend/customer', method:'GET',dataType:'json', headers: {
               'Content-Type': 'application/json; charset=utf-8',
               'Authorization': $cookies.monster_cookie
           }}).success(callback);
    },
    getHobbies: function(callback) {
      return $http({url:'http://localhost/Backend/hobby', method:'GET',dataType:'json', headers: {
               'Content-Type': 'application/json; charset=utf-8',
               'Authorization': $cookies.monster_cookie
           }}).success(callback);
    },
    getLens: function(callback) {
      return $http({url:'http://localhost/Backend/lens', method:'GET',dataType:'json', headers: {
               'Content-Type': 'application/json; charset=utf-8',
               'Authorization': $cookies.monster_cookie
           }}).success(callback);
    },
    getProfessions: function(callback) {
      return $http({url:'http://localhost/Backend/profession', method:'GET',dataType:'json', headers: {
               'Content-Type': 'application/json; charset=utf-8',
               'Authorization': $cookies.monster_cookie
           }}).success(callback);
    },
    getSales: function(callback) {
      return $http({url:'http://localhost/Backend/sale', method:'GET',dataType:'json', headers: {
               'Content-Type': 'application/json; charset=utf-8',
               'Authorization': $cookies.monster_cookie
           }}).success(callback);
    },
    getStorages: function(callback) {
      return $http({url:'http://localhost/Backend/storage', method:'GET',dataType:'json', headers: {
               'Content-Type': 'application/json; charset=utf-8',
               'Authorization': $cookies.monster_cookie
           }}).success(callback);
    },

     getTypes: function(callback) {
       return $http({url:'http://localhost/Backend/type', method:'GET',dataType:'json', headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': $cookies.monster_cookie
            }}).success(callback);
     },

     /*

                Add new items to the database
     */



     addTypes: function(answer) {
       $.ajax({
        type:"POST",
        url: "http://localhost/Backend/type",
        beforeSend: function (xhr) {xhr.setRequestHeader ("Authorization", $cookies.monster_cookie)},
        data: JSON.stringify({name: answer}),
        dataType: "JSON"
        });

     }
   }
});