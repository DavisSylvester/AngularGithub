(function() {
    'use strict';

    angular
        .module('TSG.GitHub')
        .directive('githubList', GithubList);

    GithubList.$inject = ['GitHubService'];

    function GithubList(GitHubService) {
        return {
            restrict: "EA",            
            link: function(scope, element, attrs, controller, transcludeFn) {

               
            },
            templateUrl: 'views/shared/githubList.html',
            controller: function($scope) {

                $scope.SearchGitHub = searchGitHub;

                $scope.model = {
                    Search: ''
                };

                $scope.Model = {
                    Data: ''
                };
                                
                $scope.Show = {
                    RepoListItem: false,
                    RepoDetail: false,
                    RepoCommits: false

                };
                $scope.ShowRepoDetails = showRepoDetails;


                function showRepoDetails(owner, id) {
                   
                    GitHubService.GetRepo(owner, id).then(function(response) {
                       
                        $scope.SingleRepoDetail = response.data;
                        
                        
                        if ($scope.SingleRepoDetail !== undefined){
                            $scope.Show.RepoDetail = true;
                        }
                        else{
                            $scope.Show.RepoDetail = false;
                        }
                    });

                    GitHubService.GetCommits(owner, id).then(function(response) {
                        
                        $scope.Commits = response.data;
                        
                        if ($scope.Commits.length > 0){
                            $scope.Show.RepoCommits = true;
                        }
                        else{
                            $scope.Show.RepoCommits = false;
                        }
                    });
                }

                function searchGitHub(query) {
                   
                    GitHubService.Search(query).then(function(response) {
                        
                        $scope.Model.Data = response.data.items; 
                        
                        if ($scope.Model.Data.length > 0){
                            $scope.Show.RepoListItem = true;
                           
                        }
                        else{
                             $scope.Show.RepoListItem = false;
                        }
                        
                    });
                }
            }
        };
    }
})();

