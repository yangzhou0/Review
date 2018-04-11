function Cat (name,owner){
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function(){console.log(`${this.owner} loves ${this.name}`)}

const Names = ['cat1', 'cat2', 'car3'];
const Owners = ['John', 'Sean', 'Pete'];
function generateCats(n) {
  let counter = 0;
  let cats = {};
  while (counter < 5) {
    let randomNameInt = getRandomInt(0,Names.length)
    let randomOwnerInt = getRandomInt(0,Owners.length)
    cats[counter] = Cat.new(Names[randomNameInt],Owners[randomOwnerInt]);
    counter ++;
  }
  return cats;
}

private
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
