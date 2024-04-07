
const btn_menu = document.getElementById('btn_menu');
const nav = document.getElementById('nav');
const close1 = document.getElementById('close');
const overlay = document.getElementById('overlay');
const arrA = document.querySelectorAll('#nav ul li a');
const section = document.querySelectorAll('section');

btn_menu.addEventListener('click',()=>{
    nav.classList.toggle('toggle');
    overlay.classList.toggle('toggle');
})
close1.addEventListener('click',()=>{
    nav.classList.toggle('toggle');
    overlay.classList.toggle('toggle');
})
overlay.addEventListener('click',()=>{
    nav.classList.toggle('toggle');
    overlay.classList.toggle('toggle');
})


const home = document.getElementById('header');


document.addEventListener('scroll',()=>{
   home.classList.toggle('active', window.scrollY > 100);
    console.log(window.scrollY);

}) 

arrA.forEach(item=>{
    item.addEventListener('click',()=>{
        nav.classList.remove('toggle');
        overlay.classList.remove('toggle');
    })
})

document.addEventListener('scroll',()=>{
    section.forEach(item=>{
        let top = window.scrollY;
        let offsettop = item.offsetTop - 150;
        let height = item.offsetHeight;
        let id = item.getAttribute('id');

        arrA.forEach(itema=>{
            if(top >= offsettop && top < offsettop + height ){
                itema.classList.remove('menuactive');
                document.querySelector('#nav ul li a[href*=' + id + ']').classList.add('menuactive');
            }
        })

    })

})