   let alarmSound = new Audio("ALL HTML/alarm.mp3");
   alarmSound.loop = true;
   let myExTime = null;
   let alarmTriggered = false;

   setInterval(mySetAlarm, 1000)

   function mySetAlarm(){
   let time = new Date();
   let hour = time.getHours()
   let minutes = time.getMinutes()
   let seconds = time.getSeconds()

   const myFormatted = 
   hour.toString().padStart(2, "0") +":" +
   minutes.toString().padStart(2, "0") +":" +
   seconds.toString().padStart(2, "0");

   document.querySelector('.js-clock-container').innerText = myFormatted;



   if (hour < 12 || hour === 24 ){
   document.querySelector('.am').style.opacity = 1;
   document.querySelector('.pm').style.opacity = 0.5;
   }
   else {
   document.querySelector('.pm').style.opacity = 1;
   document.querySelector('.am').style.opacity = 0.5;
   }

   myExTime = `${hour}:${minutes}`
   alarmTriggered = false;
   alarmStopped = false;
   const myExAlarm = myAlarms[0].time

   if(myExTime === myExAlarm && !alarmTriggered && !alarmStopped){
   alarmSound.play();
   alarmTriggered = true
   }
   else {
   alarmSound.pause()
   }
   };

   function stopAlarm (){
   alarmSound.pause();
   myAlarms.splice()
   };

   const myAlarms = [];

   renderAlarm();

   function renderAlarm(){

   let alarmHTML = '';
   myAlarms.forEach((alarmObject, index) => {
   const title = alarmObject.title;
   const time = alarmObject.time;
   const html = `
   <div class="title-display">${title}</div>
   <div class="time-display js-time-display">${time}</div>
   <button 
   class="delete-button
   js-delete-alarm-button">DELETE</button>
   `
   alarmHTML += html;
   })

   document.querySelector('.js-alarm-container').innerHTML = alarmHTML;

   document.querySelectorAll('.js-delete-alarm-button')
   .forEach((deleteButton, index) => {
   deleteButton.addEventListener('click', () => {
   myAlarms.splice(index, 1);
   renderAlarm();
   })
   });
   };

   document.querySelector('.js-set')
   .addEventListener('click', () => {
   addAlarm();
   });

   document.querySelector('.js-stop')
   .addEventListener('click', () => {
   stopAlarm();
   });

   function addAlarm (){
   const titleAlarm = document.querySelector('.js-title-alarm')
   const titleAlarmValue = titleAlarm.value

   const timeAlarm = document.querySelector('.js-time-alarm')
   const timeAlarmValue = timeAlarm.value

   myAlarms.push({
   title: titleAlarmValue,
   time: timeAlarmValue
   });

   timeAlarm.value = '';
   titleAlarm.value = '';

   renderAlarm();
   }

   let minutes = 0;
   let seconds = 0;
   let hundredths = 0
   let intervalId = null;

   function updateDisplay (){
   const formatted = 

   minutes.toString().padStart(2, "0")+ ":" +
   seconds.toString().padStart(2, "0")+ ":" +
   hundredths.toString().padStart(2, "0");

   document.querySelector('.js-stop-clock-container').innerText = formatted;
   };

   updateDisplay();


   document.querySelector('.js-start-button')
   .addEventListener('click', () => {
   if(!intervalId){
   intervalId = setInterval(() => {
   hundredths ++;

   if(hundredths >= 100){
   hundredths = 0;
   seconds ++
   };

   if(seconds >= 60){
   seconds = 0;
   minutes ++
   };

   updateDisplay();
   }, 10)
   };
   });

   document.querySelector('.js-stop-button')
   .addEventListener('click', () => {

   clearInterval(intervalId);
   intervalId = null;
   });

   document.querySelector('.js-reset-button')
   .addEventListener('click', () => {
   clearInterval(intervalId);
   intervalId = null;
   minutes = 0;
   seconds = 0;
   hundredths = 0;
   updateDisplay();
   });


