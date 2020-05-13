// Grab
const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
    "linear-gradient(to right top,#aa535f, #f5b3bb)",
     "linear-gradient(to right top, #B24592, #F15F79",  
     "linear-gradient(to right top, #642B73, #C6426E);" 
    ];

    const options = {
        threshold: 0.7
    }

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
     entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
        const direction ={
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        }
        if(entry.isIntersecting){
            bubble.style.setProperty('left', `${direction.left}px`);
            bubble.style.setProperty('top', `${direction.top}px`);
            bubble.style.setProperty('width', `${direction.width}px`);
            bubble.style.setProperty('height', `${direction.height}px`);
            bubble.style.background = gradients[gradientIndex];
        }
     });
}
sections.forEach(section => {
    observer.observe(section);
});