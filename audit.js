
function fck() {
    var element =
        document.body;

    element.classList.toggle("dark_mode");
}

const textContainer = document.querySelector('.text-container');
const textContent = document.querySelector('.text-content');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const scrollStep = 290; // Adjust the scrolling step as needed

prevBtn.addEventListener('click', function () {
    textContainer.scrollLeft -= scrollStep;
});

nextBtn.addEventListener('click', function () {
    textContainer.scrollLeft += scrollStep;
});