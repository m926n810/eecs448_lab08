let slide = document.getElementsByClassName("slides");
let currentslide=0;
for (let i = 0; i<slide.length;i++) {
    slide[i].style.display="";
    if(i!=currentslide)slide[i].style.display="none";
}

function wraphandler(){
    if(currentslide<0) currentslide = slide.length-1;
    if(currentslide>=slide.length) currentslide = 0;
}

function Next(){
    currentslide++;
    slideshow();
}

function Previous(){
    currentslide--;
    slideshow();
}

function slideshow(){
    wraphandler();
    for (let i = 0; i<slide.length;i++) {
        slide[i].style.display="";
        if(i!=currentslide)slide[i].style.display="none";
    }
}