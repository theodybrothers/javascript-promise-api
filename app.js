(function () {

    var carService = require('./fakeCarService.js');

    carService.get(1)
    .when(function (data) {

        console.log(data.model);

        return data.model;
    }, function (error) {

        console.log("Error: " + error.message);

        return error;
    })
    .when(function (data) {

        console.log("Second CB: " + data);

        return data;
    })
    .when(function (data) {

        console.log("Third CB: " + data);
    }, function (error) {

        console.log("Second Error CB: " + error.message);
    });

}());