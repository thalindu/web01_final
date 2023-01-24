setTimeout(() => {
 document.body.removeChild(document.getElementById("loader"))
 handleHashChange({newURL: window.location.href});
 handleOnClickButton("FOODS")
 handleOnClickButton("DESSERTS")
 handleOnClickButton("DRINKS")
}, 10);

let foods = 0;
let desserts = 0;
let drinks = 0;

const nav = document.querySelector('.nav')
const slider = document.querySelector('.image-slider');
const sections = document.querySelectorAll(".section");
const navList = document.querySelectorAll("nav div ul li a");
window.addEventListener('scroll', fixNav)
window.addEventListener('hashchange', handleHashChange);

function fixNav(e) {
  if (window.scrollY > slider.scrollHeight - nav.scrollHeight) {
      nav.classList.add('active')
  } else {
      nav.classList.remove('active')
  }

  let current = "";
  sections.forEach((section) => {
    console.log(section.offsetTop, screenY)
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 90) {
      current = section.getAttribute("id"); 
    }
  });

  navList.forEach((a, i) => {
    a.classList.remove("current");
    if (current && a.href.includes(current)) {
      a.classList.add('current');
    } else if (!current && i === 0) {
      a.classList.add('current');
    }
  });
}

const type_obj = {
  menu: "nav_menu",
  services: "nav_services",
  about: "nav_about",
  contact: "nav_contact",
}

const setActive = active => {
  const ids = ['nav_home', 'nav_menu', 'nav_services', 'nav_about', 'nav_contact'];
  ids.forEach(id => {
    const element = document.getElementById(id);
    if (id !== active) {
      element.classList.remove('current')
    } else {
      element.classList.add('current')
    }
  })
}

function handleHashChange(e) {
  const url = e.newURL;
  const tags = ['menu', 'services', 'about', 'contact'];
  if (url?.includes("#")) {
    const splitted = url?.split("#");
    if (tags.includes(splitted?.[1])) {
      setActive(type_obj[splitted?.[1]])
    } else {
      setActive('nav_home')
    }
  } else {
    setActive('nav_home')
  }
}

let slideIndex = Math.floor(Math.random() * (document.querySelectorAll(".mySlides").length - 1) + 1);
showSlides();

function nextSlide() {
  slideIndex++;
  showSlides();
  timer = _timer;
}

function prevSlide() {
  slideIndex--;
  showSlides();
  timer = _timer;
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
  timer = _timer;
}

function showSlides() {
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dots");

  if (slideIndex > slides.length - 1) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  
  slides[slideIndex].style.display = "block";
  
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  
  dots[slideIndex].classList.add("active");
}

let timer = 7; 
const _timer = timer;

setInterval(() => {
  timer--;

  if (timer < 1) {
    nextSlide();
    timer = _timer;
  }
}, 1000);

function handleOnClickButton(type) {
  switch (type) {
    case 'FOODS':
      addDataToPage(availableItemss.filter(e => e.type === type), 'foods-container', foods, type);
      foods = foods + 4;
      break;
    case 'DESSERTS':
      addDataToPage(availableItemss.filter(e => e.type === type), 'desserts-container', desserts, type);
      desserts = desserts + 4;
      break;
    case 'DRINKS':
      addDataToPage(availableItemss.filter(e => e.type === type), 'drinks-container', drinks, type);
      drinks = drinks + 4;
      break;
    default:
      break;
  }
}

function addDataToPage(data, id, start, type) {
  if (start + 4 >= data.length) {
    switch (type) {
      case 'FOODS':
        document.getElementById("foods-show").classList.add("order-body")
        break;
      case 'DESSERTS':
        document.getElementById("desserrs-show").classList.add("order-body")
        break;
      case 'DRINKS':
        document.getElementById("drinks-show").classList.add("order-body")
        break;
      default:
        break;
    }
  }
  const sliced = data.slice(start, start + 4);
  const div = document.getElementById(id);
  sliced.forEach((e, i) => {
    const card = document.createElement("div");
    card.classList.add('card', 'animate-card');
    card.id = e.id;
    const ul = document.createElement("ul");
    const img = document.createElement("img");
    img.src = e.image;
    img.alt = e.name;
    const content = document.createElement("div");
    content.classList.add('content-card');
    const h2 = document.createElement("h2");
    h2.textContent = e.name;
    const p = document.createElement("p");
    p.textContent = e.description;
    const button = document.createElement("button");
    button.textContent = 'Order meal';
    button.onclick = () => handleOrdrer(e.id, null, type);
    const icons = [];
    e.serviceOptions.forEach(op => {
      const li = document.createElement("li")
      const i = document.createElement("i");
      i.classList.add('fa-solid', serTypes[op]);
      i.onclick = () => handleOrdrer(e.id, op, type)
      li.appendChild(i);
      icons.push(li)
    })
    ul.append(...icons);
    p.appendChild(button)
    content.append(h2, p)
    card.append(ul, img, content);
    div.appendChild(card)
    setTimeout(()=> {
      document.getElementById(e.id).classList.add("animate")
    }, i * 500);
  })
}

function handleOrdrer(id, type, category) {
  window.location.href = 'order.html?id=' + id + '&type=' + type + '&category=' + category
}