function alertbox() {
    alert ("Welcome to my Website");
}
function mainheading() {
    
    if(document.getElementById('main').style.color == "yellow") {
        document.getElementById('main').style.color = "green";
        document.getElementById('tvshow').innerHTML = "Play now";
    }
    else {
        document.getElementById('main').style.color = "yellow";
        document.getElementById('tvshow').innerHTML = "Its here";
    }
    setTimeout(mainheading, 1000);
}
mainheading();