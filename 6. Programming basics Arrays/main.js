//Video 1: JavaScript Arrays

/*
//let selectedColors = []; //Empty array literal
const selectedColors = [`red`, `blue`]; //to elements red og blue i en array
//console.log(selectedColors)       // Her finder man index [0]: red og [1]: blue
selectedColors[2] = `1`;
//console.log(selectedColors[1]);       // element i array med [index]
console.log(selectedColors.length);     //Fortæller hvor mange elements der er i en array = 3
*/

//Video 2: How to use JS Array Methods
let supers = [`Superman`, `Batman`, `Flash`, `Aquaman`];

//console.log(supers[supers.length - 1]); //Betyder at Aquaman kun dukker op

//length
//supers.length = 2   //De to første dukker op Superman og Batman
//console.log(supers);

//supers.length = 3   //Den tredje ses som empty, da den ikke eksistere grundet overstående
//console.log(supers);

//indexOf
//console.log(supers);
//console.log(supers.indexOf("Flash")); // = 2, da Flash har index[2]. Hvis man skriver et ugyldigt element bliver resultat = -1

//includes
//console.log(supers.includes("Batman")); // = true
//console.log(supers.includes("Hest")); // = false, da værdien "Hest" ikke eksistere

//pop and shift
//console.log(supers.pop()); //pop fjerner den sidste item (Aquaman)
//console.log(supers);

//console.log(supers.shift()); //pop fjerner den første item (Superman)
//console.log(supers);

//push and unshift
//supers.push("Spider-Man");     //push tilføjer et nyt item sidst i array
//console.log(supers);

//supers.unshift("Thor")     //unshift tilføjer et nyt item først i array
//console.log(supers);

//Both push and unshift in one:
//supers.push("Spider-Man");
//supers.unshift("Thor")

//concat
// Ny let med ny navne blandet med de gamle navne. Dog ændre det ikke navnene i den orginale array
//let newSupers = supers.concat(["Wolerine", "Cyslops", "Professor X"])
//console.log(supers);
//console.log(newSupers);

//Join
//console.log(supers.join(", "));

//nåede til 10 min