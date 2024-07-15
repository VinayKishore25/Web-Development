var data = {
    first : "",
    second : "",
    dob:"",
    age:0,
    father:"",
    mother:"",
    address:"",
    certificate:[],
    academics : {
        ssc:[],
        inter:[],
        btech:[]
    },
    skills:"",
    hobbies:"",
    badges:"",
    desc:""
}
function FirstName(event)
{
    data.first = event.target.value;
}
function SecondName(event)
{
    data.second = event.target.value;
}
function Date_of_Birth(event)
{
    data.dob = event.target.value;
}
function age(event)
{
    data.age = event.target.value;
}
function Father_Name(event)
{
    data.father = event.target.value;
}
function Mother_Name(event)
{
    data.mother = event.target.value;
}
function Address(event)
{
    data.address = event.target.value;
}
function add_certificate(event)
{
    data.certificate.push(event.target.value)
}
function add_ssc(event)
{
    data.academics.ssc.push(event.target.value)
}
function add_inter(event)
{
    data.academics.inter.push(event.target.value)
}
function add_btech(event)
{
    data.academics.btech.push(event.target.value)
}
function add_skills(event)
{
    data.skills = event.target.value;
}
function add_hobbies(event)
{
    data.hobbies = event.target.value;
}
function add_badges(event)
{
    data.badges = event.target.value;
}
function add_desc(event)
{
    data.desc = event.target.value;
}
function get_submit(event)
{    
    event.preventDefault();
    console.log(data);
}