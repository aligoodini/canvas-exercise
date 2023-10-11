let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")

ctx.translate(100,100)

ctx.fillStyle ="blue";
ctx.fillRect(150,150 , 50,70)

ctx.scale(4,2)
ctx.fillStyle ="yellow";
ctx.fillRect(150,180 , 50,70)

ctx.fillStyle ="red";
ctx.rotate(90 * Math.PI/180)
ctx.fillRect(150,-150 , 50,70)



