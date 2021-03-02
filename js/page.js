'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const section_home = document.querySelector('#home')
    const section_works = document.querySelector('#works')

    const btn_works = document.querySelector('#btn-works')
    btn_works.addEventListener('click', () => {
        section_works.style.animation = 'load 0.5s linear 0s 1 forwards'
        section_works.style.display = 'block'
        section_home.style.display = 'none'
    })

    const btn_close = document.querySelector('#btn-close')
    btn_close.addEventListener('click', () => {
        section_home.style.animation = 'load 0.5s linear 0s 1 forwards'
        section_home.style.display = 'block'
        section_works.style.display = 'none'
    })
})
