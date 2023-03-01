//what does home button do?


const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded',(e) => {
   setTimeout(()=>{
       splash.classList.add('display-none');
   },1000);
})



//function to decide dayafter current day
function daygiver(daynum){
   let daynums = daynum%7;
   let dayarray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   return(dayarray[daynums]);
}


//location traking for user
let userlatitude = 0;
let userlongitude = 0;

function getPosition() {
 
   var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError);
 
   function onSuccess(position) {
      userlatitude = position.coords.latitude;
      userlongitude = position.coords.longitude;
      
      document.getElementById("long-box").innerHTML ="Long- " + userlongitude.toFixed(2);
      document.getElementById("lat-box").innerHTML ="Lat- "+ userlatitude.toFixed(2);
      $.getJSON("https://api.weatherapi.com/v1/forecast.json?key=e4c52729735f4ab4a4b123828220601&q=" + userlatitude.toFixed(4) +"," + userlongitude.toFixed(4) +  "&days=3&aqi=no&alerts=no", function(data) {
      // JSON result in `data` variable
      console.log(data);
      document.getElementById("current-temp-main").innerHTML = data.current.temp_c.toFixed(0) + "°";
      document.getElementById("curr-day-temp-status-box").innerHTML = data.current.condition.text;
      document.getElementById("wind-speed").innerHTML = data.current.wind_kph;
      document.getElementById("wind-direction").innerHTML = data.current.wind_dir;
      document.getElementById("uv-index").innerHTML = data.current.uv;
      document.getElementById("current-humidity").innerHTML = data.current.humidity + "%";
      document.getElementById("high-temp").innerHTML = data.forecast.forecastday[0].day.maxtemp_c.toFixed(0) + '°';
      document.getElementById("low-temp").innerHTML = data.forecast.forecastday[0].day.mintemp_c.toFixed(0) + '°';
      document.getElementById("feelslike").innerHTML = data.current.feelslike_c.toFixed(0) + '°';
      document.getElementById("current-cloud").innerHTML = data.current.cloud + "%";
      document.getElementById("am-6").innerHTML = data.forecast.forecastday[0].hour[6].temp_c.toFixed(0) + '°';
      document.getElementById("am-9").innerHTML = data.forecast.forecastday[0].hour[9].temp_c.toFixed(0) + '°';
      document.getElementById("pm-12").innerHTML = data.forecast.forecastday[0].hour[12].temp_c.toFixed(0) + '°';
      document.getElementById("pm-3").innerHTML = data.forecast.forecastday[0].hour[15].temp_c.toFixed(0) + '°';
      document.getElementById("pm-6").innerHTML = data.forecast.forecastday[0].hour[18].temp_c.toFixed(0) + '°';
      document.getElementById("pm-9").innerHTML = data.forecast.forecastday[0].hour[21].temp_c.toFixed(0) + '°';
      document.getElementById("am-12").innerHTML = data.forecast.forecastday[0].hour[23].temp_c.toFixed(0) + '°';
      document.getElementById("city-box").innerHTML = data.location.name+", "+ data.location.region;
      document.getElementById("curret-weather-img").src= data.current.condition.icon;
      const days = new Date();
      let dayss = days.getDay();
      document.getElementById("day-1-name").innerHTML = daygiver(dayss+1);
      document.getElementById("day-2-name").innerHTML = daygiver(dayss+2);
      

      document.getElementById("day-1-high").innerHTML = data.forecast.forecastday[1].day.maxtemp_c.toFixed(0) + '°'  ;
      document.getElementById("day-2-high").innerHTML = data.forecast.forecastday[2].day.maxtemp_c.toFixed(0) + '°'  ;
      document.getElementById("day-1-down").innerHTML = data.forecast.forecastday[1].day.mintemp_c.toFixed(0) + '°' ;
      document.getElementById("day-2-down").innerHTML = data.forecast.forecastday[2].day.mintemp_c.toFixed(0) + '°' ;
      document.getElementById("day-1-img").src= data.forecast.forecastday[1].day.condition.icon;
      document.getElementById("day-2-img").src= data.forecast.forecastday[2].day.condition.icon;

      });


   };
   
   function onError(error) {
      alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n' + "Please allow gelocation access to get weather information.");
   }
}





//weather josn is dilerverd here



//svg watch

const textElement = document.getElementById("text");
const hoursElement = document.getElementById("hour_hand");
const minutesElement = document.getElementById("minute_hand");
const secondsElement = document.getElementById("second_hand");

let showDate = true;

function animate() {
  const date = new Date();

  const day = date.getDate();
  const ampm = date.getHours() >= 12 ? "PM" : "AM";
  const hour = date.getHours() + date.getMinutes() / 60;
  const minute = date.getMinutes() + date.getSeconds() / 60;
  const second = date.getSeconds() + date.getMilliseconds() / 1000;

  textElement.textContent = showDate ? day : ampm;
  hoursElement.setAttribute("transform", `rotate(${(360 / 12) * hour})`);
  minutesElement.setAttribute("transform", `rotate(${(360 / 60) * minute})`);
  secondsElement.setAttribute("transform", `rotate(${(360 / 60) * second})`);

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

textElement.addEventListener("click", () => {
  showDate = !showDate;
});

document.querySelector("svg").style.display = "block";



//end svg watch



//mintus are decided here
const mins = new Date();
let minss = mins.getMinutes();playAudio
if(minss<10){
   document.getElementById("current-minutes").innerHTML = "0" + mins.getMinutes();
}else{playAudio
   document.getElementById("current-minutes").innerHTML = mins.getMinutes();

}
//hours are decided here
const hours = new Date();
let hourss = hours.getHours();
if(hourss < 10){
   document.getElementById("current-hour").innerHTML = 0 + hours.getHours();
}else if(hourss-12 >= 10){
   document.getElementById("current-hour").innerHTML = hours.getHours() - 12;
}else if(hourss > 12){
   document.getElementById("current-hour").innerHTML ="0" + (hours.getHours() - 12);
}else{
   document.getElementById("current-hour").innerHTML = hours.getHours();
}
//day is decided here
const days = new Date();
let dayss = mins.getDay();
if(dayss == 0){
   document.getElementById("day-weekly").innerHTML = "Sunday";
}else if(dayss == 1){
   document.getElementById("day-weekly").innerHTML = "Monday";
}else if(dayss == 2){
   document.getElementById("day-weekly").innerHTML = "Tuesday";
}else if(dayss == 3){
   document.getElementById("day-weekly").innerHTML = "Wednesday";
}else if(dayss == 4){
   document.getElementById("day-weekly").innerHTML = "Thursday";
}else if(dayss == 5){
   document.getElementById("day-weekly").innerHTML = "Friday";
}else if(dayss == 6){
   document.getElementById("day-weekly").innerHTML = "Saturday";
}

//date is decided here
const dates = new Date();
let datess = dates.getDate();
if(datess < 10){
   document.getElementById("date-monthly").innerHTML = "0" + datess;
}else{
   document.getElementById("date-monthly").innerHTML = datess;
}

//Months are decided here
const months = new Date();
let montss = months.getMonth();
if(montss == 0){
   document.getElementById("month-yearly").innerHTML = "January";
}else if(montss == 1){
   document.getElementById("month-yearly").innerHTML = "February";
}else if(montss == 2){
   document.getElementById("month-yearly").innerHTML = "March";
}else if(montss == 3){
   document.getElementById("month-yearly").innerHTML = "April";
}else if(montss == 4){
   document.getElementById("month-yearly").innerHTML = "May";
}else if(montss == 5){
   document.getElementById("month-yearly").innerHTML = "June";
}else if(montss == 6){
   document.getElementById("month-yearly").innerHTML = "July";
}else if(montss == 7){
   document.getElementById("month-yearly").innerHTML = "August";
}else if(montss == 8){playAudio
   document.getElementById("month-yearly").innerHTML = "September";
}else if(montss == 9){
   document.getElementById("month-yearly").innerHTML = "October";
}else if(montss == 10){
   document.getElementById("month-yearly").innerHTML = "November";
}else if(montss == 11){
   document.getElementById("month-yearly").innerHTML = "December";
}

//year is decided here
const years = new Date();
let yearss = years.getFullYear();
document.getElementById("year").innerHTML = yearss;

// opening data base variable for todo application
var createStatement = "CREATE TABLE IF NOT EXISTS Contacts (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT)";
var selectAllStatement = "SELECT * FROM Contacts";
var insertStatement = "INSERT INTO Contacts (username) VALUES (?)";
var updateStatement = "UPDATE Contacts SET username = ? WHERE id=?";
var deleteStatement = "DELETE FROM Contacts WHERE id=?";
var dropStatement = "DROP TABLE Contacts";
var db = openDatabase("AddressBook", "1.0", "Address Book", 200000);  // Open SQLite Database
var dataset;
var DataType;
 
function initDatabase()  // Function Call When Page is ready.
{
  try {
        if (!window.openDatabase)  // Check browser is supported SQLite or not.
        {
            alert('Databases are not supported in this browser.');
        }
        else {
            createTable();  // If supported then call Function for create table in SQLite
        }
    }
    catch (e) {
        if (e == 2) {
            // Version number mismatch. 
            console.log("Invalid database version.");
        } else {
            console.log("Unknown error " + e + ".");
        }
        return;
    }
}
 
function createTable()  // Function for Create Table in SQLite.
{
    db.transaction(function (tx) { tx.executeSql(createStatement, [], showRecords, onError); });
}

function insertRecord() // Get value from Input and insert record . Function Call when Save/Submit Button Click..
{
        var usernametemp = $('input:text[id=todoinput]').val();
        db.transaction(function (tx) { tx.executeSql(insertStatement, [usernametemp], loadAndReset, onError); });
        //tx.executeSql(SQL Query Statement,[ Parameters ] , Sucess Result Handler Function, Error Result Handler Function );
        document.getElementById("todoinput").value = ''
}
 
function deleteRecord(id) // Get id of record . Function Call when Delete Button Click..
 
{
 
    var iddelete = id.toString();
 
    db.transaction(function (tx) { tx.executeSql(deleteStatement, [id], showRecords, onError);  });
   
    resetForm();
    playAudio();
    vibratephone();
}
 
function updateRecord() // Get id of record . Function Call when Delete Button Click..
 
{
 
    var usernameupdate = $('input:text[id=username]').val().toString();
 
    var useridupdate = $("#id").val();
 
    db.transaction(function (tx) { tx.executeSql(updateStatement, [usernameupdate, Number(useridupdate)], loadAndReset, onError); });
 
}
 
function dropTable() // Function Call when Drop Button Click.. Talbe will be dropped from database.
 
{
 
    db.transaction(function (tx) { tx.executeSql(dropStatement, [], showRecords, onError); });
 
    resetForm();
 
    initDatabase();
 
}
 
function loadRecord(i) // Function for display records which are retrived from database.
 
{
 
    var item = dataset.item(i);
 
    $("#username").val((item['username']).toString());
 
    $("#id").val((item['id']).toString());
 
}
 
function resetForm() // Function for reset form input values.
 
{
 
    $("#username").val("");
 
    $("#id").val("");

 
}
 
function loadAndReset() //Function for Load and Reset...
 
{
    resetForm();
    showRecords()
    
}
 
function onError(tx, error) // Function for Hendeling Error...
 
{
 
    alert(error.message);
 
}
 
function showRecords() // Function For Retrive data from Database Display records as list
{
    $("#results").html('')
 
    db.transaction(function (tx) {
 
        tx.executeSql(selectAllStatement, [], function (tx, result) {
 
            dataset = result.rows;
 
            for (var i = 0, item = null; i < dataset.length; i++) {
 
                item = dataset.item(i);
 
                var linkeditdelete = '<li>' + item['username'] +   '    ' +
 
                '<a href="#" onclick="deleteRecord(' + item['id'] + ');">✓</a></li>';
 
                $("#results").append(linkeditdelete);
            }
        });
    });
   window.scrollTo(0,document.body.scrollHeight);
}
 
$(document).ready(function () // Call function when page is ready for load..
{

   
    $("body").fadeIn(2000); // Fede In Effect when Page Load..
    document.getElementById("home-button").addEventListener("click",getPosition());
      getPosition();
    initDatabase();
 
    $("#todo-submit-button").click(insertRecord);  // Register Event Listener when button click.
    
});
 
//code for playing music for todo
var myMedia = null;
function playAudio() {
  
   var audio1 = document.getElementById('beep');
   audio1.play();
}

//for vibrating phone on task complition


function vibratephone() {
   navigator.vibrate(200);
 }