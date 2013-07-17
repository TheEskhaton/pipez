(function(scope){
    'use strict';
    var noop = function(){};

    var Pipez = function(cb){
        var self = this;
        var befores = [];
        var afters = [];
        cb = cb || noop; 

        var getHandler = function(){
            return function(evt){
                befores.forEach(function(elem){ elem(evt);  });
                cb(evt);
                afters.forEach(function(elem){ elem(evt);  });
            };
            
        }
        
        self.before = function(fn){
            befores.push(fn);
            self.handler = getHandler();

            return self; 
        }
        self.after = function(fn){
            afters.push(fn);
            self.handler = getHandler();

            return self;
        }
        
        self.handler = getHandler();
        
        return self;
    };

    if(typeof define !== 'undefined'){
        define('Pipez', Pipez);
    }
    else{
        scope.Pipez = Pipez;
    }
})(window);
