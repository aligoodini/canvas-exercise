let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d")

ctx.fillStyle = "#008080";
ctx.fillRect(70,canvas.height-120 , 50 , 120)

ctx.fillRect(160,canvas.height-160 , 50 , 160)

ctx.fillRect(250,canvas.height-60 , 50 , 60)

ctx.fillRect(340,canvas.height-250 , 50 , 250)

ctx.fillStyle = "green"
ctx.font = "20px snas-serif"
ctx.fillText(`Scale   X= ${canvas.width} Y= ${canvas.height}` , canvas.width-200 , 25)
