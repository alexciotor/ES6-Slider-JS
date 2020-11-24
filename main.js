 const get=(selection)=>{
     const element = document.querySelector(selection)
     if(element){
         return element
     }
     else{
         throw new Error('No element Selected')
     }
 }



 
 const container = get('.slide-container')
 const art =get('.art')
const nextBtn =get('.right')
const prevBtn=get('.left')


 const peoples = [
     {
         img:   './photo/photo1.jpg',
name: "Jane Doe",
ocupation: 'Developer',
review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nostrum ut similique facere magni porro odit quos ipsum, aspernatur ducimus.'
 },
   {
         img:'./photo/photo2.jpg',
name: "Sarah Doe",
ocupation: 'Project Manager',
review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nostrum ut similique facere magni porro odit quos ipsum, aspernatur ducimus.'
 },
    {
         img: './photo/photo3.jpg',
name: "Susane Doe",
ocupation: 'Photographer',
review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nostrum ut similique facere magni porro odit quos ipsum, aspernatur ducimus.'
 },
     {
         img:'./photo/photo4.jpg',
name: "Maya Doe",
ocupation: 'Boss Lady',
review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nostrum ut similique facere magni porro odit quos ipsum, aspernatur ducimus.'
 }
]

const flex = get('.slide-container')
 const items =peoples.map((item, index)=>{
const {img, name, ocupation:ocp, review:rev} =item
 let position = 'next'
 if(index===0){
     position ='active'
 }
 else if (index === peoples.length-1){
     position = 'last'
 }
    return `
        <article class="art ${position}">
            <img class="img" src="${img}" alt="">
            <p class="name">${name}</p>
            <p class="job">${ocp}</p>
            <p class="para" >${rev}</p>
            <span class="quote" ><i class="fas fa-quote-right"></i></span>
        </article>`
}).join('')

flex.innerHTML = items

 const startSlider=(type)=>{
    const active = get('.active')
    const last =get('.last')
    let next = active.nextElementSibling
    console.log(next);
     if(!next){
        next = container.firstElementChild
      
    }

    active.classList.remove(['active'])
    last.classList.remove(['last'])
    next.classList.remove(['next'])

if(type==='left'){
    active.classList.add('next')
    last.classList.add('active')
    next =last.previousElementSibling
    if(!next){
        next = container.lastElementChild;
    }
      next.classList.remove(['next'])
    next.classList.add('last')
    return;
}
    active.classList.add('last')
    last.classList.add('next')
    next.classList.add('active')
   
 }

nextBtn.addEventListener('click',()=>{
    startSlider()
})

prevBtn.addEventListener('click',()=>{
    startSlider('left')
})