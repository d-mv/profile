// const cards = document.querySelectorAll('.card')
// const name = document.getElementById('text_name')
// console.log(name)
// setInterval(() => {
// Object.keys(cards).forEach((card) => {
//   const style = getComputedStyle(cards[card]).backgroundColor
//   console.log(style)
//   const colorArray = style.replace(/[^\d,]/g, '').split(',')
//   const newColorArray = colorArray.map (element => {
//     const elementInt = parseInt(element, 10)
//     if (elementInt + 1 > 255) {
//       element = 0
//     } else {
//       element = elementInt + 1
//     }
//     return element
//   })
//   const newColor = `rgb(${newColorArray[0]}, ${newColorArray[1]}, ${newColorArray[2]})`
//   console.log(newColor)
//   cards[card].style.backgroundColor = newColor
//   name.style.color = 'rgb(255,255,255)'
// })
// }, 20);

