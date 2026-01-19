const topSide = document.querySelector(".top");
const label = document.querySelector("label");
const massages = document.querySelector(".massages");
const massageContainer = document.querySelector(".massage-container");
const nextBtn = document.querySelector(".next");
const heartFill = document.getElementById("heartFill");
const heartText = document.getElementById("heartText");
const startPage = document.getElementById("startPage");
const endPage = document.getElementById("endPage");
const finalPage = document.querySelector(".finalPage");
const startMessages = document.querySelectorAll(".start h1");
const hiddenBtns = document.querySelector(".hidden");
const yesBtns = document.querySelectorAll(".yes");
const messages = [
  "هذا إعتراف من قلبي لحبيبة قلبي",
  "أنت أجمل صدفة حصلت ليا",
  "دخلتي حياتي و قلبتيها 180 درجة",
  "كل مرة بشوف فيها رسالة منك قلبي بيرقص",
  "كل مرة بسمع فيها صوتك بحس أني مش محتاج صوت غيره",
  "كل نبضة في قلبي بتهتف بإسمك , و كل فكرة في عقلي بتبدأ بيكي",
  "بيقولوا أن الحب أعمي , لكن معاكي بقيت أشوف بكل وضوح",
  "أنت نعمة بحمد ربنا عليها كل يوم",
  "من أول لحظة قلبي أختارك , و مازال بيختارك كل يوم",
  "هل تقبلي أنك تكوني مقيمة قلبي ووجداني؟",
];
let index = 0;
let percentage = 0;
let current = 0;

function showNextH1() {
  startMessages.forEach(h => h.style.display = "none");

  if (current >= startMessages.length) {
    startPage.style.display = "none";
    endPage.style.display = "block";
    document.body.classList.remove("start") 
    return;
  }

  startMessages[current].style.display = "block";
  current++;

  setTimeout(showNextH1, 2000);
}

showNextH1();
label.onclick = () => {
  topSide.id = "isOpen";
  label.style.display = "none";
  massageContainer.id = "open";
  massages.id = "open";
  massages.innerHTML = messages[0];
};

function updateHeart() {
  const height = (percentage / 100) * 32;
  console.log(percentage);
  
  heartFill.setAttribute("y", 32 - height);
  heartFill.setAttribute("height", height);
   heartText.textContent = percentage + "%";
}
nextBtn.addEventListener("click", () => {
      index++;
      console.log(index , messages.length);
      
  if (index >= messages.length - 1) {
    hiddenBtns.classList.remove("hidden");
    nextBtn.classList.add("hidden");
  }
  massages.innerHTML = messages[index];
    percentage += 10;
  if (percentage > 100) percentage = 100;
  updateHeart();
});

yesBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        finalPage.classList.remove("hidden");
        endPage.style.display = "none";
        document.body.classList.add("start");
    })
})
document.querySelector(".يب").addEventListener("click", () => {
  emailjs.send("service_vcsjvpj", "template_37uovwj", {
    message: "قالت يب ❤️"
  })
  .then(() => {
    console.log("Email sent");
  })
  .catch(err => console.error(err));
});

document.querySelector(".sure").addEventListener("click", () => {
  emailjs.send("service_vcsjvpj", "template_37uovwj", {
    message: "قالت💚 أكيد يب "
  })
  .then(() => {
    console.log("Email sent");
  })
  .catch(err => console.error(err));
});



