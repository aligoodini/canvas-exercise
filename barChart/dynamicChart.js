let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d")

let shopData = [
    {id : 1 ,
        month : "فروردین" ,
        sale : 200
    } ,
    {id : 1 ,
        month : "اردیبهشت" ,
        sale : 300
    } ,
    {id : 1 ,
        month : "خرداد" ,
        sale : 500
    } ,
    {id : 1 ,
        month : "تیر" ,
        sale : 450
    } ,
    {id : 1 ,
        month : "مرداد" ,
        sale : 120
    } 
        
]

let x = 70;
let width = 50 ;

ctx.font = "bold 18px tahoma"

shopData.forEach(item => {
    
    ctx.fillStyle = "#008080";
    ctx.fillRect(x,canvas.height - item.sale , width , item.sale)

    ctx.fillStyle = "red"
    ctx.fillText(item.month , x , canvas.height - (item.sale+15) , 50)

    x += width+30
})



ctx.fillStyle = "green"
ctx.font = "20px snas-serif"
ctx.fillText(`Scale   X= ${canvas.width} Y= ${canvas.height}` , canvas.width-200 , 25)