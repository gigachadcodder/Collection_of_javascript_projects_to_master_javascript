const reviews = [
    {
        id:1,
        name: "naruto uzumaki",
        job:"Hokage",
        img:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
        text:"one day I will be hokage, I never go back on my word this is my nindo."
    },
    {
        id:2,
        name: "Hinata huga",
        job:"Hokage's wifu",
        img:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        text:"Hi I'm Hinata and I am naruto's wife. I am the best wifu in the anime universe"
    },
    {
        id:3,
        name: "Iruka sensei",
        job:"Vice pricipal",
        img:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        text:"one day I will be hokage, I never go back on my word this is my nindo."
    },
    {
        id:1,
        name: "Kakashi Hatake",
        job:"6th Hokage",
        img:"https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        text:"one day I will be hokage, I never go back on my word this is my nindo."
    },    
]

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job= document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem);
})

function showPerson(){
    const item = reviews[currentItem];
    img.src= item.img;
    author.textContent =  item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function(){
    currentItem++;
    if (currentItem > reviews.length-1 ) {
        currentItem = 0;
    }
    showPerson();
})
prevBtn.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length-1 ;
    }
    showPerson();
})

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log showPerson(): void
    showPerson();
})