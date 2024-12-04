'use strict'

const btnAbout = document.querySelector('.btn-about');
const btnWork = document.querySelector('.btn-work');
const btnContact = document.querySelector('.btn-contact');
const about = document.querySelector('.about-container')
const work = document.querySelector('.work-container')
const contact = document.querySelector('.contact-container')
const icons= document.querySelectorAll('.right-nav-link')
console.log(icons)

btnAbout.addEventListener('click', function () {
   

    about.scrollIntoView({ behavior:'smooth'})
})

btnWork.addEventListener('click', function () {
    work.scrollIntoView({behavior:'smooth'})
})

btnContact.addEventListener('click', function () {
    contact.scrollIntoView({behavior:'smooth'})
})

for (let i = 0; i < icons.length; i++){
    icons[i].addEventListener('click', function () {
        contact.scrollIntoView({behavior:'smooth'})
    })
}