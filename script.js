const reviews=[
    {
        id:1,
        name:"Jessica Jones",
        job:"UX Designer",
        img:"person-1.jpg",
        info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. A expedita alias reprehenderit nam facilis, culpa sint accusamus voluptas earum voluptates quasi deleniti rem quaerat consectetur placeat officiis reiciendis vero? Corporis.",
    },
    {
        id:2,
        name:"John Andrewson",
        job:"Web Designer",
        img:"person-2.jpg",
        info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus reiciendis vero recusandae veniam eligendi, eveniet similique commodi quia eius? Ut sunt facilis libero tempora omnis quidem sint ducimus distinctio obcaecati?",

    },
    {
        id:3,
        name:"Arthur Morgan",
        job:"Web Development",
        img:"person-3.jpg",
        info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti impedit nesciunt cupiditate, ipsum voluptates qui eius beatae. Omnis molestias veritatis quibusdam, vitae ipsam iste, adipisci necessitatibus, delectus perferendis culpa nisi?",

    },
    {
        id:4,
        name:"Cersie Decker",
        job:"Backend Developer",
        img:"person-4.jpg",
        info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus vero facilis veritatis laudantium, deserunt eligendi dolores cum accusantium, numquam ipsum, modi eos fuga nostrum eius perspiciatis nisi adipisci sed similique!",

    },
    {
        id:5,
        name:"Alicent Hightower",
        job:"UX Designer",
        img:"person-5.jpg",
        info:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa iste eligendi quasi, laboriosam, harum laborum natus fugit illum numquam praesentium, adipisci et dolorum recusandae. Cupiditate labore neque minus aperiam quisquam!",
    }

];
const img=document.querySelector("#person-img");
let name=document.querySelector(".person-id");
const job=document.querySelector(".qualification");
const info=document.querySelector(".person-detail");
const prevBtn=document.querySelector(".button-left");
const nextBtn=document.querySelector(".button-right");
const random=document.querySelector(".random-button");
let  currentValue=0;

window.addEventListener("DOMContentLoaded",()=>{
  showperson();
})

function showperson(){
     let items=reviews[currentValue];
    img.src =items.img;
    name.innerText=items.name;
    job.innerText=items.job;
    info.innerText=items.info;
}

nextBtn.addEventListener("click",()=>{
    currentValue++;
    if(currentValue >= reviews.length){
        currentValue=0;
    }
    showperson();
}) 
prevBtn.addEventListener("click",()=>{
    currentValue--;
    if(currentValue < 0 ){
        currentValue=reviews.length-1;
    }
    showperson();
}) 

random.addEventListener("click",()=>{
    currentValue=Math.floor(Math.random()* reviews.length);
    
    showperson();
})