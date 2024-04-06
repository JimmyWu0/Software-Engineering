let mode=0;
//
let down;
let step = -1;
let history = [];
let picsrc;
let mouseX, mouseY;
let hue = 0;
//
let normal = "RGB(0, 0, 0)";



const canvas = document.getElementById("canvas");
canvas.style.cursor = "url(image/pencil-cur.png) 0 16, auto";
const ctx = canvas.getContext("2d");
ctx.globalCompositeOperation = "source-over";
ctx.strokeStyle = "black";
ctx.lineCap = "round"; 
ctx.lineJoin = "round";
ctx.lineWidth = 11;
ctx.font = "12pt New Times Roman";
//-------------------------------------------------------------------------------------------------------------------------------
const b0 =document.getElementById('b0');
b0.addEventListener('click', function(){
    canvas.style.cursor = "url(image/pencil-cur.png) 0 16, auto";

    b0.style.background= "#00000000";
    b1.style.background= "#00000000";
    b2.style.background= "#00000000";
    b3.style.background= "#00000000";
    b4.style.background= "#00000000";
    b5.style.background= "#00000000";
    b6.style.background= "#00000000";
    b7.style.background= "#00000000";
    b8.style.background= "#00000000";
    b9.style.background= "#00000000";
    b10.style.background= "#00000000";
    b11.style.background= "#00000000";
    b12.style.background= "#00000000";
    b13.style.background= "#00000000";
    b14.style.background= "#00000000";
    b15.style.background= "#00000000";
    b16.style.background= "#00000000";

    b0.style.background= "#dddddd";
    mode=0;
    // b0.style.color= "#FFFFFF";
    // document.getElementById('aaa').innerHTML="Hello!";
});

const b1 =document.getElementById('b1');
b1.addEventListener('click', function(){
    canvas.style.cursor = "url(image/eraser-cur.png) 0 16, auto";

    b0.style.background= "#00000000";
    b1.style.background= "#00000000";
    b2.style.background= "#00000000";
    b3.style.background= "#00000000";
    b4.style.background= "#00000000";
    b5.style.background= "#00000000";
    b6.style.background= "#00000000";
    b7.style.background= "#00000000";
    b8.style.background= "#00000000";
    b9.style.background= "#00000000";
    b10.style.background= "#00000000";
    b11.style.background= "#00000000";
    b12.style.background= "#00000000";
    b13.style.background= "#00000000";
    b14.style.background= "#00000000";
    b15.style.background= "#00000000";
    b16.style.background= "#00000000";

    b1.style.background= "#dddddd";
    mode=1;
});

const b2 =document.getElementById('b2');
b2.addEventListener('click', function(){
    canvas.style.cursor = "url(image/line-cur.png) 0 16, auto";

    b0.style.background= "#00000000";
    b1.style.background= "#00000000";
    b2.style.background= "#00000000";
    b3.style.background= "#00000000";
    b4.style.background= "#00000000";
    b5.style.background= "#00000000";
    b6.style.background= "#00000000";
    b7.style.background= "#00000000";
    b8.style.background= "#00000000";
    b9.style.background= "#00000000";
    b10.style.background= "#00000000";
    b11.style.background= "#00000000";
    b12.style.background= "#00000000";
    b13.style.background= "#00000000";
    b14.style.background= "#00000000";
    b15.style.background= "#00000000";
    b16.style.background= "#00000000";

    b2.style.background= "#dddddd";
    mode=2;
});

const b3 =document.getElementById('b3');
b3.addEventListener('click', function(){
    // canvas.style.cursor = "url(image/eraser-cur.png) 0 16, auto";

    b0.style.background= "#00000000";
    b1.style.background= "#00000000";
    b2.style.background= "#00000000";
    b3.style.background= "#00000000";
    b4.style.background= "#00000000";
    b5.style.background= "#00000000";
    b6.style.background= "#00000000";
    b7.style.background= "#00000000";
    b8.style.background= "#00000000";
    b9.style.background= "#00000000";
    b10.style.background= "#00000000";
    b11.style.background= "#00000000";
    b12.style.background= "#00000000";
    b13.style.background= "#00000000";
    b14.style.background= "#00000000";
    b15.style.background= "#00000000";
    b16.style.background= "#00000000";

    b3.style.background= "#dddddd";

    ctx.clearRect(0, 0, 800, 500);
    step=-1;
    history = [];
    // mode=3;
});

const b4 =document.getElementById('b4');
b4.addEventListener('click', function(){
    canvas.style.cursor = "url(image/circle-cur.png) 0 16, auto";

    b0.style.background= "#00000000";
    b1.style.background= "#00000000";
    b2.style.background= "#00000000";
    b3.style.background= "#00000000";
    b4.style.background= "#00000000";
    b5.style.background= "#00000000";
    b6.style.background= "#00000000";
    b7.style.background= "#00000000";
    b8.style.background= "#00000000";
    b9.style.background= "#00000000";
    b10.style.background= "#00000000";
    b11.style.background= "#00000000";
    b12.style.background= "#00000000";
    b13.style.background= "#00000000";
    b14.style.background= "#00000000";
    b15.style.background= "#00000000";
    b16.style.background= "#00000000";

    b4.style.background= "#dddddd";
    mode=4;
});

const b5 =document.getElementById('b5');
b5.addEventListener('click', function(){
    canvas.style.cursor = "url(image/circle-fill-cur.png) 0 16, auto";

    b0.style.background= "#00000000";
    b1.style.background= "#00000000";
    b2.style.background= "#00000000";
    b3.style.background= "#00000000";
    b4.style.background= "#00000000";
    b5.style.background= "#00000000";
    b6.style.background= "#00000000";
    b7.style.background= "#00000000";
    b8.style.background= "#00000000";
    b9.style.background= "#00000000";
    b10.style.background= "#00000000";
    b11.style.background= "#00000000";
    b12.style.background= "#00000000";
    b13.style.background= "#00000000";
    b14.style.background= "#00000000";
    b15.style.background= "#00000000";
    b16.style.background= "#00000000";

    b5.style.background= "#dddddd";
    mode=5;
});

const b6 =document.getElementById('b6');
b6.addEventListener('click', function(){
    canvas.style.cursor = "url(image/rectangle-cur.png) 0 16, auto";

    b0.style.background= "#00000000";
    b1.style.background= "#00000000";
    b2.style.background= "#00000000";
    b3.style.background= "#00000000";
    b4.style.background= "#00000000";
    b5.style.background= "#00000000";
    b6.style.background= "#00000000";
    b7.style.background= "#00000000";
    b8.style.background= "#00000000";
    b9.style.background= "#00000000";
    b10.style.background= "#00000000";
    b11.style.background= "#00000000";
    b12.style.background= "#00000000";
    b13.style.background= "#00000000";
    b14.style.background= "#00000000";
    b15.style.background= "#00000000";
    b16.style.background= "#00000000";

    b6.style.background= "#dddddd";
    mode=6;
});

const b7 =document.getElementById('b7');
b7.addEventListener('click', function(){
    canvas.style.cursor = "url(image/rectangle-fill-cur.png) 0 16, auto";

    b0.style.background= "#00000000";
    b1.style.background= "#00000000";
    b2.style.background= "#00000000";
    b3.style.background= "#00000000";
    b4.style.background= "#00000000";
    b5.style.background= "#00000000";
    b6.style.background= "#00000000";
    b7.style.background= "#00000000";
    b8.style.background= "#00000000";
    b9.style.background= "#00000000";
    b10.style.background= "#00000000";
    b11.style.background= "#00000000";
    b12.style.background= "#00000000";
    b13.style.background= "#00000000";
    b14.style.background= "#00000000";
    b15.style.background= "#00000000";
    b16.style.background= "#00000000";

    b7.style.background= "#dddddd";
    mode=7;
});

const b8 =document.getElementById('b8');
b8.addEventListener('click', function(){
    canvas.style.cursor = "url(image/triangle-cur.png) 0 16, auto";

    b0.style.background= "#00000000";
    b1.style.background= "#00000000";
    b2.style.background= "#00000000";
    b3.style.background= "#00000000";
    b4.style.background= "#00000000";
    b5.style.background= "#00000000";
    b6.style.background= "#00000000";
    b7.style.background= "#00000000";
    b8.style.background= "#00000000";
    b9.style.background= "#00000000";
    b10.style.background= "#00000000";
    b11.style.background= "#00000000";
    b12.style.background= "#00000000";
    b13.style.background= "#00000000";
    b14.style.background= "#00000000";
    b15.style.background= "#00000000";
    b16.style.background= "#00000000";

    b8.style.background= "#dddddd";
    mode=8;
});

const b9 =document.getElementById('b9');
b9.addEventListener('click', function(){
    canvas.style.cursor = "url(image/triangle-fill-cur.png) 0 16, auto";

    b0.style.background= "#00000000";
    b1.style.background= "#00000000";
    b2.style.background= "#00000000";
    b3.style.background= "#00000000";
    b4.style.background= "#00000000";
    b5.style.background= "#00000000";
    b6.style.background= "#00000000";
    b7.style.background= "#00000000";
    b8.style.background= "#00000000";
    b9.style.background= "#00000000";
    b10.style.background= "#00000000";
    b11.style.background= "#00000000";
    b12.style.background= "#00000000";
    b13.style.background= "#00000000";
    b14.style.background= "#00000000";
    b15.style.background= "#00000000";
    b16.style.background= "#00000000";

    b9.style.background= "#dddddd";
    mode=9;
});

const b10 =document.getElementById('b10');
b10.addEventListener('click', function(){
    // canvas.style.cursor = "url(image/eraser-cur.png) 0 16, auto";

    b0.style.background= "#00000000";
    b1.style.background= "#00000000";
    b2.style.background= "#00000000";
    b3.style.background= "#00000000";
    b4.style.background= "#00000000";
    b5.style.background= "#00000000";
    b6.style.background= "#00000000";
    b7.style.background= "#00000000";
    b8.style.background= "#00000000";
    b9.style.background= "#00000000";
    b10.style.background= "#00000000";
    b11.style.background= "#00000000";
    b12.style.background= "#00000000";
    b13.style.background= "#00000000";
    b14.style.background= "#00000000";
    b15.style.background= "#00000000";
    b16.style.background= "#00000000";

    b10.style.background= "#dddddd";
    if (step > 0) {
        step--; //last step
        let pic = new Image();
        pic.src = history[step];
        pic.onload = function() {
            ctx.clearRect(0, 0, 800, 500);
            ctx.drawImage(pic, 0, 0);
        }
    }
    // mode=10;
});

const b11 =document.getElementById('b11');
b11.addEventListener('click', function(){
    // canvas.style.cursor = "url(image/eraser-cur.png) 0 16, auto";

    b0.style.background= "#00000000";
    b1.style.background= "#00000000";
    b2.style.background= "#00000000";
    b3.style.background= "#00000000";
    b4.style.background= "#00000000";
    b5.style.background= "#00000000";
    b6.style.background= "#00000000";
    b7.style.background= "#00000000";
    b8.style.background= "#00000000";
    b9.style.background= "#00000000";
    b10.style.background= "#00000000";
    b11.style.background= "#00000000";
    b12.style.background= "#00000000";
    b13.style.background= "#00000000";
    b14.style.background= "#00000000";
    b15.style.background= "#00000000";
    b16.style.background= "#00000000";

    b11.style.background= "#dddddd";
    if (step < history.length - 1) {
        step++; //next step
        let pic = new Image(); 
        pic.src = history[step]; 
        pic.onload = function() {
            ctx.clearRect(0, 0, 800, 500);
            ctx.drawImage(pic, 0, 0);
        }
    }
    // mode=11;
});

const b12 =document.getElementById('b12');
b12.addEventListener('click', function(){
    // canvas.style.cursor = "url(image/eraser-cur.png) 0 16, auto";

    b0.style.background= "#00000000";
    b1.style.background= "#00000000";
    b2.style.background= "#00000000";
    b3.style.background= "#00000000";
    b4.style.background= "#00000000";
    b5.style.background= "#00000000";
    b6.style.background= "#00000000";
    b7.style.background= "#00000000";
    b8.style.background= "#00000000";
    b9.style.background= "#00000000";
    b10.style.background= "#00000000";
    b11.style.background= "#00000000";
    b12.style.background= "#00000000";
    b13.style.background= "#00000000";
    b14.style.background= "#00000000";
    b15.style.background= "#00000000";
    b16.style.background= "#00000000";

    b12.style.background= "#dddddd";
    download();
    // mode=12;
});

function download(){
    var link = document.createElement('a');
    link.download = 'image.jpg';
    link.href = document.getElementById('canvas').toDataURL()
    link.click();
}

const b13 =document.getElementById('b13');
b13.addEventListener('click', function(){
    // canvas.style.cursor = "url(image/eraser-cur.png) 0 16, auto";

    b0.style.background= "#00000000";
    b1.style.background= "#00000000";
    b2.style.background= "#00000000";
    b3.style.background= "#00000000";
    b4.style.background= "#00000000";
    b5.style.background= "#00000000";
    b6.style.background= "#00000000";
    b7.style.background= "#00000000";
    b8.style.background= "#00000000";
    b9.style.background= "#00000000";
    b10.style.background= "#00000000";
    b11.style.background= "#00000000";
    b12.style.background= "#00000000";
    b13.style.background= "#00000000";
    b14.style.background= "#00000000";
    b15.style.background= "#00000000";
    b16.style.background= "#00000000";

    b13.style.background= "#dddddd";
    //fun_upl(this);
    //handleImage(event);
    // mode=13;
});

function upload(th) {
    var img = new Image();
    var file = th.files[0];
    var src = URL.createObjectURL(file);
    
    img.src = src;
    img.onload = function () {
        ctx.drawImage(img, 0, 0);
        URL.revokeObjectURL(src);

        save();
    }
}

function handleImage(e){
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img,0,0);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);     
}

const b14 =document.getElementById('b14');
b14.addEventListener('click', function(){
    canvas.style.cursor = "text";

    b0.style.background= "#00000000";
    b1.style.background= "#00000000";
    b2.style.background= "#00000000";
    b3.style.background= "#00000000";
    b4.style.background= "#00000000";
    b5.style.background= "#00000000";
    b6.style.background= "#00000000";
    b7.style.background= "#00000000";
    b8.style.background= "#00000000";
    b9.style.background= "#00000000";
    b10.style.background= "#00000000";
    b11.style.background= "#00000000";
    b12.style.background= "#00000000";
    b13.style.background= "#00000000";
    b14.style.background= "#00000000";
    b15.style.background= "#00000000";
    b16.style.background= "#00000000";

    b14.style.background= "#dddddd";
    mode=14;
});

const b15 =document.getElementById('b15');
b15.addEventListener('click', function(){
    canvas.style.cursor = "url(image/qu-cur.png) 0 16, auto";

    // for(var i=0;i<16;i++){
    //     var t = "b"+i;
    //     t.style.background= "#00000000";
    // }
    b0.style.background= "#00000000";
    b1.style.background= "#00000000";
    b2.style.background= "#00000000";
    b3.style.background= "#00000000";
    b4.style.background= "#00000000";
    b5.style.background= "#00000000";
    b6.style.background= "#00000000";
    b7.style.background= "#00000000";
    b8.style.background= "#00000000";
    b9.style.background= "#00000000";
    b10.style.background= "#00000000";
    b11.style.background= "#00000000";
    b12.style.background= "#00000000";
    b13.style.background= "#00000000";
    b14.style.background= "#00000000";
    b15.style.background= "#00000000";
    b16.style.background= "#00000000";

    b15.style.background= "#dddddd";
    mode=15;
});

const b16 =document.getElementById('b16');
b16.addEventListener('click', function(){
    canvas.style.cursor = "url(image/rainbow-cur.png) 0 16, auto";

    b0.style.background= "#00000000";
    b1.style.background= "#00000000";
    b2.style.background= "#00000000";
    b3.style.background= "#00000000";
    b4.style.background= "#00000000";
    b5.style.background= "#00000000";
    b6.style.background= "#00000000";
    b7.style.background= "#00000000";
    b8.style.background= "#00000000";
    b9.style.background= "#00000000";
    b10.style.background= "#00000000";
    b11.style.background= "#00000000";
    b12.style.background= "#00000000";
    b13.style.background= "#00000000";
    b14.style.background= "#00000000";
    b15.style.background= "#00000000";
    b16.style.background= "#00000000";

    b16.style.background= "#dddddd";
    mode=16;
});

const red=document.getElementById('red');
const green=document.getElementById('green');
const blue=document.getElementById('blue');
red.addEventListener('input', function(){
    var color = "RGB("+red.value+", "+green.value+", "+blue.value+")";
    ctx.strokeStyle = color;
});

green.addEventListener('input', function(){
    var color = "RGB("+red.value+", "+green.value+", "+blue.value+")";
    ctx.strokeStyle = color;
});

blue.addEventListener('input', function(){
    var color = "RGB("+red.value+", "+green.value+", "+blue.value+")";
    ctx.strokeStyle = color;
});

const thickness=document.getElementById('thickness');
thickness.addEventListener('input', function(){
    ctx.lineWidth = thickness.value/10;
});
// function resize(){
//     var thickness=getElementById("thickness");
//     ctx.lineWidth = thickness.val();
// }

const fontSize=document.getElementById('font-size');
const fontFace=document.getElementById('font-face');
fontSize.addEventListener('change', function(){
    var f = fontSize.value+"pt "+fontFace.value;
    ctx.font = f;
});
fontFace.addEventListener('change', function(){
    var f = fontSize.value+"pt "+fontFace.value;
    ctx.font = f;
});

function save() {
    step++;
    if (step < history.length) 
        history.length = step;
    history.push(canvas.toDataURL());
}

canvas.addEventListener('mousedown', function(event){
    if (step == -1)
        save();
    switch(mode){
        case 0:
            // [mouseX, mouseY] = [event.offsetX, event.offsetY];
            down = true;
        break;
        case 1:
            down = true;
        break;
        case 2:
            down = true;
            // ctx.beginPath();
            // ctx.moveTo(event.offsetX, event.offsetY);
            mouseX=event.offsetX;  //initial x
            mouseY=event.offsetY;  //initial y
            picsrc=canvas.toDataURL();
        break;
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            down = true;
            mouseX=event.offsetX;  //initial x
            mouseY=event.offsetY;  //initial y
            picsrc=canvas.toDataURL();
        break;
        case 14:
            var left = document.getElementById('left');
            var textarea = document.getElementById('textarea');
            if(textarea == null) { // create textarea
                ctx.globalCompositeOperation = "destination-out";  //
                // record text's position
                mouseX=event.offsetX;  //initial x
                mouseY=event.offsetY;  //initial y
                ctx.globalCompositeOperation = "source-over";  //
                var textarea = document.createElement('textarea');
                textarea.id = "textarea";
                // textarea.cols = "12";
                textarea.rows = "1";
                textarea.style.position = "fixed";
                textarea.style.left = event.clientX + "px";
                textarea.style.top = event.clientY + "px";
                left.appendChild(textarea);
            }
            else { // write on canvas
                // take font's value
                // var style = document.getElementById("font-style").value;
                // var size = document.getElementById("font-size").value;
                // context.font = size + "px " + style;

                // var textValue = textarea.value;
                left.removeChild(textarea);
                ctx.fillText(textarea.value, mouseX, mouseY);
                // ctx.fillText(textValue, 200, 200);   
            }
        break;
        case 15:  //transparent pencil
            down = true;
            ctx.beginPath();
            ctx.moveTo(event.offsetX, event.offsetY);
            mouseX=event.offsetX;  //initial x
            mouseY=event.offsetY;  //initial y
        break;
        case 16:
            down = true;
            normal=ctx.strokeStyle;
        break;
    }
});

canvas.addEventListener('mousemove', function(event){
    // if (step == -1)
    //     save();
    ctx.globalCompositeOperation = "source-over";
    switch(mode){
        case 0:
            // [last_mouseX, last_mouseY] = [mouseX, mouseY];
            // [mouseX, mouseY] = [event.offsetX, event.offsetY];
            // last_mouseX=mouseX;
            // last_mouseY=mouseY;
            // mouseX=event.offsetX;
            // mouseY=event.offsetY;
            // if(down) {
            //     ctx.beginPath();
            //     ctx.moveTo(last_mouseX, last_mouseY);
            //     ctx.lineTo(mouseX, mouseY);
            //     ctx.stroke();
            // }
            if(down) {
                ctx.beginPath();
                ctx.moveTo(mouseX, mouseY);
                ctx.lineTo(event.offsetX, event.offsetY);
                ctx.stroke();
            }
            mouseX=event.offsetX;
            mouseY=event.offsetY;
        break;
        case 1:
            if(down) {
                ctx.globalCompositeOperation = "destination-out";
                ctx.beginPath();
                ctx.moveTo(mouseX, mouseY);
                ctx.lineTo(event.offsetX, event.offsetY);
                ctx.stroke();
            }
            mouseX=event.offsetX;
            mouseY=event.offsetY;
            // if(down) {
            //     ctx.clearRect(event.offsetX, event.offsetY, ctx.lineWidth, ctx.lineWidth);
            // }
        break;
        case 2:
            if(down) {
                let pic = new Image();
                pic.src = picsrc;
                pic.onload = function() {

                ctx.clearRect(0, 0, 800, 500);  //clear whole pic
                ctx.drawImage(pic, 0, 0);

                ctx.beginPath();
                ctx.moveTo(mouseX, mouseY);
                ctx.lineTo(event.offsetX, event.offsetY);
                ctx.stroke();
                }
            }
        break;
        case 4:
            if(down) {
                let pic = new Image();
                pic.src = picsrc;
                pic.onload = function() {

                ctx.clearRect(0, 0, 800, 500);  //clear whole pic
                ctx.drawImage(pic, 0, 0);

                ctx.beginPath();
                ctx.arc(mouseX, mouseY, Math.sqrt((event.offsetX-mouseX)**2+(event.offsetY-mouseY)**2), 0, 2 * Math.PI);
                ctx.stroke();
                }
            }
        break;
        case 5:
            if(down) {
                let pic = new Image();
                pic.src = picsrc;
                pic.onload = function() {

                ctx.clearRect(0, 0, 800, 500);  //clear whole pic
                ctx.drawImage(pic, 0, 0);

                ctx.beginPath();
                ctx.arc(mouseX, mouseY, Math.sqrt((event.offsetX-mouseX)**2+(event.offsetY-mouseY)**2), 0, 2 * Math.PI);
                ctx.fill();
                }
            }
        break;
        case 6:
            if(down) {
                let pic = new Image();
                pic.src = picsrc;
                pic.onload = function() {

                ctx.clearRect(0, 0, 800, 500);  //clear whole pic
                ctx.drawImage(pic, 0, 0);

                ctx.beginPath();
                ctx.roundRect(mouseX, mouseY, event.offsetX-mouseX, event.offsetY-mouseY, 5);
                ctx.stroke();
                }
            }
        break;
        case 7:
            if(down) {
                let pic = new Image();
                pic.src = picsrc;
                pic.onload = function() {

                ctx.clearRect(0, 0, 800, 500);  //clear whole pic
                ctx.drawImage(pic, 0, 0);

                ctx.beginPath();
                ctx.roundRect(mouseX, mouseY, event.offsetX-mouseX, event.offsetY-mouseY, 5);
                ctx.fill();
                }
            }
        break;
        case 8:
            if(down) {
                let pic = new Image();
                pic.src = picsrc;
                pic.onload = function() {

                ctx.clearRect(0, 0, 800, 500);  //clear whole pic
                ctx.drawImage(pic, 0, 0);

                ctx.beginPath();
                ctx.moveTo(mouseX, mouseY);
                ctx.lineTo(mouseX+(event.offsetX-mouseX)*0.5, event.offsetY);
                ctx.lineTo(event.offsetX, mouseY);
                ctx.lineTo(mouseX, mouseY);
                ctx.stroke();
                }
            }
        break;
        case 9:
            if(down) {
                let pic = new Image();
                pic.src = picsrc;
                pic.onload = function() {

                ctx.clearRect(0, 0, 800, 500);  //clear whole pic
                ctx.drawImage(pic, 0, 0);

                ctx.beginPath();
                ctx.moveTo(mouseX, mouseY);
                ctx.lineTo(mouseX+(event.offsetX-mouseX)*0.5, event.offsetY);
                ctx.lineTo(event.offsetX, mouseY);
                ctx.lineTo(mouseX, mouseY);
                ctx.fill();
                }
            }
        break;
        case 15:
            if(down) {
                ctx.lineTo(event.offsetX, event.offsetY);
            }
        break;
        case 16:
            if(down) {
                ctx.beginPath();
                ctx.moveTo(mouseX, mouseY);
                ctx.lineTo(event.offsetX, event.offsetY);
                ctx.strokeStyle = `hsl(${hue},100%,50%)`;
                hue = (hue < 360) ? hue+2 : 0 ;
                ctx.stroke();
            }
            mouseX=event.offsetX;
            mouseY=event.offsetY;
        break;
    }
});

canvas.addEventListener('mouseup', function(event){
    switch(mode){
        case 0:  //deal with no movement case
            ctx.beginPath();
            ctx.moveTo(event.offsetX, event.offsetY);
            ctx.lineTo(event.offsetX, event.offsetY);
            ctx.stroke();
            //save();
        break;
        case 1:
            ctx.beginPath();
            ctx.moveTo(event.offsetX, event.offsetY);
            ctx.lineTo(event.offsetX, event.offsetY);
            ctx.stroke();
            ctx.globalCompositeOperation = "source-over";
        break;
        case 2:
            ctx.beginPath();
            ctx.moveTo(event.offsetX, event.offsetY);
            ctx.lineTo(event.offsetX, event.offsetY);
            ctx.stroke();
        break;
        case 15:
            ctx.stroke();
        break;
        case 16:
            ctx.strokeStyle=normal;
        break;
    }
    save();
    down = false;
    ctx.globalCompositeOperation = "source-over";
});