// to animate h1
window.addEventListener('load', animate);
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function animate() {
  let interations = 0;
  let text = document.querySelector('h1');
  const interval = setInterval(() => {
    text.innerText = text.innerText
      .split('')
      .map((letter, index) => {
        if (index < interations) {
          return text.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join('');

    if (interations >= text.length) {
      clearInterval(interval);
    }
    interations += 1;
  }, 150);
}
// document.querySelector('h1').onmouseover = (event) => {
//     let interations = 0;
//     const interval = setInterval(() => {
//       event.target.innerText = event.target.innerText
//         .split('')
//         .map((letter, index) => {
//           if (index < interations) {
//             return event.target.dataset.value[index];
//           }

//           return letters[Math.floor(Math.random() * 26)];
//         })
//         .join('');

//       if (interations >= event.target.dataset.value.length) {
//         clearInterval(interval);
//       }
//       interations += 1;
//     }, 150);
//   };


  // to display img on mouse mouv
const nav = document.querySelector("#nav");

for (const link of nav.getElementsByTagName("a")){
    link.onmousemove = e =>{
        const rect = link.getBoundingClientRect(),
         img = link.querySelector("img");
        e.preventDefault();

        img.style.left = `${e.clientX - rect.left}px`;
        img.style.top = `${e.clientY - rect.top}px`;
    }
}