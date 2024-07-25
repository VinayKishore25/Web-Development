var jyo = false;
fun=()=>{
    if(jyo===false){
        jyo=true;
        var sb=document.getElementById("sidebar");
        sb.style.opacity="1";
        sb.style.width="300px";
        sb.style.transition="all 0.5s ease";
        var nb=document.getElementById("navbar");
        nb.style.opacity="1";
        nb.style.width="300px";
        nb.style.transition="all 0.5s ease";
    }
    else{
        jyo=false;
        var sb=document.getElementById("sidebar");
        sb.style.opacity="0";
        sb.style.width="0px";
        sb.style.transition="all 0.5s ease";
        var nb=document.getElementById("navbar");
        nb.style.opacity="0";
        nb.style.width="0px";
        nb.style.transition="all 0.5s ease";
    }
}