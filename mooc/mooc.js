let timer=null;
let index=0;
let pics=document.getElementsByClassName("main_content1_picture");
let buttons=document.getElementsByClassName("button");
let main_content1=document.getElementById("main_content1")
let arrow1=document.getElementById("arrow1")
let arrow2=document.getElementById("arrow2")

function a(){
    main_content1.onmouseover= function(){stopAutoPlay();}
    main_content1.onmouseout=function(){
        startAutoPlay();
    }
    for(let i=0;i<6;i++){
        buttons[i].id=i;
        buttons[i].onclick=function(){
            index=this.id;
            changeimg();
        }
    }
    arrow1.onclick=function(){
        if(index===0){
            index=5;
        }
        else{
             index--;
        }
        changeimg();
    }
    arrow2.onclick=function(){
        if(index===5){
            index=0;
        }
        else{
             index++;
        }
        changeimg();
    }
}

function startAutoPlay(){
    timer = setInterval(function(){
        index++;
        if(index>5){
            index = 0;
        }
        changeimg();
    },1500);
}

function changeimg(){
    for(let i=0;i<6;i++){
        buttons[i].style.background="none";
        pics[i].style.display="none";
    }
    buttons[index].style.background="grey";
    pics[index].style.display="block";
}

function stopAutoPlay(){
    if (timer){
        clearInterval(timer);
    }
}
a();