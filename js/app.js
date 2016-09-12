
//setup module and controller
var app = angular.module('yugioh', []);
app.controller('yugiohCtrl', function(cardService, $scope) {
    //image/data url prefixes
    $scope.imgUrl  = "http://yugiohprices.com/api/card_image/";
    var dataUrl    = "https://crossorigin.me/http://yugiohprices.com/api/card_data/";
    
    //get the deck
    cardService.getDeck('deck.json').then(function(cards) {
        $scope.cards = cards;
        $scope.cards.forEach(function(card, index) {
            //get data for each card
            cardService.getCardInfo(card, dataUrl).then(function(cardData) {
                //check for loading finish and save card data
                $scope.loadedAll    = cardService.doneLoading();
                $scope.cards[index] = cardData;
            });
        });
    });
  
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