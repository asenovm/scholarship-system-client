
'use strict';

angular.module('scholarshipSystemClientApp')
    .service('HttpService', ['$http', function ($http) {

        var SERVER_URL = 'http://192.168.0.103:3000',
            LOGIN_URL = SERVER_URL + '/login',
            REGISTER_URL = SERVER_URL + '/register',
            APPLICATION_URL = SERVER_URL + '/application',
            applicationData = {};

        this.register = function (student) {
            console.log('register is called with ');
            console.dir(student);
            $http.post(REGISTER_URL, student)
                .success(function (response) {
                    console.log('success');
                    console.dir(response);
                }).error(function (response) {
                    console.log('error');
                    console.dir(response);
                });
        };

        this.login = function (credentials) {
            $http.post(LOGIN_URL, JSON.stringify(credentials)).then(function (response) {
                console.log('success');
                console.dir(response);
            }, function(response) {
                console.log('error');
                console.dir(response);
            });
        };

        this.sendApplication = function () {
            applicationData = _.omit(applicationData,'facultyId', 'firstName', 'lastName', 'surname');
            $http.post(APPLICATION_URL, JSON.stringify(applicationData)).then(function (response) {
                console.log('success');
            }, function (response) {
                console.log('error');
            });
        };

        this.addApplicationData = function (data) {
            $.extend(applicationData, data);
        }
    }]);
