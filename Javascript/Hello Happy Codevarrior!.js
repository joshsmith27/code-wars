// https://www.codewars.com/kata/hello-happy-codevarrior/train/javascript

function Warrior(n) {
	var name = n;
	this.name = function(n) {
		if (n){
            name = n; 
        } 
		return name;
	};
}

Warrior.prototype.toString = function() {
	return "Hi! my name's " + this.name();
};
var albert = new Warrior('Albert');
var boris = new Warrior('Boris');
console.log(albert.name());
console.log(boris.name());
console.log(albert.toString());
