var myButton = document.querySelector('.box a'),
myMainDiv = document.querySelector('.box')
myButton.onclick=function(){
   myMainDiv.classList.toggle('open');
}
var myColor = document.getElementsByClassName('color'),
    myar= document.querySelectorAll('.mo li');

var myLanding = document.querySelector('.landing-page');
var myArray = ["1.jpg","2.jpg","3.jpg","4.jpg"],
    myrandom = document.querySelectorAll('.rando button');
let styling = true,
    backgroundOption;
function rdm() {  
    if(styling===true){
     backgroundOption = setInterval(() => {
     let random = Math.floor(Math.random()*myArray.length);
     myLanding.style.backgroundImage = `url(photos/${myArray[random]})`;
     
    }, 2000); 
}
}
myrandom.forEach(button => {

    button.addEventListener("click",(e)=>{
        if(e.target.dataset.background === 'yes'){
             styling =true;
             rdm();
        }
        else{
            styling=false;
            clearInterval(backgroundOption);
        }
    })
});
var myStat = document.querySelectorAll('.col');
var mystyle = document.querySelectorAll('.coli');
var myBorder = document.querySelectorAll('.borde'); 
myar.forEach((li) => {
   li.addEventListener("click",(e)=>{
       for(let j=0;j<myColor.length;j++){
            myColor[j].style.color = `${e.target.dataset.color}`;
            
        }  
        for(let k=0;k<myStat.length;k++){
            myStat[k].style.backgroundColor = `${e.target.dataset.color}`;
        }
        for(let r=0;r<mystyle.length;r++){
            mystyle[r].style.backgroundColor = `${e.target.dataset.color}`;
        }
        for(let f=0;f<myBorder.length;f++){
            myBorder[f].style.borderColor = `${e.target.dataset.color}`;
        }
        
   })
});
var mySkills = document.querySelector('.skills');
window.onscroll = function(){
    let wind = this.innerHeight,
        long = mySkills.offsetHeight,
        outer = mySkills.offsetTop;
        let page = this.pageYOffset;
        console.log();
    if(page >(long+ outer-wind)){
         myStat.forEach(element => {
             element.style.width= element.dataset.animation;
         });
    }
    else{
        myStat.forEach(element => {
            element.style.width= 0;
        });
    }
    
}
var myGallery =document.querySelectorAll('.photo img');
myGallery.forEach(img => {
    img.addEventListener("click",(e)=>{
        let overlay =document.createElement('div');
        overlay.className='image';
        document.body.appendChild(overlay);
        let myBox = document.createElement('div');
        myBox.className="mobilis";
        let myOff = document.createElement('button');
        myOff.className ="offing col";
        let text = document.createTextNode("x");
        myOff.appendChild(text);
        myBox.appendChild(myOff);
        let myPhoto =document.createElement("img");
        myPhoto.src=img.src;
        myBox.appendChild(myPhoto);
        document.body.appendChild(myBox);


    })
});
 document.addEventListener("click",(e)=>{
     if(e.target.className==="offing col"){
         e.target.parentNode.remove();
         document.querySelector('.image').remove();
     }

 })
 var myBullet = document.querySelectorAll('.round'),
     mybill = document.querySelectorAll('.bullets'),
     mybull = document.querySelectorAll('.nav a');
myBullet.forEach(element => {
    element.addEventListener("click",(e)=>{
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:'smooth'
        })
    })
});
mybull.forEach(element => {
    element.addEventListener("click",(e)=>{
        e.preventDefault(); 
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:'smooth'
        })
    })
});
myrandom.forEach(ev => {

    ev.addEventListener("click",(er)=>{
        for(let i=0;i<mybill.length;i++) {
                if(er.target.dataset.show === 'show'){
                  mybill[i].style.marginRight='5px';
                  mybill[i].style.transitionDuration ='1s';
                }


            if(er.target.dataset.show ==='hidden'){
                mybill[i].style.marginRight ='-25px';
            }
        }
       
    })
});
 

 
 