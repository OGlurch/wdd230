const date1 = new Date();
const year = date1.getFullYear();
document.getElementById("currentyear").textContent = year;

const date2 = document.querySelector('#currentdate');

try {
  const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
  date2.textContent = new Date().toLocaleDateString('en-UK', options);
} catch (e) {
  alert('Error with code or your browser does not support Locale');
}

const date3 = document.querySelector('#updated');

try {
  const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
  date3.textContent = new Date().toLocaleDateString('en-UK', options);
} catch (e) {
  alert('Error with code or your browser does not support Locale');
}
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;


function setActive() {
  aObj = document.getElementById('nav').getElementsByTagName('a');
  for(i=0;i<aObj.length;i++) { 
    if(document.location.href.indexOf(aObj[i].href)>=0) {
      aObj[i].className='active';
    }
  }
}

window.onload = setActive;

var temp= document.getElementById("higher").textContent;
var wSpeed= document.getElementById("wind").textContent;
var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

var windChill= Math.round(windChill);
document.getElementById("wind_chill").innerHTML= windChill;

document.querySelector('#headerDate').innerHTML = weekDays[now.getDay()]+", "
                                                          +months[now.getMonth()]+" "
                                                          +now.getDate()+", "
                                                          +now.getFullYear()

                                                          weekDays = now.getDay();

                                                          let message;
                                                          
                                                          if (weekDays == 1 || weekDays == 2) {
                                                              message = ' Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
                                                          } else {
                                                              message = 'Nothing for today.';
                                                          }
                                                          document.querySelector("#banner").innerHTML = message
