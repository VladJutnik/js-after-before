const slider = document.querySelector('.slider'),
    before = slider.querySelector('.before'),
    beforeImage = before.querySelector('img'),
    change = slider.querySelector('.change')

let isActive = false;

document.addEventListener('DOMContentLoaded', ()=>{
    let width = slider.offsetWidth
    beforeImage.style.width = `${width}px`
})
//x - позиция по оси икс
const deforeAfterSlider = (x)=>{
    let shift = Math.max(0, Math.min(x, slider.offsetWidth))// на сколько сдвигается от границ нащего слайдера!
    before.style.width = `${shift}px`//устанавливаем ширину бефора
    change.style.left = `${shift}px`//сдвигаем полоску на сколько измениться ширина бефора
}
//когда поскролил отключаем все события
const pauseEvents = (e)=>{
    e.stopPropagation()
    e.preventDefault()
    return false //как только отработает функци все на паузу
}
change.addEventListener('mousedown', () => {
    isActive = true
    //console.log('down')
})
change.addEventListener('mouseup', () => {
    isActive = false
    //console.log('up')
})
change.addEventListener('mouseleave', () => {
    isActive = false
})
change.addEventListener('mousemove', (e) => {
    if(!isActive){
        return
    }
    let x = e.pageX;
    x -= slider.getBoundingClientRect().left
    deforeAfterSlider(x)
    pauseEvents(e)
})
//ДЛЯ МОБИЛЬНЫХ!!!
change.addEventListener('touchstart', () => {
    isActive = true
})
change.addEventListener('touchend', () => {
    isActive = false
})
change.addEventListener('touchcancel', () => {
    isActive = false
})
change.addEventListener('touchmove', (e) => {
    if(!isActive){
        return
    }
    let x;
    for(let i = 0; e < e.changedTouches.length; i++){
        x = e.changedTouches[i].pageX
    }
    x -= slider.getBoundingClientRect().left
    deforeAfterSlider(x)
    pauseEvents(e)
})