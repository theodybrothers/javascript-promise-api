(function (carService) {
    
    var promiseApi = require('./promise.js');
    
    carService.get = function (id) {
        
        var promise = new promiseApi.Promise();        

        setTimeout(function () {
            
            var data =  {
                id: id,
                model: 'Ford Mustang ' + id,
                year: 2014
            };

            promise.keep(data);
            //promise.abandon({ message: "Something went wrong" });
        }, 1000);
        
        return promise.promise;
    };

}(module.exports));