// JS CountDown Timer
let count = 10

for (let i = 0; i < 10; i++) {
  function timer(i) {
    setTimeout(() => {
      console.log(count)
      count--
    }, i * 500)
  }
  timer(i)
}