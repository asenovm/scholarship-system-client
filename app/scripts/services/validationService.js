'use strict';

angular.module('scholarshipSystemClientApp')
    .service('ValidationService', function () {
        
        this.isValidEmail = function (email) {
            return /.+@.+\..+/.test(email);           
        };

        this.isValidPassword = function (password) {
            return password.length >= 8 && password.search(/[A-Z]/) >= 0;       
        };

        this.isValidName = function (name) {
            var match = name.match(/[a-zA-Z]+/);
            return match && match[0] === name;
        };

        this.isValidFacultyId = function (id) {
            return /[0-9]+/.test(id);
        };
    });
