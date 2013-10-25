'use strict';

angular.module('scholarshipSystemClientApp')
    .service('ValidationService', function () {
        
        this.validateEmail = function (email) {
            return /.+@.+\..+/.test(email);           
        };

        this.validatePassword = function (password) {
            return password.length >= 8 && password.search(/[A-Z]/) >= 0;       
        };

        this.validateName = function (name) {
            return /[a-zA-Z]+/.test(name);
        };

        this.validateFaculityId = function (id) {
            return /[0-9]+/.test(id);
        };
    });
