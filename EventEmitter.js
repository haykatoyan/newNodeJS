var events = require('events');
var util = require('util');

var Person = function(name) {
	this.name = name;
}

util.inherits(Person, events.EventEmitter);

var james = new Person("James");
var nune = new Person("Nune");
var saqo = new Person("Saqo");

var people = [james, nune, saqo];

people.forEach(function(person) {
	person.on('speak', function(msg) {
		console.log(`Person ${person.name} said: ${msg}`);
	});
});

james.emit('speak', 'Hey dudes!!!');
nune.emit('speak', 'I wanna curry!');