(function () {
    'use strict';
    angular
            .module('Angular.Github.App')
            .controller('MainController', MainController);
            
    MainController.$inject = ['$scope', 'DeploymentConfigService', 'GitHubService'];

    function MainController($scope, DeploymentConfigService, GitHubService) {
        var vm = this;
        
        vm.Message = 'This Info';
       
        Init();
        
        function Init(){
            
            
            
        }        
        
        
    }

})();
