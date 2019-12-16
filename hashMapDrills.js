let hashMap = require('./hashMap');

function main(){
    let lotr = new hashMap();
    lotr.MAX_LOAD_RATIO = 0.5;
    lotr.SIZE_RATION = 3;
    lotr.set('Hobbit','Bilbo');
    lotr.set('Hobbit', 'Frodo');
    lotr.set('Wizard','Gandolf');
    lotr.set('Human','Aragon');
    lotr.set('Elf','Legolas');
    lotr.set('Maiar','The Necromancer');
    lotr.set('Maiar', 'Sauron');
    lotr.set('RingBearer','Gollum');
    lotr.set('LadyOfLight','Galadriel');
    lotr.set('HalfElven','Arwen');
    lotr.set('Ent','Treebeard');

    console.log(lotr);
    console.log(lotr.get('Hobbit'));
}

main();
// Question 01
// Some items are missing, likely due to collision
// Found the second inputted value rather than the first
