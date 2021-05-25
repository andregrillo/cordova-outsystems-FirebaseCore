var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'cordova-outsystems-FirebaseCore', 'coolMethod', [arg0]);
};
