const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('activ')
       
    })
};

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('activ')
        
    })
}

const containers = document.querySelectorAll('.slider_container');//-----> я хотел создать аниматсию которая при каждом клике карточек изменялос задный фон

for (const slider_container of containers) { //но неполучилос :(
    slider_container.addEventListener('click', () => {
        // clearActiveClasses1()
        
        slider_container.classList.add('active_art')
    })
};

// function clearActiveClasses1() {     
//     containers.forEach((slider_container) => {
        
//         slider_container.classList.remove('active_art')
//     })
// }