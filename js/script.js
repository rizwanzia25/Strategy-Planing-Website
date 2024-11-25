const hamBurger = document.getElementById('hamBurger');
const cross = document.getElementById('cross');
const navbar = document.querySelector('.navbar');
const boxs = document.querySelectorAll('#btn');
const tabContents = document.querySelectorAll('.tab-content');


hamBurger.addEventListener('click',() =>{
    navbar.classList.add('active')
});
cross.addEventListener('click',() =>{
    navbar.classList.remove('active')
});



boxs.forEach(box=>{

    box.addEventListener('click',()=>{
        tabContents.forEach(tabContent => tabContent.classList.remove("nowactive"))
        boxs.forEach(box =>{
            box.classList.remove("nowactive")
        });
        box.classList.add("nowactive")
        document.querySelector(box.dataset.target).classList.add("nowactive");
    });
});