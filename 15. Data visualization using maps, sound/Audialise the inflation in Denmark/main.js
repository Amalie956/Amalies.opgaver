//console.log(danishInflationNumbersWithYear);
console.log(danishInflationNumbers);

//Exercise 2 - Audialise the inflation in Denmark
document.querySelector('button').addEventListener('click', () => {
    let delay = 300;
    for(let i = 0; i < danishInflationNumbers.length; i++) {
        const dataPoint = danishInflationNumbers[i];
        const synth = new Tone.Synth().toDestination();
        const now = Tone.now();
        // play a tone based on data for the duration of a 12th note every second
        const timeBetweenNotesInSeconds = 0.4;
        synth.triggerAttackRelease((dataPoint + 15) * 20, "15n", now + (i * timeBetweenNotesInSeconds));
        //+ 20 er fordi et tal er -15, derfor skal man gøre det positivt, *20 er lydstyrken
    }

});