document.addEventListener('DOMContentLoaded', function () {
    let res = JSON.parse(localStorage.getItem('formData'));
    let nameAddress = document.getElementById("name");
    nameAddress.innerHTML = res[0];
});