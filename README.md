#Yu-Gi-Oh! deck viewer app

This is a basic deck viewer app for Yu-Gi-Oh, 
that was made as a simple angularjs demo.


##Using the app

you can download the files and run index.html locally via "file:///" protocol.
Alternatively you can setup a local/remote server.

The app tries to open the locally stored file deck.json (only card names are specified, format is compliant with Yugioh API),
then it tries to download information about each card from the Yugioh Price Api (http://docs.yugiohprices.apiary.io/)

The deck is opened as a list and sits at the left of the screen, 
while details for the selected card can be viewed on the right.

There is also a search filter based on either card name or type that sits on the top.




