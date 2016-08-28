angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('CalcularCtrl', function($ionicModal,$scope,$timeout,$location) {
  var vm=this;

  vm.catetos={};

  vm.perimetroTotal=0;
  vm.finalB=0;
  vm.inicio=true;
  vm.A=0;
  vm.ATotal=0;
  vm.s=0;
  vm.calcular=function(){
    var a,b,c;
      if(vm.inicio){
        a=parseFloat(vm.catetos.a);
        b=parseFloat(vm.catetos.b);
        c=parseFloat(vm.catetos.c);
        vm.inicio = false;
        vm.s=(a+b+c)/2;
        vm.finalB=a;
        vm.perimetroTotal=c;
      }else{
        a=parseFloat(vm.catetos.a);
        c=parseFloat(vm.catetos.c);
        b=vm.finalB;
        vm.perimetroTotal+=c;
        vm.s=(a+b+c)/2;
        
        vm.finalB=a;
        
      }
      vm.A=Math.sqrt(vm.s*((vm.s-a)*(vm.s-b)*(vm.s-c)));
      vm.ATotal+=vm.A;
      vm.catetos={};
    };

  vm.clear=function(){
    console.log('Limpiar');
    vm.catetos={};
    vm.finalB=0;
    vm.inicio=true;
    vm.perimetroTotal=0;
    vm.A=0;
    vm.s=0;
    vm.ATotal=0;
    $location.path('/browse');
  };  
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
