(function () {
    'use strict';
    
    angular
            .module('TSG.GitHub')
            .factory('GitHubService', GitHubService);
    
    GitHubService.$inject = ['$http', 'DeploymentConfigService'];
    
    function GitHubService($http, DeploymentConfigService) {
        
        var ApiPATH = DeploymentConfigService.BaseURL.API_URL;
        
        var ApiConfig = {
            // Accept: 'application/vnd.github.v3+json'
        };
        
        var factory = {};
        
        factory.Search = function (q, sort, order) { 
            var url = '/search/repositories';
            var searchParams = getSearchParams(q, sort, order);
                       
            return $http.get(ApiPATH + url +  searchParams, ApiConfig);
        }
        
        factory.GetRepo = function(owner, repo){
            var url = '/repos/' + owner + '/' + repo;
            
            return $http.get(ApiPATH + url, ApiConfig);
        }
        
        factory.GetCommits = function(owner, repo){
            var url = '/repos/' + owner + '/' + repo + '/commits';
            
            return $http.get(ApiPATH + url, ApiConfig);
        }
        
        function getSearchParams(q, sort, order){
            var returnedQuery = '';
            
            var myKeywords = ( q !== undefined) ? 'q=' + q : null;
            var mySort = ( sort !== undefined) ? 'sort=' + sort : null;
            var myOrder = ( order !== undefined) ? 'order=' + order : null;
            
            if (myKeywords === null && mySort === null && myOrder === null){
                return '';
            }
            
            returnedQuery = ((myKeywords !== null) ? '?' +myKeywords : '');
               // (mySort !== null) ? '&' + mySort : '' + 
               // (myOrder !== null) ? '&' + myOrder : '';
            
           return returnedQuery;
            
        }
        
        return factory;
    }
})();