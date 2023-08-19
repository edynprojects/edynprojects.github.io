
// COUNTDOWN 
    function getNextSunday11AM() {
      const now = new Date();
      let targetDate = new Date(now);
      targetDate.setDate(now.getDate() + ((7 - now.getDay() + 0) % 7)); // Set to next Sunday
      targetDate.setHours(11, 0, 0, 0); // Set to 11 AM

      if (now.getDay() === 0 && now.getHours() >= 11) {
        // If today is Sunday and it's already 11 AM or later, set to next Sunday
        targetDate.setDate(targetDate.getDate() + 7);
      }

      return targetDate;
    }

    function updatecountdown() {
      const now = new Date();
      const targetDate = getNextSunday11AM();
      const timeRemaining = targetDate - now;
      let textColorClass = "red-text";

      if (now.getDay() === 0 && now.getHours() >= 8 && now.getHours() < 11) {
        // If it's Sunday between 8 AM and 11 AM, display "Ongoing event"
        document.querySelector(".ongoing").textContent = "ONGOING EVENT";
        document.querySelector(".ongoing").className = textColorClass;
      } else {
        if (timeRemaining < 0) {
          // If the target date is exceeded, set the next Sunday's target date
          targetDate.setDate(targetDate.getDate() + 7);
        } else if (timeRemaining > 6 * 60 * 60 * 1000) {
          // If there are more than 6 hours remaining, reset the color to default
          textColorClass = "";
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000); // Ensure seconds are rounded down

        const dayNumber = document.querySelector(".days-number");
        const hoursNumber = document.querySelector(".hours-number");
        const minutesNumber = document.querySelector(".minutes-number");
        const secondNumber = document.querySelector(".seconds-number");

        dayNumber.textContent = days;
        hoursNumber.textContent = hours;
        minutesNumber.textContent = minutes;
        secondNumber.textContent = seconds;
      }
      setTimeout(updatecountdown, 1000);
    }

    updatecountdown();
 
const worship = [
    {
        id: 1,
        img: "/img/personface2.jpg",
        date: "July 23rd, 2023",
        topic: "Unlikely Friends",
        speaker: "Emmanuel Onasanya",
        aim: "Recognizing the need",
        scripture: "Matthew 9:16",
    },
    {
        id: 2,
        img: "/img/personface1.jpg",
        date: "July 3rd, 2023",
        topic: "Unlikely Friends",
        speaker: "Philp Solomon",
        aim: "Recognizing the need",
        scripture: "Matthew 9:16",
    },
    {
        id: 3,
        img: "/img/personface2.jpg",
        date: "July 23rd, 2023",
        topic: "Friends",
        speaker: "Emmanuel Onasanya",
        aim: "Recognizing the need",
        scripture: "Matthew 9:16",
    },
    {
        id: 1,
        img: "/img/personface3.jpg",
        date: "August 23rd, 2023",
        topic: "Jesus Reign",
        speaker: "Rose Kelvin",
        aim: "Recognizing the need",
        scripture: "Matthew 9:16",
    },
    {
        id: 3,
        img: "/img/personface1.jpg",
        date: "July 3rd, 2023",
        topic: "Jesus Reign",
        speaker: "Elijah Oluwatayo",
        aim: "Recognizing the need",
        scripture: "Matthew 9:16",
    },
    {
        id: 4,
        img: "/img/personface2.jpg",
        date: "July 23rd, 2023",
        topic: "Unlikely Friends",
        speaker: "Philp Solomon",
        aim: "Recognizing the need",
        scripture: "Matthew 9:16",
    },
    {
        id: 5,
        img: "/img/personface2.jpg",
        date: "July 23rd, 2023",
        topic: "Unlikely Friends",
        speaker: "Rose Kelvin",
        aim: "Recognizing the need",
        scripture: "Matthew 9:16",
    },
    {
        id: 6,
        img: "/img/personface2.jpg",
        date: "July 23rd, 2023",
        topic: "Unlikely Friends",
        speaker: "Philp Solomon",
        aim: "Recognizing the need",
        scripture: "Matthew 9:16",
    },
    
    {
        id: 5,
        img: "/img/personface2.jpg",
        date: "July 23rd, 2023",
        topic: "Jesus Reign",
        speaker: "Emmanuel Onasanya",
        aim: "Recognizing the need",
        scripture: "Matthew 9:16",
    },
    
    {
        id: 6,
        img: "/img/personface2.jpg",
        date: "July 23rd, 2023",
        topic: "Unlikely Friends",
        speaker: "Elijah Oluwatayo",
        aim: "Recognizing the need",
        scripture: "Matthew 9:16",
    },
    
    {
        id: 7,
        img: "/img/personface2.jpg",
        date: "July 23rd, 2023",
        topic: "Unlikely Friends",
        speaker: "Samuel Akinaso",
        aim: "Recognizing the need",
        scripture: "Matthew 9:16",
    },
    {
        id: 8,
        img: "/img/personface2.jpg",
        date: "July 23rd, 2023",
        topic: "Jesus Reign",
        speaker: "Samuel Akinaso",
        aim: "Recognizing the need",
        scripture: "Matthew 9:16",
    },
    
    {
        id: 9,
        img: "/img/personface2.jpg",
        date: "July 23rd, 2023",
        topic: "Friends",
        speaker: "Samuel Akinaso",
        aim: "Recognizing the need",
        scripture: "Matthew 9:16",
    },
    
]

// DECLARATIONS
const container = document.querySelector(".contents")
const selectSpeaker = document.querySelector("#selectSpeaker")
const selectTopic = document.querySelector("#selectTopic")

function updateContent() {
const selectedSpeaker = selectSpeaker.value
    const selectedTopic = selectTopic.value
    console.log(selectedSpeaker)
    console.log(selectedTopic)
    const matchedContent = []
    worship.forEach(item=> {
        if((selectedSpeaker === " " || item.speaker === selectedSpeaker) && (selectedTopic === " " || item.topic === selectedTopic)) {
            matchedContent.push(item)
            console.log(item)
        }
    })
    container.innerHTML = " "
    if(matchedContent.length  > 0)  {
        matchedContent.forEach(item=> {
            const contentBoxes = document.createElement("div")
            contentBoxes.innerHTML = `  <div class="contents-con">
            <div class="col-content">
                <div class="img-con">
                    <img src="${item.img}" alt="img">
                </div>
                <div class="informations">
                    <div class="info-header">
                        <h4 class="date-text">Sunday - ${item.date}</h4>
                        <h4 class="topic">${item.topic}</h4>
                    </div>
                    <h2 class="date">Date: ${item.date}</h2>
                    <h3 class="speaker">Speaker: ${item.speaker}</h3>
                    <h3 class="aim">Aim: ${item.aim}</h3>
                    <h3 class="scripture">Scripture: ${item.scripture}</h3>

                </div>
            <div class = "audio"> <audio controls 
            audio src="../Worship Section/audio/EH_EH_EH_EH_HALLELUYAH____UNTO_THE_LAMB_UPON_THE_THRONE____Theophilus_Sunday____MSconnect_Worship(128k).m4a"
            ></audio>
            </div>
                <div class="icons">
                <button class="icon"><ion-icon name="share-outline"></ion-icon></button>
                <button class="icon"><ion-icon name="logo-facebook"></ion-icon></button>
                <button class="icon"><ion-icon name="logo-whatsapp"></ion-icon></button>
                <button class="icon"><ion-icon name="logo-instagram"></ion-icon></button>
                </div>
            </div>                    
</div>`
console.log(contentBoxes)
container.appendChild(contentBoxes)
        })
    }
    else {
        const noContentBox = document.createElement("div")
        noContentBox.textContent = "No Contents Found"
        console.log(noContentBox)
        container.appendChild(noContentBox)
    }
}
selectSpeaker.addEventListener('change', updateContent)
selectTopic.addEventListener('change', updateContent)

updateContent()

