# trello-wrapper
A Trello API Wrapper designed to make interacting with the Trello API super simple. 

### Prerequisites

The wrapper is called with your trello Key and Token as seen below

```
class Trello {
  constructor(key, token) {
    this.uri = 'https://api.trello.com'
    this.key = key
    this.token = token
   }
 }
```

You can find instruction on how to obtain your auth key easily here -  https://developers.trello.com/reference/#api-key-tokens

And how to obtain a token here - https://developers.trello.com/page/authorization

Once you have both your key and token you are free to use the trello wrapper! You just need to instantiate the Trello Object in whatever file you'll be using it like this - 

```
const Trello = require('THE FILE ROUTE TO THE TRELLO WRAPPER')
const trello = new Trello('YOUR KEY HERE', "YOUR TOKEN HERE")
```

An example usage of the wrapper may be as follows 

```
const trelloCard = await trello.getCard('CARDID HERE')
// do something with trello card details
```

Simple as that. Any comments or suggestions please let me know. This is my first public facing project so really keen to hear from everyone. 

Enjoy :)



