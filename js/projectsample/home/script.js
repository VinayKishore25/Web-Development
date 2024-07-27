var overview = document.getElementById('overview');
var resumeSamples = document.getElementById('resumeSamples');
var showCompany = document.getElementById("showCompanies");
var reviews = document.getElementById("reviews");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");

function showOverview(){
    reviews.style.display = "none";
    overview.style.display = "flex";
    showCompany.style.display = "none";
    resumeSamples.style.display = "none";
    
    button2.style.backgroundColor = "#052352";
    button1.style.backgroundColor = "#143E8A";
    button4.style.backgroundColor = "#052352";
    button3.style.backgroundColor = "#052352";
}
function showResumeSample(){
    
    reviews.style.display = "none";
    resumeSamples.style.display = "flex";
    overview.style.display = "none";
    showCompany.style.display = "none";

    button3.style.backgroundColor = "#052352";
    button1.style.backgroundColor = "#052352";
    button4.style.backgroundColor = "#052352";
    button2.style.backgroundColor = "#143E8A";

}
function showCompanies(){
    reviews.style.display = "none";
    showCompany.style.display = "flex";
    resumeSamples.style.display = "none";
    overview.style.display = "none";

    button2.style.backgroundColor = "#052352";
    button1.style.backgroundColor = "#052352";
    button3.style.backgroundColor = "#143E8A";
    button4.style.backgroundColor = "#052352";
}
function showReviews(){
    reviews.style.display = "flex";
    showCompany.style.display = "none";
    resumeSamples.style.display = "none";
    overview.style.display = "none";

    button4.style.backgroundColor = "#143E8A";
    button2.style.backgroundColor = "#052352";
    button3.style.backgroundColor = "#052352";
    button1.style.backgroundColor = "#052352";


}