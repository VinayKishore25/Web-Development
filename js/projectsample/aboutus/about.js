// var jyo = false;
var ic = document.getElementById("iframe");
var ico =document.getElementById("crossmark");
fun=()=>{
    // if(jyo===false){
        
        var ic = document.getElementById("iframe");
        ic.style.display="none";
        var sb=document.getElementById("sidebar");
        sb.style.opacity="1";
        sb.style.width="300px";
        sb.style.transition="all 0.5s ease";
        var nb=document.getElementById("navbar");
        nb.style.opacity="1";
        nb.style.width="300px";
        nb.style.transition="all 0.5s ease";
        ico.style.display="block";
}
jyo1=()=>{
        var ico =document.getElementById("crossmark");
        ico.style.display="none";
        var sb=document.getElementById("sidebar");
        sb.style.opacity="0";
        sb.style.width="0px";
        sb.style.transition="all 0.5s ease";
        var nb=document.getElementById("navbar");
        nb.style.opacity="0";
        nb.style.width="0px";
        nb.style.transition="all 0.5s ease";
        ic.style.display="block";
}
Vinay=()=>{
    let img = document.getElementById("leftimage");
    img.style.opacity = '0';
    img.style.transition = 'all 0.5s ease';
    setTimeout(() => {
        let img = document.getElementById("leftimage");
        img.style.opacity = '1';
        img.style.transition = 'all 0.5s ease';
        img.src = "../Assests/vinay.jpg";
        let md = document.getElementById("memberdesignation");
        md.innerHTML="Team Lead";
        md.style.transition = 'all 0.5s ease';
        var n = document.getElementById("name");
        n.innerHTML="Name : Vinay";
        md.style.transition = 'all 0.5s ease';
    }, 500);
}
Mounika=()=>{
    let img = document.getElementById("leftimage");
    img.style.opacity = '0';
    img.style.transition = 'all 0.5s ease';
    setTimeout(() => {
        let img = document.getElementById("leftimage");
        img.style.opacity = '1';
        img.style.transition = 'all 0.5s ease';
        img.src = "../Assests/mounika.jpg";
        let md = document.getElementById("memberdesignation");
        md.innerHTML="Team Member";
        md.style.transition = 'all 0.5s ease';
        var n = document.getElementById("name");
        n.innerHTML="Name : P.Mounika Devi";
        md.style.transition = 'all 0.5s ease';
    }, 500);
}
Praveen=()=>{
    let img = document.getElementById("leftimage");
    img.style.opacity = '0';
    img.style.transition = 'all 0.5s ease';
    setTimeout(() => {
        let img = document.getElementById("leftimage");
        img.style.opacity = '1';
        img.style.transition = 'all 0.5s ease';
        img.src = "../Assests/praveen.png";
        let md = document.getElementById("memberdesignation");
        md.innerHTML="Team Lead";
        md.style.transition = 'all 0.5s ease';
        var n = document.getElementById("name");
        n.innerHTML="Name : Praveen";
        md.style.transition = 'all 0.5s ease';
    }, 500);
}
Supriya=()=>{
    let img = document.getElementById("leftimage");
    img.style.opacity = '0';
    img.style.transition = 'all 0.5s ease';
    setTimeout(() => {
        let img = document.getElementById("leftimage");
        img.style.opacity = '1';
        img.style.transition = 'all 0.5s ease';
        img.src = "../Assests/logo.png";
        let md = document.getElementById("memberdesignation");
        md.innerHTML="Team Lead";
        md.style.transition = 'all 0.5s ease';
        var n = document.getElementById("name");
        n.innerHTML="Name : Supriya";
        md.style.transition = 'all 0.5s ease';
    }, 500);
}

Venkatateja=()=>{
    let img = document.getElementById("leftimage");
    img.style.opacity = '0';
    img.style.transition = 'all 0.5s ease';
    setTimeout(() => {
        let img = document.getElementById("leftimage");
        img.style.opacity = '1';
        img.style.transition = 'all 0.5s ease';
        img.src = "../Assests/teja.png";
        let md = document.getElementById("memberdesignation");
        md.innerHTML="Team Member";
        md.style.transition = 'all 0.5s ease';
        var n = document.getElementById("name");
        n.innerHTML="Name : K.Naga Venkata Teja";
        md.style.transition = 'all 0.5s ease';
        let about = document.getElementById("matter");
        about.innerHTML="I thrive in dynamic environments and enjoy working collaboratively with my team to create seamless user experiences. When I am not coding, I love exploring new technologies and staying up-to-date with  industry trends."
    }, 500);
}

Jyothi=()=>{
    let img = document.getElementById("leftimage");
    img.style.opacity = '0';
    img.style.transition = 'all 0.5s ease';
    setTimeout(() => {
        let img = document.getElementById("leftimage");
        img.style.opacity = '1';
        img.style.transition = 'all 0.5s ease';
        img.src = "../Assests/jyo.jpg";
        let md = document.getElementById("memberdesignation");
        md.innerHTML="Team Member";
        md.style.transition = 'all 0.5s ease';
        var n = document.getElementById("name");
        n.innerHTML="Name : M.Jyothi Swaroopa";
        md.style.transition = 'all 0.5s ease';
        let about = document.getElementById("matter");
        about.innerHTML="I thrive in dynamic environments and enjoy working collaboratively with my team to create seamless user experiences. When I am not coding, I love exploring new technologies and staying up-to-date with  industry trends."
    }, 500);
}
//navbar
