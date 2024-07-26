function showOverview(){
    let overview = document.getElementById('overview');
    let resumeSamples = document.getElementById('resumeSamples');
    let showCompany = document.getElementById("showCompanies");
    let reviews = document.getElementById("reviews");
    reviews.style.display = "none";
    overview.style.display = "flex";
    showCompany.style.display = "none";
    resumeSamples.style.display = "none";
}
function showResumeSample(){
    let overview = document.getElementById('overview');
    let resumeSamples = document.getElementById('resumeSamples');
    let showCompany = document.getElementById("showCompanies");
    let reviews = document.getElementById("reviews");
    reviews.style.display = "none";
    resumeSamples.style.display = "flex";
    overview.style.display = "none";
    showCompany.style.display = "none";

}
function showCompanies(){
    let overview = document.getElementById('overview');
    let resumeSamples = document.getElementById('resumeSamples');
    let showCompany = document.getElementById("showCompanies");
    let reviews = document.getElementById("reviews");
    reviews.style.display = "none";
    showCompany.style.display = "flex";
    resumeSamples.style.display = "none";
    overview.style.display = "none";
}
function showReviews(){
    let reviews = document.getElementById("reviews");
    reviews.style.display = "flex";
    let overview = document.getElementById('overview');
    let resumeSamples = document.getElementById('resumeSamples');
    let showCompany = document.getElementById("showCompanies");
    showCompany.style.display = "none";
    resumeSamples.style.display = "none";
    overview.style.display = "none";


}