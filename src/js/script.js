const navItem = document.querySelector(".nav-item")
const hamburger = document.querySelector("#hamburger")


hamburger.addEventListener('click', function() {
 navItem.classList.toggle('hidden')
})

const texts = ["Web Developer", "Student", "Tailwindcss"];
const textsHead = ["Progamming", "Blog", "Adventure", "Lifestyle", "Indonesia"];
let countC = 0;
let count = 0;
let index = 0;
let currentText = "";
let letter = "";



function changeText() {
    const textHead = document.getElementById('textHead');

    // Update text content
    textHead.textContent = textsHead[countC];

    // Apply slide-in-top animation
    textHead.style.animation = 'slide-in-top 1s forwards';

    // Wait for the text to stay visible
    setTimeout(() => {
        // Apply slide-out-bottom animation
        textHead.style.animation = 'slide-out-bottom 1s forwards';

        // Wait for the slide-out-bottom animation to finish
        setTimeout(() => {
            // Move to the next text
            countC = (countC + 1) % textsHead.length;

            // Hide the text (reset opacity)
            textHead.style.opacity = 0;

            // Call changeText function again
            setTimeout(changeText, 300);
        }, 400); // Duration of slide-out-bottom animation
    }, 500); // Time the text stays visible
}

document.addEventListener('DOMContentLoaded', (event) => {
    changeText();
});





(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typing-text').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1000); // Delay before typing next text
    } else {
        setTimeout(type, 100); // Typing speed
    }
})();


// animate scroll 
// window.onscroll = function() { 
//  const hero = document.querySelector('#hero')
//  const heroTop = hero.offsetTop;
//  const gambar = document.querySelector("#progam")
//  if (window.pageYOffset > heroTop ) {
//   gambar.classList.remove('hidden')
//  } else {
//   gambar.classList.add('hidden')
//  }
// }