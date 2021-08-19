const buyBtns= document.querySelectorAll('.js-btn-buy');
const closeBtn= document.querySelector('.js-btn-close');
const modal= document.querySelector('#modal');
const modalContainer= document.querySelector('#modal-container');

modalContainer.addEventListener('click',(event)=>{
    event.stopPropagation();
})

modal.addEventListener('click',()=>{
    document.querySelector('#modal').classList.remove('open');
})

closeBtn.addEventListener('click',()=>{
    document.querySelector('#modal').classList.remove('open');
})
buyBtns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        document.querySelector('#modal').classList.add('open');
    })
});