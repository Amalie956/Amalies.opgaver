//Exercise - level 1
//Write a module that exports a function that checks whether a name occurs in a list
module.exports = function (array, name) {
    const namesChecks = array.includes(name);
    return namesChecks;
}
