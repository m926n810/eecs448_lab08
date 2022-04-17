
    

function submit(){
    let red = document.getElementById('red').value;
    let green = document.getElementById('green').value;
    let blue = document.getElementById('blue').value;
    let width = document.getElementById('width').value;
    let brred = document.getElementById('brred').value;
    let brgreen = document.getElementById('brgreen').value;
    let brblue = document.getElementById('brblue').value;
    let textbox = document.getElementById("txtbx")
    let color = "rgb("+red+","+green+","+blue+")";
    let brcolor = "rgb("+brred+","+brgreen+","+brblue+")";
    if(red<0 || red>255 ||green<0 || green>255 ||blue<0 || blue>255 ||
        brred<0 || brred>255 ||brgreen<0 || brgreen>255 ||brblue<0 || brblue>255)
        {
            alert("One of the color value is out of rgb range 0-255");
            return;
        }
    if(!width.includes("px")) width+="px";
    textbox.style.borderColor= color;
    textbox.style.borderWidth= width;
    textbox.style.backgroundColor= brcolor;
}

