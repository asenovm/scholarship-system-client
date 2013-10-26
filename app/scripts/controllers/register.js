'use strict';

angular.module('scholarshipSystemClientApp')
  .controller('RegisterController', ['$scope', '$location', 'ValidationService', 'HttpService', function ($scope, $location, validationService, httpService) {
    $('.selectpicker').selectpicker({
        width: 460,
        dropupAuto: false
    });

    function isValidName(name) {
        return validationService.isValidName(name);
    }

    $scope.register = function () {
        $scope.student.facultyName = $('.selectpicker').val();
        httpService.register($scope.student);
    };

    $scope.isValidMajor = function () {
        return $scope.student && isValidName($scope.student.major);
    };

    $scope.isValidFirstName = function () {
        var student = $scope.student;
        return student && isValidName(student.firstName);
    };

    $scope.isValidSurname = function () {
        var student = $scope.student;
        return student && isValidName(student.surname);
    };

    $scope.isValidLastName = function () {
        var student = $scope.student;
        return student && isValidName(student.lastName);
    };

    $scope.isValidFacultyId = function () {
        var student = $scope.student;
        return student && validationService.isValidFacultyId(student.facultyId);
    };

    $scope.isValidEmail = function () {
        var student = $scope.student;
        return student && validationService.isValidEmail(student.email);
    };

    $scope.isValidPassword = function () {
        var student = $scope.student;
        return student && validationService.isValidPassword(student.password);
    };

  }]);
