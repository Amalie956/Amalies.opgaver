//Javascript - Visualizing data using chart.js

//Exercise 1 - level 1
/*
const ctx = document.querySelector('#chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2018', '2019', '2020', '2021'],
        datasets: [{
            label: "Danmark",
            data: [1000, 840, 600, 360],
        }]
    }
});
*/

/*
// Exercise 2 - level 1
const ctx = document.querySelector('#chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Danmark', 'Sverige', 'Norge', 'England'], //window + punktum
        datasets: [{
            label: "Country exports",
            data: [1000, 840, 600, 360],
        }]
    }
});
*/

/*
//Exercise 3 - level 1
const ctx = document.querySelector('#chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Kayne West Listens', 'Taylor Swift Listens'],
        datasets: [{
            data: [55, 45],
        }]
    }
});
*/

/*
//Exercise 4 - level 1
const ctx = document.querySelector('#chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2018', '2019', '2020', '2021'],
        datasets: [{
            label: "Denmark",
            data: [1000, 840, 600, 360]
        },
            {
                label: "Sweden",
                data: [900, 400, 600, 700]
            }
        ]
    }
});
*/

/*
//Exercise 5 - level 2
const ctx = document.querySelector('#chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Danmark', 'Sverige', 'Norge', 'England'], //window + punktum
        datasets: [{
            label: "Country exports",
            data: [1000, 840, 600, 360],
            backgroundColor: [
                'rgb(255, 0, 0, 0.9)', //rød
                'rgb(0, 0, 0, 0.1)', //grå
                'rgb(0, 0, 0, 0.1)',//grå
                'rgb(0, 0, 0, 0.1)'//grå
            ]
        }]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                },
            },
        },
        plugins: {
            title: {
                display: true,
                text: "Custom Chart Title"
            }
        }
    }
});
*/

/*
//Exercise 6 - level 2
const ctx = document.querySelector('#chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    options: {
        plugins: {
            legend: {
                position: "bottom"
            },
            title: {
                display: true,
                text: "TikTok vs Youtube views"
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        }
    },
    data: {
        labels: ['Monday', 'tuesday', 'wednesday', 'thursday'],
        datasets: [{
            label: "TikTok views",
            data: [24, 75, 97, 73],
            borderColor: [
                'rgb(0, 0, 0, 0.1)' //grå
            ],
        },
            {
                label: "Youtube views",
                data: [67, 68, 58, 80],
                borderColor: [
                    'rgb(51, 188, 192, 0.9)' //rød
                ],
            }
        ]
    },
});
 */

/*
//Exercise 7 - Browser-usage.xlxs - "2. Hvilken visualiseringsform"
const ctx = document.querySelector('#chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    options: {
        scales: {
            x: {
                grid: {
                    display: false
                }
            }
        },
        elements: {
            point: {
                radius: 0
            }
        },
        plugins: {
            legend: {
                position: "bottom"
            },
            title: {
                display: true,
                text: "Browser usage"
            }
        }
    },
    data: {
        labels: ['jan-09', 'jan-10', 'jan-11', 'jan-12', 'jan-13', 'jan-14', 'jan-15', 'jan-16', 'jan-17', 'jan-18'],
        datasets: [{
            label: "Chrome",
            data: [1.38,
                6.04,
                15.68,
                28.4,
                38.08,
                46.6,
                51.72,
                57.75,
                62.09,
                65.98],
            borderColor: [
                'rgb(35, 97, 249 , 0.9)' //blå
            ],
            backgroundColor: ['rgb(35, 97, 249, 0.9)'],
        },
            {
                label: "IE",
                data: [65.41,
                    55.25,
                    46,
                    37.45,
                    32.25,
                    24.65,
                    21.16,
                    16,
                    14.85,
                    11.87],
                borderColor: [
                    'rgb(237, 165, 10  , 0.9)' //orange
                ],
                backgroundColor: ['rgb(237, 165, 10, 0.9)'],
            },
            {
                label: "Firefox",
                data: [27.03,
                    31.64,
                    30.68,
                    24.78,
                    22.47,
                    20.39,
                    18.7,
                    15.95,
                    5.28,
                    5.87],
                borderColor: [
                    'rgb(160, 164, 167 , 0.9)' //grå
                ],
                backgroundColor: ['rgb(160, 164, 167, 0.9)'],
            },
            {
                label: "Safari",
                data: [2.57,
                    3.76,
                    5.09,
                    6.62,
                    5.12,
                    5.09,
                    4.94,
                    4.6,
                    10.49,
                    7.28],
                borderColor: [
                    'rgb(236, 233, 0, 0.9)' //gul
                ],
                backgroundColor: ['rgb(236, 233, 0, 0.9)'],
            },
            {
                label: "Opera",
                data: [2.92,
                    2,
                    2,
                    1.95,
                    1.22,
                    1.32,
                    1.67,
                    2.03,
                    3.58,
                    4.11],
                borderColor: [
                    'rgb(75, 180, 252 , 0.9)' //lyseblå
                ],
                backgroundColor: ['rgb(75, 180, 252, 0.9)'],
            }
            , {
                label: "Other",
                data: [0.7,
                    1.31,
                    0.55,
                    0.79,
                    0.86,
                    1.96,
                    1.81,
                    3.68,
                    3.71,
                    4.88],
                borderColor: [
                    'rgb(59, 207, 16, 0.9)' //grøn
                ],
                backgroundColor: ['rgb(59, 207, 16, 0.9)'],
            }
            , {
                label: "Mobile",
                data: [0.67,
                    1.56,
                    4.3,
                    8.49,
                    14.13,
                    23.77,
                    33.24,
                    41.04,
                    52.28,
                    54.2],
                borderColor: [
                    'rgb(0, 0, 0, 0.9)' //sort
                ],
                backgroundColor: ['rgb(0, 0, 0, 0.9)'],
            }


        ]
    },
});
 */
