#Yu-Gi-Oh! deck viewer app

This is a basic deck viewer app for Yu-Gi-Oh, 
that was made as a simple angular-js demo.


##Live version
https://smichal52.github.io/yugioh/


##Using the app
Use the live version, or get the files,
setup a local/remote server and open "index.html".

The app tries to open the locally stored file deck.json (only card names are specified, format is compliant with Yugioh API),
then it tries to download information about each card from the Yugioh Price Api (http://docs.yugiohprices.apiary.io/)

The deck is opened as a list and sits at the left of the screen, 
while details for the selected card can be viewed on the right.

There is also a search filter based on either card name or type that sits on the top.



###On the deck viewer, colors are based on card type

monster: red(ish)
spell: yellow(ish)
trap: gray
*failed to load: dark gray



##Development

I started by dedicating some time to get familiar with angular-js,
by reading some guides and viewing some simple examples.

After I was a bit comfortable with it, I designed the basic layout for the app,
and after some looking around, started working on the 1st component (the deck viewer).

After setting up its basic functionality (an ng-repeat basically),
I looked into implementing it's features like card selecting and searching (filter).
As I finished it, I continued in a similar fashion to the next part (card details).

I also took the time along the way to look up the proper ways to handle
events, model updates, ajax requests, etc... in an angular-js context.



After finishing most of the functionality I wanted to implement,
I moved on to the css to give the app a look I felt happy with.

I actually used scss (like I usually do), and made a lot of code reuse
from other projects of mine since it suited me well.


On this branch, the services were seperated from the controller.
I don't think it was really necessary, just wanted to show a slightly different (probably more proper) approach.

Finally I wrapped things up and wrote this readme file.

