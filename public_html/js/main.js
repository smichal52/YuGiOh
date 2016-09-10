
//setup module and controller
var yugiApp = angular.module('yugioh', []);
yugiApp.controller('yugiohCtrl', function($scope, $http) {
    
    //card data and image urls
    $scope.dataUrl = "https://crossorigin.me/http://yugiohprices.com/api/card_data/";
    $scope.imgUrl  = "http://yugiohprices.com/api/card_image/";
    
    //get the deck (locally stored in json format)
    $http.get("deck.json").then(function(resp) {
        $scope.cards = [];
        $scope.cards = resp.data;
        $scope.cards.forEach(getCardInfo);
    });

    //get info for a single card (via yugioh API)
    function getCardInfo(card, index) {
        $http.get($scope.dataUrl+card.name).then(function(resp) {
            resp = resp.data;
            //set loaded flag if deck is finished
            if (index == $scope.cards.length -1) $scope.loaded = true;
            if (resp.status != "success") return;
            $scope.cards[index] = resp.data;
        });
    }
  
    //card select
    $scope.setSelected = function (card) {
        //unselect prev card (if there was one)
        if ($scope.selectedCard)
            $scope.selectedCard.selected = "";
        //set new card as selected
        card.selected       = "selected";
        $scope.selectedCard = card;
    };
});