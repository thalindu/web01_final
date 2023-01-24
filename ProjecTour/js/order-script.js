const params = new URLSearchParams(document.location.search);
let price = 0
let currentService = null;
const id = params.get("id");
const type = params.get("type");
const category = params.get("category");
const item = availableItemss.find(e => e.id === id);
if (!id || !category || !item) {
  document.querySelector('.forbidden').classList.add('show')
  let i = 60;
  setInterval(function() {
    i--;
    if (i === 0) {
      window.location.href = 'index.html'
    }
    document.getElementById('time').textContent = "-" + i
  }, 1000);
  
} else {
  price = item.price
  document.getElementById('body').style.display = 'flex';
  document.getElementById('image').src = item.image;
  document.getElementById('name').textContent = item.name;
  document.getElementById('discount').textContent = item.actualPrice;
  document.getElementById('price').textContent = "$" + item.price;
  document.getElementById('description').textContent = item.description;
  const addonList = [];
  const addonHeadding = document.createElement("h3");
  addonHeadding.textContent = "Addons";
  addonHeadding.style.minWidth = "100%";
  item.addons.forEach(e => {
    const addon = addons.find(a => a.id === e)
    const label = document.createElement("label");
    label.htmlFor = addon.id;
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.flexDirection = "column";
    div.style.marginTop = "10px";
    div.style.marginLeft = "10px";
    div.style.cursor = "pointer";
    const h5 = document.createElement("h5");
    h5.textContent = "$ " + addon.price;
    const image = document.createElement("img");
    image.src = addon.image;
    image.style.minWidth = '70%';
    image.style.height = '70px';
    image.style.borderRadius = '5px';
    image.title = addon.name;
    div.append(image, h5)
    label.appendChild(div);
    const input = document.createElement('input');
    input.id = addon.id;
    input.type = "checkbox";
    input.name = addon.id;
    input.value = addon.id;
    input.onclick = () => handlePrice(addon.id, addon.price, "A")
    addonList.push(input, label)
  });

  const optionList = [];
  const optionHeadding = document.createElement("h3");
  optionHeadding.textContent = "Service Options";
  optionHeadding.style.minWidth = "100%";
  item.serviceOptions.forEach(op => {
    const label = document.createElement("label");
    label.htmlFor = op;
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.flexDirection = "column";
    div.style.marginTop = "10px";
    div.style.marginLeft = "10px";
    div.style.cursor = "pointer";
    const h5 = document.createElement("h5");
    h5.textContent = "$ " + serviceOptions[op];
    const image = document.createElement("i");
    image.classList.add('fa-solid', 'fa-3x', serTypes[op])
    image.style.minWidth = '70%';
    image.style.height = '70px';
    image.style.marginRight = "10px";
    image.title = op;
    div.append(image, h5)
    label.appendChild(div);
    const input = document.createElement('input');
    input.id = op;
    input.type = "radio";
    input.name = 'service';
    input.value = op;
    input.onclick = () => handlePrice(op, serviceOptions[op], "S");
    input.checked = op === type
    optionList.push(input, label)
  })
  if (addonList.length > 0) {
    document.getElementById("addons").append(addonHeadding, ...addonList)
  }

  if (optionList.length > 0) {
    document.getElementById("service-options").append(optionHeadding, ...optionList)
  }

  price += (serviceOptions[type] ?? 0)
  console.log(price)
  currentService = type
  document.getElementById("tot-price").textContent = `Total Price: $${price}`
}

function handlePrice(id, itemPrice, priceType) {
  setTimeout(() => {
    if (priceType === "A") {
      if (document.getElementById(id).checked) {
        price += itemPrice
      } else {
        price -= itemPrice
      }
    } else {
      if (currentService !== 'null' || !currentService) {
        price -= serviceOptions[currentService]
      }
      price += serviceOptions[id];
      currentService = id
    }
    document.getElementById("tot-price").textContent = `Total Price: $${price}`
  }, 0);
}


console.log(id, type, category, document.querySelector('.order-body'))