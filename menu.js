function dropdown(){
    if (document.getElementById("menu-drop").style.visibility == "hidden"){
        document.getElementById("menu-drop").style.visibility="visible"
        document.getElementById("title").style.marginTop="50px"
    }else{
        document.getElementById("menu-drop").style.visibility="hidden"
        document.getElementById("title").style.marginTop="-50px"
    }
}