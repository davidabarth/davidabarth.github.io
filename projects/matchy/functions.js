/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(animals, name) {
    // Look through the `animals` Array, and return the animal's Object if an animal with that name exists.
    for (let i = 0; i < animals.length; i++) {
        if (name === animals[i]['name']) {
            return animals[i];
        }
    }
    // Return `null` if no animal with that name exists
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement) {
    // If an animal with that name exists within the `animals` Array, replace it's entire Object with the replacement Object.
    for (let i = 0; i < animals.length; i++) {
        if (name === animals[i]['name']) {
            animals[i] = replacement;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name) {
    // Take 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
    // If an animal with that name exists within the `animals` Array, remove it.
    for (let i = 0; i < animals.length; i++) {
        if (name === animals[i]['name']) {
            // delete animals[i];
            animals.splice(animals[i], 1);
        }
        return animals;
    }
    
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal) {
    // Check that the animal Object has a `name` property with a length > 0.
    // Check that the animal Object has a `species` property with a length > 0.

    if (animal['name'].length > 0 && animal['species'].length > 0) {
    // Check that the animal has a **unique** name, meaning no other animals have that name.
        for (let i = 0; i < animals.length; i++) {
        if (animal['name'] === animals[i]['name']) {
            return null;
            }
        }
    // Add this new Object to the `animals` Array, **only** if all the other conditions pass.
        animals.push(animal);
    }

}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
