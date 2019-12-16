/* eslint-disable indent */
let hashMap = require('./hashMap');

function main(){
    let lotr = new hashMap();
    hashMap.MAX_LOAD_RATIO = 0.5;
    hashMap.SIZE_RATIO = 3;
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
    //5, 28, 19, 15, 20, 33, 12, 17, 10
    // console.log(5%9);
    // console.log(28%9);
    // console.log(19%9);
    // console.log(15%9);
    // console.log(20%9);
    // console.log(33%9);
    // console.log(12%9);
    // console.log(17%9);
    // console.log(10%9);
    //console.log(lotr);
    //console.log(lotr.get('Hobbit'));
}

main();
// Question 01
// Some items are missing, likely due to exact keys overwriting the values
// Found the second inputted value rather than the first

// Question 02
// Output is going to be 20,10


// Question 03.1
// This our final hash map after Open addressing corrections. ** means it was relocated due to collision.
// 22	88*		58	4	15**	28	17**
// 0	1	2	3	4	5	6	7
							
// 59**	31	10					
// 8	9	10	11	

//Question 3.2
// 10						
// 19					33	
// 28					15	
// Head	20	12		5	Head	
// 0	1	2	3	4	5	6	7
                        
                        
// 17							
// 8	9			




//Question 04:

function removeDuplicates(string) {
    let hash = new hashMap();
    let results = '';
    for(let i=0; i<string.length; i++) {
        hash.set(string[i],string[i]);
    }
    for(let items = 0; items < hash.length; items++) {
        results += hash._hashTable[items].value;
    }
    console.log(results);
}
// removeDuplicates('google');


//Question 05:

function palindrome(string) {
    let hash = new hashMap();
    for (let i = 0; i < string.length; i++) {
        hash.set(string[i],i);
    }
    let count = 0;
    for(let i = 0; i < string.length; i++) {
        if(hash.get(string[i]) !== i) {
            count--;
        } else {
            count++;
        }
    } if (count > 1) {
        return false;
    } else {
        return true;
    }
}
console.log(palindrome('acecarr'));
console.log(palindrome('north'));



//Question 06:

// function anagram(array) {
//     let hash = new hashMap();
//     for(let i=0; i < array.length; i++) {
//         let permutations = array[i];
//         console.log(permutations);
//     }
// }

// anagram(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']);
