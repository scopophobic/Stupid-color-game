
// const squares = document.querySelector('.square')

// const times = {'red': 0, 'blue': 0, 'green': 0}

// squares.forEach(square => {
//   square.onclick = () =>{
//         times[square.value]+=1
//         square.innertext = times[square.value]
//     }  
// });



const squares = document.querySelectorAll('.square')

// forEach
const timesClicked = {'red': 0, 'blue': 0, 'green': 0}
squares.forEach(square => {
  square.onclick = () => {
    timesClicked[square.value] += 1
    square.innerText = timesClicked[square.value]
  }
})
function clearScores() {
  timesClicked.red = 0
  timesClicked.blue = 0
  timesClicked.green = 0
  squares.forEach(square => {
    square.innerText = ''
  })
}

const clearGameBtn = document.getElementById('clear-game')
clearGameBtn.onclick = () => clearScores()
