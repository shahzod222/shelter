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
let nOfP = 6;
let nOfC = 8;
let arr1 = [];
let arr3 = [];
let arr2 = [0, 1, 2, 3, 4, 5, 6, 7];
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
for (let i = 0; i < nOfP; i++) {
  arr1.push(...arr2);
}
function checkScr(n) {
  if (n >= 1280) {
    nOfP = 6;
    nOfC = 8;
    arr3 = [];
    for (let i = 0; i < 48; i += nOfC) {
      arr3.push([
        arr1[i],
        arr1[i + 1],
        arr1[i + 2],
        arr1[i + 3],
        arr1[i + 4],
        arr1[i + 5],
        arr1[i + 6],
        arr1[i + 7],
      ]);
    }
  } else if (n > 767 && n < 1280) {
    nOfP = 8;
    nOfC = 6;
    arr3 = [];
    for (let i = 0; i < 48; i += nOfC) {
      arr3.push([
        arr1[i],
        arr1[i + 1],
        arr1[i + 2],
        arr1[i + 3],
        arr1[i + 4],
        arr1[i + 5],
      ]);
    }
    for (let i = 0; i < arr3.length; i++) {
      for (let j = 0; j < arr3[i].length; j++) {}
    }
  } else if (n <= 767) {
    nOfP = 16;
    nOfC = 3;
    arr3 = [];
    for (let i = 0; i < 48; i += nOfC) {
      arr3.push([arr1[i], arr1[i + 1], arr1[i + 2]]);
    }
  }
}
checkScr(screen.width);
for (let i = 0; i < arr3.length; i++) {
  arr3[i] == shuffle(arr3[i]);
}
let allCards = document.querySelectorAll(".card");
let maxLeft = document.getElementById("maxLeft");
let left = document.getElementById("left");
let pagNum = document.getElementById("pagNumber");
let right = document.getElementById("right");
let maxRight = document.getElementById("maxRight");
let popupImg = document.getElementById("modal-img");
let popupText = document.querySelector(".popup-text");
allCards.forEach((el) => {
  el.addEventListener("click", () => {
    popup(Number(el.id));
  });
});

right.addEventListener("click", () => {
  if (pagNum.innerHTML < nOfP) {
    pagNum.innerHTML++;
    showCards(pagNum.innerHTML);
    left.classList.remove("disabled");
    maxLeft.classList.remove("disabled");
    if (pagNum.innerHTML == nOfP) {
      right.classList.add("disabled");
      maxRight.classList.add("disabled");
    }
  }
});
left.addEventListener("click", () => {
  if (pagNum.innerHTML > 1) {
    pagNum.innerHTML--;
    showCards(pagNum.innerHTML);
    right.classList.remove("disabled");
    maxRight.classList.remove("disabled");
    if (pagNum.innerHTML == 1) {
      left.classList.add("disabled");
      maxLeft.classList.add("disabled");
    }
  }
});
maxRight.addEventListener("click", () => {
  pagNum.innerHTML = nOfP;
  showCards(pagNum.innerHTML);
  right.classList.add("disabled");
  maxRight.classList.add("disabled");
  left.classList.remove("disabled");
  maxLeft.classList.remove("disabled");
});
maxLeft.addEventListener("click", () => {
  pagNum.innerHTML = 1;
  showCards(pagNum.innerHTML);
  right.classList.remove("disabled");
  maxRight.classList.remove("disabled");
  left.classList.add("disabled");
  maxLeft.classList.add("disabled");
});
for (let i = 0; i < nOfC; i++) {
  allCards[i].childNodes[1].src = pets[arr3[0][i]].img;
  allCards[i].childNodes[3].innerHTML = pets[arr3[0][i]].name;
  allCards[i].setAttribute("id", pets[arr3[0][i]].id);
}
function showCards(n) {
  for (let i = 0; i < nOfC; i++) {
    allCards[i].childNodes[1].src = pets[arr3[n - 1][i]].img;
    allCards[i].childNodes[3].innerHTML = pets[arr3[n - 1][i]].name;
    allCards[i].setAttribute("id", pets[arr3[n - 1][i]].id);
  }
}
function popup(n) {
  popupImg.src = pets[n].img;
  popupText.childNodes[1].innerHTML = pets[n].name;
  popupText.childNodes[3].innerHTML = `${pets[n].type} - ${pets[n].breed}`;
  popupText.childNodes[5].innerHTML = pets[n].description;
  popupText.childNodes[7].childNodes[1].innerHTML = `<span>Age:</span> ${pets[n].age}`;
  popupText.childNodes[7].childNodes[3].innerHTML = `<span>Inoculations:</span> ${pets[n].inoculations}`;
  popupText.childNodes[7].childNodes[5].innerHTML = `<span>Diseases:</span> ${pets[n].diseases}`;
  popupText.childNodes[7].childNodes[7].innerHTML = `<span>Parasites:</span> ${pets[n].parasites}`;
  document.querySelector(".popup").style.opacity = "1";
  document.querySelector(".popup").style.visibility = "visible";
  document.body.style.overflowY = "hidden";
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
      e.target.classList.value == "underlined" ||
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
    document.querySelector(".header-content").style.margin =
      "30px 50px 30px 10px";
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
    document.querySelector(".header-content").style.margin = "0";
  }, 400);
  setTimeout(() => {
    document.getElementById("header").style.right = "0";
    document.getElementById("header").classList.remove("transition-rightB");
  }, 1600);
}
