'use strict';

angular.module('scholarshipSystemClientApp')
    .service('UserService', function () {

        var user = {};
    
        this.storeUserProfile = function (userProfile) {
            console.log('store with');
            console.dir(userProfile);
            console.dir(user);
            user = userProfile;
        }

        this.getActiveUser = function () {
            return user;
        };
    });
