'use strict';

angular.module('scholarshipSystemClientApp')
  .controller('RegisterController', ['$scope', '$location', 'ValidationService', 'HttpService', function ($scope, $location, validationService, httpService) {
    $('.selectpicker').selectpicker({
        width: 460,
        dropupAuto: false
    });

    $scope.student = {};

    $scope.register = function () {
        $scope.student.facultyName = $('.selectpicker').val();
        httpService.register($scope.student).then(function (response) {
            $location.path('/');
        }, function (response) {
            $('span.content').text('Регистрацията е неуспешна. Моля опитайте по-късно.');
            $('.warning-application').show();
        });
    };

    $scope.isValidName = function (nameType) {
        return validationService.isValidName($scope.student[nameType]);
    }

    $scope.isValidFacultyId = function () {
        return validationService.isValidFacultyId($scope.student.facultyId);
    };

    $scope.isValidEmail = function () {
        return validationService.isValidEmail($scope.student.email);
    };

    $scope.isValidPassword = function () {
        return validationService.isValidPassword($scope.student.password);
    };

  }]);
