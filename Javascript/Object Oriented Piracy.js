// https://www.codewars.com/kata/object-oriented-piracy/train/javascript

function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
}
   
Ship.prototype.isWorthIt  = function () {
    return this.draft - this.crew * 1.5 > 20;
}


