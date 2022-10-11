/*
const ctx = document.querySelector('#chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Dec', 'Jan', 'Feb', 'Juni', 'Juli', 'August'],
        datasets: [{
            label: "Vinter",
            data: [10469, 8928, 8598],
            backgroundColor: [
                //Farve på søjlerne
                'rgb(0, 41, 152, 0.9)', //December
                'rgb(0, 41, 152, 0.9)', //Januar
                'rgb(0, 41, 152, 0.9)', //Februar

            ],

        },
            {
                label: "Sommer",
                data: [0, 0, 0, 22704, 34950, 37395],
                backgroundColor: [
                    'rgb(255, 12, 0 , 0.9)', //Juni
                    'rgb(255, 12, 0 , 0.9)', //Juli
                    'rgb(255, 12, 0 , 0.9)', //August

                ],
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false // Fjernet lodret gitter ved "false"
                }
            },
            y: {
                grid: {
                    display: false// Fjernet vandret gitter ved "false"
                },
            },
        },
        plugins: {
            title: {
                display: true, // "Text" bliver vist ved "true"
                text: "Skriv noget her" // "Text" indhold
            }
        }
    }
});
*/

/*
//virker ikke ;(
const ctx = document.querySelector('#chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Vinter vs sommer"],
        datasets: [{
            label: "Jan",
            data: [8928, 22704],
            backgroundColor: [
                'rgb(63, 112, 253, 0.9)' //grå
            ],
            stack: 'Stack 0',
        },
            {
                label: "Feb",
                data: [8598],
                backgroundColor: [
                    'rgb(165, 188, 255, 0.9)' //rød
                ],
                stack: 'Stack 0',
            },
            {
                label: "Dec",
                data: [10469],
                backgroundColor: [
                    'rgb(0, 44, 173, 0.9)' //rød
                ],
                stack: 'Stack 0',
            },
            {
                label: "Juni",
                data: [22704],
                backgroundColor: [
                    'rgb(254, 163, 163, 0.9)' //rød
                ],
                stack: 'Stack 1',
            },
            {
                label: "Juli",
                data: [34950],
                backgroundColor: [
                    'rgb(255, 109, 109, 0.9)' //rød
                ],
                stack: 'Stack 1',
            },
            {
                label: "August",
                data: [37395],
                backgroundColor: [
                    'rgb(252, 0, 0 , 0.9)' //rød
                ],
                stack: 'Stack 1',
            },
        ],
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false // Fjernet lodret gitter ved "false"
                },
                stacked: true
            },
            y: {
                grid: {
                    display: false // Fjernet lodret gitter ved "false"
                },
                stacked: true
            }
        },
        plugins: {
            legend: {
                position: "bottom"
            },
            title: {
                display: true, // "Text" bliver vist ved "true"
                text: "Skriv noget her" // "Text" indhold
            }
        }
    }
});
 */