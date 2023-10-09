let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d")
let month = document.querySelector("#month");
let sale = document.querySelector("#sale");
let submit = document.querySelector("#submit");
let reset = document.querySelector("#reset");

ctx.fillStyle = "green"
ctx.font = "20px snas-serif"
ctx.fillText(`Scale   X= ${canvas.width} Y= ${canvas.height}` , canvas.width-200 , 25)


let x = 70;
let width = 50 ;

submit.addEventListener("click" , (e)=>{
    e.preventDefault()

    let price = Number(sale.value)

    ctx.fillStyle = "#008080";
    ctx.fillRect(x,canvas.height - price , width , price)

    ctx.fillStyle = "red"
    ctx.fillText(month.value , x , canvas.height - (price+15) , 50)

    ctx.fillStyle = "black"
    ctx.fillText(sale.value , x+6 , canvas.height-15 , 50)

    x += width+30

    month.value = ""
    sale.value = ""
})

reset.addEventListener("click",(e)=>{
    e.preventDefault()

    ctx.clearRect(0,0,canvas.width,canvas.height)

    ctx.fillStyle = "green"
    ctx.font = "20px snas-serif"
    ctx.fillText(`Scale   X= ${canvas.width} Y= ${canvas.height}` , canvas.width-200 , 25)
})



