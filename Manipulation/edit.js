
    

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
    textbox.style.borderColor= color;
    textbox.style.borderWidth= width;
    textbox.style.backgroundColor= brcolor;
}

