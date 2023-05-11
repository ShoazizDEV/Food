const products = {
    plainBurger:{
        name:'GAMBURGER',
        price:10000,
        amout:0,
        calories:115,
        get Summ(){
            return this.amout * this.price
        },
        get KCALL() {
            return this.amout * this.calories
        }
    },
    freshBurger:{
        name:'GAMBURGER FRESH',
        price:25000,
        amout:0,
        calories:160,
        get Summ(){
            return this.amout * this.price
        },
        get KCALL() {
            return this.amout * this.calories
        }
    },
    freshCombo:{
        name:'FRESH COMBO',
        price:31900,
        amout:0,
        calories:220,
        get Summ(){
            return this.amout * this.price
        },
        get KCALL() {
            return this.amout * this.calories
        }
    }
}
const plusMinusBtn = document.querySelectorAll('.main__product-btn')

for (let i = 0; i < plusMinusBtn.length; i++) {
    plusMinusBtn[i].addEventListener('click', function () {
        plusMinus(this)
    })
}
function plusMinus(el) {
    const parent = el.closest(".main__product"),
        parentId = parent.getAttribute('id'),
        outNum = parent.querySelector('.main__product-num'),
        outPrice = parent.querySelector('.main__product-price span'),
        outKcall =  parent.querySelector('.main__product-kcall span'),
        parentSym = el.getAttribute('data-symbol')

        if(parentSym == '+')products[parentId].amout++ 
        else if(parentSym == '-' &&  products[parentId].amout > 0 )products[parentId].amout--  

        outNum.innerHTML = products[parentId].amout
        outPrice.innerHTML = products[parentId].Summ
        outKcall.innerHTML = products[parentId].KCALL
}
const addCart = document.querySelector('.addCart'),
    receipt = document.querySelector('.receipt'),
    receiptWindow = document.querySelector('.receipt__window'),
    receiptOut = document.querySelector('.receipt__window-out'),
    receiptBtn = document.querySelector('.receipt__window-btn')

    let totalProduct = [],
        totalName = '',
        totalPrice = 0,
        totalKcall = 0

addCart.addEventListener('click', function (){
    for (const key in products) {
        let pro = products[key]
        if(pro.amout > 0){
            totalProduct.push(pro)
        }
        pro.price = pro.Summ
        pro.kcall = pro.KCALL
        }
        for (let i = 0; i < totalProduct.length; i++) {
            const element = totalProduct[i];
            totalName += element.name + ' '
            totalPrice += element.price
            totalKcall += element.kcall
        }

        receiptOut.innerHTML = `Total products: ${totalName} \n\n Total calories: ${totalKcall} collory \n\n Total Price: ${totalPrice} summa \n\n Date: ${info()}`

        receipt.style.display = 'flex'
        setTimeout(() => {
            receipt.style.opacity = '1' 
        }, 100);
        setTimeout(() => {
            receiptWindow.style.top = '20%'
        }, 200);

        let element = document.querySelectorAll('.main__product-num, .main__product-price span, .main__product-kcall span')
        element.forEach( element =>{
            element.innerHTML = 0
        })
})
function info() {
    let Time = new Date()
    let date = Time.getDate()
    let month = Time.getMonth()
    let year = Time.getFullYear()
    let h = Time.getHours()
    let m = Time.getMinutes()
    let s = Time.getSeconds()
    return`${h}:${m}:${s} ${date}.${month}.${year} `
}
receiptBtn.addEventListener('click', function () {
    receipt.style.display = 'none'
    setTimeout(() => {
        alert('Заказ успешно!❤️😊')
        location.reload()
    }, 100);
})

const extra = document.querySelector('.header__timer-extra') 

function power() {
    if (extra.innerHTML < 100) {
        setTimeout(() => {
            extra.innerHTML++
            power()
        }, 10);
    }
}
power()