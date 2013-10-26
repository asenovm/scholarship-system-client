
'use strict';

angular.module('scholarshipSystemClientApp')
    .service('HttpService', ['$http', function ($http) {

        var SERVER_URL = '192.168.0.103:3000',
            LOGIN_URL = SERVER_URL + '/login',
            REGISTER_URL = SERVER_URL + '/register',
            APPLICATION_URL = SERVER_URL + '/application',
            applicationData = {};

        this.register = function(student) {
            console.log('register is called with ');
            console.dir(student);
            $http.post(REGISTER_URL, student)
                .success(function (response) {
                    console.log('success');
                }).error(function (response) {
                    console.log('error');
                });
        };

        this.sendApplication = function () {
            $http.post(APPLICATION_URL, applicationData)
                 .success(function (response) {
                    console.log('success');
                 })
                 .error(function (response) {
                    console.log('error');
                 });
        };

        this.addApplicationData = function (data) {
            $.extend(applicationData, data);
        }
    }]);
