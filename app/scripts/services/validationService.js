'use strict';

angular.module('scholarshipSystemClientApp')
    .service('ValidationService', function () {
        
        this.isValidEmail = function (email) {
            return /.+@.+\..+/.test(email);
        };

        this.isValidPassword = function (password) {
            return password.length >= 8 && password.search(/[A-Z0-9]/) >= 0;
        };

        this.isValidName = function (name) {
            var match = name.match(/[АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя]+/);
            return match && match[0] === name;
        };

        this.isValidFacultyId = function (id) {
            var match = id.match(/[0-9]+/);
            return match && match[0] === id;
        };

        this.isValidIncome = function (income) {
            var match = income.match(/[0-9]+\.?[0-9]*/);
            return match && match[0] === income;
        };

        this.isValidSchoolYear = function (year) {
            var parsedYear = parseInt(year, 10);
            return [1,2,3,4].indexOf(parsedYear) >= 0;
        }

        this.isValidGrade = function (grade) {
            var parsedGrade = parseFloat(grade, 10);
            return parsedGrade >= 4.50 && parsedGrade <= 6;
        }
    });
