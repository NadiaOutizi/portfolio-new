// const professionElement = document.querySelector('.typing');
// const professions = ['web developer', ' web designer']; 
// let professionIndex = 0;
// let currentText = '';
// let isDeleting = false;

// function type() {
//     const currentProfession = professions[professionIndex];
//     if (!isDeleting) {
//         currentText = currentProfession.substring(0, currentText.length + 1);
//     } else {
//         currentText = currentProfession.substring(0, currentText.length - 1);
//     }

//     professionElement.textContent = currentText;

//     if (!isDeleting && currentText === currentProfession) {
//         isDeleting = true;
//         setTimeout(() => {
//             isDeleting = false;
//             professionIndex = (professionIndex + 1) % professions.length;
//         }, 1000);
//     }

//     setTimeout(type, 150);
// }
document.addEventListener("DOMContentLoaded", function () {
    const typedOptions = {
        strings: ['web developer', 'web designer'], // List of professions to alternate
        typeSpeed: 100, // Adjust typing speed here
        backSpeed: 50, // Adjust deleting speed here
        startDelay: 0, // Adjust delay before typing starts
        backDelay: 1000, // Delay before deleting starts after typing
        loop: true, // Loop between words
        showCursor: true, // Show blinking cursor
        cursorChar: '|', // Custom cursor character
    };

    const typed = new Typed('.typing', typedOptions);
});


// type();

