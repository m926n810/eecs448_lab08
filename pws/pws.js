function validate(){
    var fstpw = document.getElementById("1stpw").value;
    var sndpw = document.getElementById("2ndpw").value;
    if(fstpw.length < 8 || sndpw.length < 8) alert("The passwords are not at least 8 characters long!");
    else if (fstpw!=sndpw) alert("The passwords entered don't match!");
    else alert("The passwords entered match!!");
}