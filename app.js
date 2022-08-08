const puzzleBoard = document.querySelector('#puzzle')
const solveBtn = document.querySelector('#solve-btn')
const squares = 81
const submission = []

for( let i = 0; i < squares; i++) {
    const inputElement = document.createElement('input')
    inputElement.setAttribute('type', 'number')
    inputElement.setAttribute('min', 1)
    inputElement.setAttribute('max', 9)
    puzzleBoard.appendChild(inputElement)
}

const joinValues = () => {
    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => {
        if (input.value) {
            submission.push(input.value)
        } else {
            submission.push('.')
        }
    })
    console.log(submission)
}

const solve = () => {

    const options = {
      method: 'POST',
      url: 'https://solve-sudoku.p.rapidapi.com/',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '186d750b14msh874800c6ae0cfc1p1ccfb3jsn9c1ba64ec599',
        'X-RapidAPI-Host': 'solve-sudoku.p.rapidapi.com'
      },
      data: '{"puzzle":"2.............62....1....7...6..8...3...9...7...6..4...4....8....52.............3"}'
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

solveBtn.addEventListener('click', solve)
