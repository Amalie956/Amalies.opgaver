// Movie - exercises

// Exercise 1 - level 1
// Fetch the movies and log them out to the console
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(movies => {
        console.log(movies);
    });

//Exercise 2 - level 1
//Render the following string to the html using the fetched movies array: 6527 movies fetched
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(movies => {
        //console.log(movies);
        const h2 = document.querySelector("h2")
        h2.innerHTML = movies.length + " movies fetched";
        document.body.appendChild(h2);
    });

//Exercise 3 - level 1
//Render the first movie in the movies array
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(movies => {
        //console.log(movies);
        const h3 = document.querySelector("h3")
        h3.innerHTML = JSON.stringify(movies[0]);
        document.body.appendChild(h3);
    });

//Exercise 3 - level 1
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(movies => {
        //console.log(movies);
        const h4 = document.querySelector("h4")
        h4.innerHTML = JSON.stringify(movies[0].title) + " is a movie from";
        document.body.appendChild(h4);
    });

//Exercise 4 - level 2
//Now render all the movies in a list using ul and li