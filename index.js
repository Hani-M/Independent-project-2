var century, year, month, dayofthemonth, dayoftheweek, day;
//get input
function getInput(){
  century = parseInt(document.getElementById("century").value);
  year =  parseInt(document.getElementById("century").value);
  month = parseInt(document.getElementById("century").value);
  dayofthemonth = parseInt(document.getElementById("century").value);

}

// calculate function
function calculateDay(){
  getInput();
  dayoftheweek = ((((century/4) -2^century-1) +((5^year/4)) +
((26^(month+1)/10)) +dayofthemonth) % 7) -1;
return (Math,floor(dayoftheweek));
}

// main caller function
function checkDayoftheweek(){
  day = calculateDay();
}

//arrays
let dayoftheweek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
let maleNames = ["kwasi", "kwadwo","kwadwo", "kwabena", "kwaku", "yaw", "kofi", "kwamme"]
let femaleNames = ["akosua", "adwoa", "abenaa", "akua", "yaa", "afua", "ama"]

//get selected radio button 

function checkGender(){ 
var gen = document.getElementsByName("gender1");
if (gen[0].checked == true){
var gender = "male";
document.getElementById ("result").innerHTML = `you were born on a $[dayoftheweek[day]) and your akan name is $(maleNames[day])`}
else if (gen[0].checked == true) {
  var gender = "female";
  document.getElementById ("result").innerHTML = `you were born on a $[dayoftheweek[day]) and your akan name is $(femaleNames[day])`}
  else{
    document.getElementById ("result").innerHTML = `send results`}
}

