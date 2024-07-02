function timeAndDay() {
   const currentTImeElement = document.querySelector('[data-testid="currentTimeUTC"]')
   const currentDayElement = document.querySelector('.currentDay')

   const presentTime = new Date()
   const utcTime = presentTime.toUTCString().split(' ')[4]
   const dayOfWeek = presentTime.toLocaleDateString('en-US', { weekday:"long"})
   currentDayElement.textContent  = dayOfWeek
   currentTImeElement.textContent  = utcTime
}
timeAndDay()

setInterval(timeAndDay, 1000);

console.log("omooo")