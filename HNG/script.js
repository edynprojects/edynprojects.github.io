function timeAndDay() {
   const currentTImeElement = document.querySelector('.currentTimeUTC')
   const currentDayElement = document.querySelector('.currentDay')

   const presentTme = new Date()
   const utcTime = presentTme.toUTCString().split('  ')[4]
   const dayOfWeek = presentTme.toLocaleDateString('en-US', { weekday:"long"})
   currentDayElement.textContent  = dayOfWeek
   currentTImeElement.textContent  = utcTime
}
timeAndDay()

console.log("omooo")