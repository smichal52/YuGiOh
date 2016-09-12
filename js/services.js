



//service that handles deck and card requests
app.factory('cardService', function($http) {
    var deckSize  = 0;
    var cardIndex = 0;
    
    return {
        //gets deck from json file
        getDeck: function(file) {
            var promise  = $http.get(file).then(function (response) {
                deckSize  = response.data.length; 
                cardIndex = 0;
                return response.data;
            });
            return promise;
        },
        
        //get information about a card from yugioh api
        getCardInfo: function(card, dataUrl) {
            var promise = $http.get(dataUrl+card.name).then(function (response) {
                cardIndex++;
                var d = response.data;
                return (d.status == "success")?d.data:card;
            });
            return promise;
        },
        
        //returns weither getCardInfo() has been called for all cards
        doneLoading: function() {
            return (cardIndex == deckSize);
        }
        
    };
});


