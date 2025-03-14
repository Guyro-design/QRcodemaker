const txt = document.querySelector('input')
const image = document.querySelector('img')
const btn = document.querySelector('button')

btn.addEventListener('click', ()=>{
    let nom = txt.value;
    if(!nom) return;
    image.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${nom}'
})