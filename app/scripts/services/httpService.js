
'use strict';

angular.module('scholarshipSystemClientApp')
    .service('HttpService', ['$http', function ($http) {
        var SERVER_URL = 'http://192.168.0.103:3000',
            LOGIN_URL = SERVER_URL + '/login',
            REGISTER_URL = SERVER_URL + '/register',
            APPLICATION_URL = SERVER_URL + '/application',
            applicationData = {};

        this.register = function (student) {
            return $http({
                url: REGISTER_URL,
                method: 'POST',
                data: student,
            });
        };

        this.login = function (credentials) {
            return $http({
                url: LOGIN_URL,
                method: 'POST',
                data: credentials
            });
        };

        this.sendApplication = function () {
            return $http({
                url: APPLICATION_URL,
                method: 'POST',
                data: _.omit(applicationData,'facultyId', 'firstName', 'lastName', 'surname'),
            });
        };

        this.deleteApplication = function (application) {
            return $http({
                url: APPLICATION_URL + '/' + application.email,
                method: 'DELETE'
            });
        };

        this.getApplicationsForUser = function (user) {
            return $http({
                url: APPLICATION_URL + '?email=' + user.email,
                method: 'GET',
            });
        };

        this.addApplicationData = function (data) {
            $.extend(applicationData, data);
        };

    }]);
