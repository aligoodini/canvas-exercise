let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let input = document.querySelector("#input");
let submit = document.querySelector("#submit");
let reset = document.querySelector("#reset");


ctx.fillStyle = "#333";
ctx.strokeStyle = "#333";
ctx.lineWidth = 4;

function resetClick(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    input.value = ""
    console.log("pak");
}

submit.addEventListener("click" , (e)=>{

    ctx.clearRect(0,0,canvas.width,canvas.height)

    let inputValue = Number(input.value);

    // vertical lines

    for(let i=inputValue ; i<800 ; i += inputValue){
        ctx.moveTo(i,0)
        ctx.lineTo(i , canvas.height)
    }

    // horizontal lines

    for(let i=inputValue ; i<800 ; i += inputValue){
        ctx.moveTo(0,i)
        ctx.lineTo(canvas.width , i)
    }

    ctx.stroke()

    for(let x=0 ; x<canvas.width ; x+=inputValue*2 ){
        for(let y=0 ; y<canvas.height ; y+=inputValue*2 ){
            ctx.fillRect(x,y,inputValue,inputValue)
        }
    }

    for(let x=inputValue ; x<canvas.width ; x+=inputValue*2 ){
        for(let y=inputValue ; y<canvas.height ; y+=inputValue*2 ){
            ctx.fillRect(x,y,inputValue,inputValue)
        }
    }

    input.value = ""
})

reset.addEventListener("click" , resetClick)

