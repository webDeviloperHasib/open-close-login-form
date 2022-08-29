

let loginFormShow = document.getElementsByClassName('login')[0];
let form = document.getElementsByClassName('form')
loginFormShow.addEventListener('click', function(e){
    FullModalElment.style.display = 'block'
})

let close = document.getElementsByClassName('close')[0]
console.log(close)

close.addEventListener('click', function(){
    FullModalElment.style.display = 'none'
})

let cancelBtn = document.getElementsByClassName('cancelbtn')[0];
console.log(cancelBtn)
cancelBtn.addEventListener('click', function(){
    FullModalElment.style.display = 'none'
})

let FullModalElment = document.getElementsByClassName('modal')[0];
window.onclick = function(event){
    if(event.target == FullModalElment){
        FullModalElment.style.display = 'none'
    }
}