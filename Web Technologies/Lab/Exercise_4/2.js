var events = require('events');
var scoreKeeper = new events.EventEmitter();
a = [false, 0];
b = [false, 0];
var shoot_a_basket = function () {
        if (a[0] == true) {
            console.log('Teams a scored');
            a[0] = false 
            a[1] += 1
        }
        if (b[0] == true) {
            console.log('Teams b scored');
            b[0] = false 
            b[1] += 1
        }
        console.log('Score A:' + a[1]);
        console.log('Score B: '+b[1]);
    }
        scoreKeeper.on('make_basket',shoot_a_basket);
        a[0]=true;
        scoreKeeper.emit('make_basket');
        b[0]=true;
        scoreKeeper.emit('make_basket');
        b[0]=true;
        scoreKeeper.emit('make_basket');
        a[0]=true;
        scoreKeeper.emit('make_basket');
        a[0]=true;
        scoreKeeper.emit('make_basket');
        b[0]=true;
        scoreKeeper.emit('make_basket');