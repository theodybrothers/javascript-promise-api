(function (promiseApi) {

    promiseApi.Promise = function () {
        
        var isResolved = false;
        var successCallbacks = [];
        var failureCallbacks = [];
        
        var keep = function (data) {
            
            resolve(successCallbacks, data);
        };
        
        var abandon = function (error) { // "break" is a keyword unfortunately
            
            resolve(failureCallbacks, error);
        };
        
        var resolve = function (queue, state) {
            
            if (!isResolved) {
                isResolved = true;
                
                queue.forEach(function (callback) {
                    
                    state = callback(state);
                });
                
                successCallbacks = [];
                failureCallbacks = [];
            }
        };
        
        var when = function (success, failure) {
            
            if (success !== undefined) {
                successCallbacks.push(success);
            }
            
            if (failure !== undefined) {
                failureCallbacks.push(failure);
            }
            
            return Object.freeze({ when : when });
        };

        return Object.freeze({
            keep: keep,
            abandon: abandon,
            promise: Object.freeze({ when: when })
        });
    };

}(module.exports));

