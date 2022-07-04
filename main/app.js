let pets = [
  {
    name: "Katrine",
    img: "../assets/images/pets-katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
    id: 0,
  },
  {
    name: "Jennifer",
    img: "../assets/images/pets-jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
    id: 1,
  },
  {
    name: "Woody",
    img: "../assets/images/pets-woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
    id: 2,
  },
  {
    name: "Sophia",
    img: "../assets/images/pets-sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
    id: 3,
  },
  {
    name: "Timmy",
    img: "../assets/images/pets-timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
    id: 4,
  },
  {
    name: "Charly",
    img: "../assets/images/pets-charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
    id: 5,
  },
  {
    name: "Scarlett",
    img: "../assets/images/pets-scarlet.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
    id: 6,
  },

  {
    name: "Freddie",
    img: "../assets/images/pets-freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
    id: 7,
  },
];
let burger = document.querySelector(".burger");
let allCardBlocks = document.querySelector(".cards");
let leftBtn = document.getElementById("left-btn");
let leftBtn320 = document.getElementById("left-btn320");
let rightBtn = document.getElementById("right-btn");
let allCards = document.querySelectorAll(".card");
let popupImg = document.getElementById("modal-img");
let popupText = document.querySelector(".popup-text");
let arr1 = [0, 1, 2, 3, 4, 5, 6, 7];
let arr2 = [0, 1, 2];
for (let i = 3; i < 6; i++) {
  allCards[i].childNodes[1].setAttribute("id", i - 3);
  allCards[i].childNodes[1].src = pets[i - 3].img;
  allCards[i].childNodes[3].innerHTML = pets[i - 3].name;
}
function remNum() {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        arr1.splice(i, 1);
      }
    }
  }
}
remNum();
let numOfAr = [];
function checkIds(n) {
  arr1.splice(arr1.indexOf(n), 1);
  arr2.unshift(n);
  numOfAr.unshift(arr2.pop());
  if (numOfAr.length > 3) {
    while (numOfAr.length !== 3) {
      arr1.push(numOfAr.pop());
    }
  }
}
function showASt(s) {
  let rn1 = arr1[Math.floor(Math.random() * arr1.length)];
  checkIds(rn1);
  let rn2 = arr1[Math.floor(Math.random() * arr1.length)];
  checkIds(rn2);
  let rn3 = arr1[Math.floor(Math.random() * arr1.length)];
  checkIds(rn3);
  if (s == "right") {
    showCR(rn1, rn2, rn3);
  } else if (s == "left") {
    showCL(rn1, rn2, rn3);
  }
}
rightBtn.addEventListener("click", () => {
  showASt("right");
});
leftBtn.addEventListener("click", () => {
  showASt("left");
});
leftBtn320.addEventListener("click", () => {
  showASt("left");
});
function showCR(a, b, c) {
  allCards[0].childNodes[1].src = pets[a].img;
  allCards[0].childNodes[1].setAttribute("id", a);
  allCards[0].childNodes[3].innerHTML = pets[a].name;
  allCards[1].childNodes[1].src = pets[b].img;
  allCards[1].childNodes[1].setAttribute("id", b);
  allCards[1].childNodes[3].innerHTML = pets[b].name;
  allCards[2].childNodes[1].src = pets[c].img;
  allCards[2].childNodes[3].innerHTML = pets[c].name;
  allCards[2].childNodes[1].setAttribute("id", c);
  allCardBlocks.classList.add("transition-right");
  allCards[6].childNodes[1].src = pets[a].img;
  allCards[6].childNodes[1].setAttribute("id", a);
  allCards[6].childNodes[3].innerHTML = pets[a].name;
  setTimeout(() => {
    allCards[3].childNodes[1].src = pets[a].img;
    allCards[3].childNodes[1].setAttribute("id", a);
    allCards[3].childNodes[3].innerHTML = pets[a].name;
    allCards[4].childNodes[1].src = pets[b].img;
    allCards[4].childNodes[1].setAttribute("id", b);
    allCards[4].childNodes[3].innerHTML = pets[b].name;
    allCards[5].childNodes[1].src = pets[c].img;
    allCards[5].childNodes[3].innerHTML = pets[c].name;
    allCards[5].childNodes[1].setAttribute("id", c);
    allCardBlocks.classList.remove("transition-right");
  }, 1200);
}
function showCL(a, b, c) {
  allCardBlocks.classList.add("transition-left");
  setTimeout(() => {
    allCards[3].childNodes[1].src = pets[a].img;
    allCards[3].childNodes[1].setAttribute("id", a);
    allCards[3].childNodes[3].innerHTML = pets[a].name;
    allCards[4].childNodes[1].src = pets[b].img;
    allCards[4].childNodes[1].setAttribute("id", b);
    allCards[4].childNodes[3].innerHTML = pets[b].name;
    allCards[5].childNodes[1].src = pets[c].img;
    allCards[5].childNodes[3].innerHTML = pets[c].name;
    allCards[5].childNodes[1].setAttribute("id", c);
    allCardBlocks.classList.remove("transition-left");
  }, 1200);
  allCards[6].childNodes[1].src = pets[a].img;
  allCards[6].childNodes[1].setAttribute("id", a);
  allCards[6].childNodes[3].innerHTML = pets[a].name;
  allCards[7].childNodes[1].src = pets[b].img;
  allCards[7].childNodes[1].setAttribute("id", b);
  allCards[7].childNodes[3].innerHTML = pets[b].name;
  allCards[8].childNodes[1].src = pets[c].img;
  allCards[8].childNodes[3].innerHTML = pets[c].name;
  allCards[8].childNodes[1].setAttribute("id", c);
  allCards[0].childNodes[1].src = pets[a].img;
  allCards[0].childNodes[1].setAttribute("id", a);
  allCards[0].childNodes[3].innerHTML = pets[a].name;
}
allCards[3].addEventListener("click", () => {
  popup(3);
});
allCards[4].addEventListener("click", () => {
  popup(4);
});
allCards[5].addEventListener("click", () => {
  popup(5);
});
function popup(n) {
  let d = allCards[n].childNodes[1].id;
  document.querySelector(".popup").addEventListener("click", (e) => {
    if (
      e.target.classList.value == "popup-main" ||
      e.target.classList.value == "popup-body" ||
      e.target.classList.value == "popup-close arrow" ||
      e.target.classList.value == "popupX"
    ) {
      closePopup();
    }
  });
  document.querySelector(".popup").addEventListener("mousemove", (e) => {
    if (
      e.target.classList.value !== "popup-body" &&
      e.target.classList.value !== "popup-main" &&
      e.target.classList.value !== "popup-close arrow" &&
      e.target.classList.value !== "popupX"
    ) {
      document.getElementById("popup-close").style.border = "2px solid #f1cdb3";
      document.getElementById("popup-close").style.backgroundColor =
        "transparent";
    } else {
      document.getElementById("popup-close").style.border = "2px solid #fddcc4";
      document.getElementById("popup-close").style.backgroundColor = "#fddcc4";
    }
  });
  for (let i = 0; i < pets.length; i++) {
    if (pets[i].id == Number(d)) {
      popupImg.src = pets[i].img;
      popupText.childNodes[1].innerHTML = pets[i].name;
      popupText.childNodes[3].innerHTML = `${pets[i].type} - ${pets[i].breed}`;
      popupText.childNodes[5].innerHTML = pets[i].description;
      popupText.childNodes[7].childNodes[1].innerHTML = `<span>Age:</span> ${pets[i].age}`;
      popupText.childNodes[7].childNodes[3].innerHTML = `<span>Inoculations:</span> ${pets[i].inoculations}`;
      popupText.childNodes[7].childNodes[5].innerHTML = `<span>Diseases:</span> ${pets[i].diseases}`;
      popupText.childNodes[7].childNodes[7].innerHTML = `<span>Parasites:</span> ${pets[i].parasites}`;
    }
  }

  document.querySelector(".popup").style.opacity = "1";
  document.querySelector(".popup").style.visibility = "visible";
  document.body.style.overflowY = "hidden";
}
function closePopup() {
  document.querySelector(".popup").style.opacity = "0";
  document.querySelector(".popup").style.visibility = "hidden";
  document.body.style.overflowY = "visible";
}

burger.addEventListener("click", () => {
  if (document.getElementById("bgB").classList.value !== "bgB bgB-open") {
    openBur();
  } else {
    closeBur();
  }
});
document.getElementById("bgB").addEventListener("click", (e) => {
  if (
    (e.target.classList.value == "bgB bgB-open" ||
      e.target.classList.value == "active" ||
      e.target.classList.value == "page-link") &&
    burger.classList.value == "burger rotateBurger"
  ) {
    closeBur();
  }
});

function closeBur() {
  burger.classList.toggle("rotateBurger");
  document.body.style.overflowY = "visible";
  setTimeout(() => {
    document.getElementById("header").classList.add("transition-leftB");
  }, 400);
  setTimeout(() => {
    document.getElementById("header").classList.remove("openBurger");
    document.querySelector(".logoAB").classList.remove("addM");
    document.getElementById("bgB").classList.remove("bgB-open");
    document.querySelector(".nav-ul").classList.remove("navBarUl");
    document.getElementById("header").classList.remove("transition-leftB");
  }, 1600);
}
function openBur() {
  burger.classList.toggle("rotateBurger");
  document.body.style.overflowY = "hidden";
  setTimeout(() => {
    document.getElementById("header").classList.add("transition-rightB");
    document.getElementById("header").classList.add("openBurger");
    document.getElementById("bgB").classList.add("bgB-open");
    document.querySelector(".logoAB").classList.add("addM");
    document.querySelector(".nav-ul").classList.add("navBarUl");
  }, 400);
  setTimeout(() => {
    document.getElementById("header").style.right = "0";
    document.getElementById("header").classList.remove("transition-rightB");
  }, 1600);
}
