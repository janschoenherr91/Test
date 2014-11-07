/**
 * Created by jschoenherr on 07.11.14.
 */

app.
    factory('firebase',['$firebase' , function($firebase) {
        var number =1;
        var ref = new Firebase("https://intense-torch-6714.firebaseio.com/");
        var sync=$firebase(ref);
        var service = {
        writetodb: function () {
            sync.$push({Username: 'User' + number}).then(function (newChildRef) {
                console.log("added record with id " + newChildRef.name());
                number++;
            });
            var users = sync.$asObject();
            return users;
        },
        readtodb: function () {
            var users = sync.$asObject();
            return users;
        },

            deletedb: function()
            {
                sync.$remove();

            }
    };
    return service;
}]);