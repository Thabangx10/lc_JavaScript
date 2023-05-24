let buttons = document.querySelectorAll('.btn')
let numbers = document.querySelectorAll('.num')
let textarea = document.querySelector('textarea')

let backspace_btn = document.querySelector('.backspace')
let shift_btn = document.querySelector('.shift')
let space_btn = document.querySelector('.space')

let chars = []

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        textarea.value += btn.innerText
        chars = textarea.value.split('')
    })
})

numbers.forEach(num => {
    num.addEventListener('click', () =>{
        textarea.value += btn.innerText
        chars = textarea.value.split('')
    })
});

backspace_btn.addEventListener('click', () => {
    chars.pop()
    textarea.value = chars.join('')
})

space_btn.addEventListener('click', () => {
    chars.push(' ')
    textarea.value = chars.join('')
})

shift_btn.addEventListener('click', () => {
    buttons.forEach(btn => {
        btn.classList.toggle('upper')
    })
})
