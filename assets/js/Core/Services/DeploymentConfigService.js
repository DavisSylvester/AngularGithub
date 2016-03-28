(function () {
    'use strict';

    angular
            .module('Angular.Github.App')
            .factory('DeploymentConfigService', DeploymentService);

    DeploymentService.$inject = [ ];

    function DeploymentService() {
        
            var env = 'dev';
                       
            var localConfig = {
                        API_URL:     'https://api.github.com'
                       
            };
            
            var devConfig = {
                        API_URL:     'https://api.github.com',
                        
            };
            
            var prodConfig = {
                        API_URL:     'https://api.github.com',
                        
            };
        
            var config = new Map();
            
            var envProd = 'Prod'.toLowerCase();
            var envDev = 'Dev'.toLowerCase();
            var envLocal = 'Local'.toLowerCase();
        
            var environment = [envProd, envDev, envLocal];
            
            config.set(envProd, prodConfig);
            config.set(envDev,  devConfig);
            config.set(envLocal, localConfig);
            
                
        var configuration = function(name) {            
            var answer = environment.indexOf(name);
            
         if (environment.indexOf(name.toLowerCase()) === -1){
             var sample = config.get(environment["local"]);
             return config.get(environment["local"]);
         }
         
            return config.get(name);
            
        };
                

        var BASEURL = configuration(env);

        var factory = {};

        factory.BaseURL = configuration(env);
        

        return factory;
    }
})();


