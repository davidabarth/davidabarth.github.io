//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
// "objectValues() : Should take an object and return its values in an array"
    let myArray = [];
    for (let key in object) {
        myArray.push(object[key]);
    }
    return myArray;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
// "keysToString() : Should take an object and return all its keys in a string each separated with a space"
    let myString = '';
    for (let key in object) {
        myString += key + ' ';
    }
    let newString = myString.slice(0, myString.length - 1);
    return newString;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    // "valuesToString() : Should take an object and return all its string values in a string each separated with a space"
    let myString = '';
    for (let key in object) {
        // filter non string values out
        if (typeof object[key] === 'string') {
        myString += object[key] + ' ';
        }
    }
    let newString = myString.slice(0, myString.length - 1);
    return newString;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    // "arrayOrObject() : Should take one argument and return 'array' if its an array and 'object' if its an object"
    if (Array.isArray(collection)) {
        return 'array';
    } else {
        return 'object';
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    // "capitalizeWord() : Should take a string of one word, and return the word with its first letter capitalized"
    return string[0].toUpperCase() + string.substring(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // "capitalizeAllWords() : Should take a string of words and return a string with all the words capitalized "
    let newString = '';
    let stringArray = string.split(' ');
    // capitalize each word in the array
    for (let i = 0; i < stringArray.length; i++) {
        stringArray[i] = stringArray[i][0].toUpperCase() + stringArray[i].substring(1);
        newString += stringArray[i] + ' ';
    }
    return newString = newString.slice(0, newString.length - 1);
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    // "welcomeMessage() : Should take an object with a name property and return 'Welcome <Name>!'"
    let welcome = 'Welcome ';
    let myName = object.name;
    return welcome + myName[0].toUpperCase() + myName.substring(1) + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    // "profileInfo() : Should take an object with a name an a species and return '<Name> is a <Species>'"
    let myName = object.name;
    let mySpecies = object.species;
    return myName[0].toUpperCase() + myName.substring(1) + ' is a ' + mySpecies[0].toUpperCase() + mySpecies.substring(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    // maybeNoises() : Should take an object, if this object has a noises array return them as a string separated by a space,
    // if there are no noises return 'there are no noises'"
    if (object.hasOwnProperty('noises') === true && object.noises.length > 0) {
        return object.noises.join(' ');
    } else {
        return 'there are no noises';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    // hasWord() : Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.
    let arrayOfWords = string.split(' ');
    // check array for the word
    for (let i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i] === word) {
            return true;
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    // addFriend() : Should take a name and an object and add the name to the object's friends array then return the object
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // isFriend() : Should take a name and an object and return true if <name> is a friend of <object> and false otherwise
    if (object.friends) {
        for (let i = 0; i < object.friends.length; i++) {
            // check friends list for name
            if (object.friends[i] === name) {
                return true;
            }
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    // nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with
    // if name is not in friends list add to not friends list
    let notFriendsList = [];
    for (let i = 0; i < array.length; i++) {
        if (!isFriend(name, array[i]) && name !== array[i].name) {
            notFriendsList.push(array[i].name);
        }
    }
    return notFriendsList;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    // updateObject() : Should take an object, a key and a value.
    // Should update the property <key> on <object> with new <value>.
    // If <key> does not exist on <object> create it.
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    // removeProperties() : Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>
    // if object properties are in array, delete them
    for (let key in object) {
        for (let i = 0; i < array.length; i++) {
            if (key === array[i]) {
                delete object[key];
            } 
        }
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    // dedup() : Should take an array and return an array with all the duplicates removed"
    return array.filter(function(element, index, array) {
        return array.indexOf(element) === index;
    });
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}