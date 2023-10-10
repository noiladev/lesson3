// 1-button bosilganda div ni shakli bg color ham ozgarsin, yana qaytadan bosilganda defoult  holatga qaytsin "class qowiw orqali class-add va class-remove"
// 2-button bosilganda faqat buttonni ozi tun va kunga almashsin 

var elBox = document.querySelector('.box')
var elTitle =document.querySelector('.title')

var statuss = false
function fn() {
    if(statuss == true) {
        elBox.style.borderRadius = '50%'
        elBox.style.border = 'none'
        elBox.style.backgroundColor = 'black'
        elTitle.textContent = 'default status'
        elTitle.style.color = 'white'
    }else{
        elBox.style.borderRadius = '50%'
        elBox.style.border = 'none'
        elBox.style.backgroundColor = 'green'
        elTitle.textContent = '  status-2'
    }
    statuss = !statuss
}

var elBtn2 = document.querySelector('.btn2')

var holat = false
function btm() {
    if(holat == true) {
        elBtn2.style.backgroundColor = 'black'
        elBtn2.style.border = 'none'
        elBtn2.textContent = 'Kun'
        elBtn2.style.color = 'white'
    }else{
        elBtn2.style.border = 'none'
        elBtn2.style.backgroundColor = 'red'
        elBtn2.textContent = 'Tun'
    }
    holat = !holat
}