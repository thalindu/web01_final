const serTypes = {
  DINE_IN: 'fa-cutlery',
  HOME_DELIVERY: 'fa-home',
  GIFT_DELIVERY: 'fa-gift',
  REMINDER: 'fa-bell'
}

const availableItemss = [
  {
    id: 'F1',
    image: "imgs/burger.jpg",
    name: 'Hamburger',
    type: 'FOODS',
    price: 150,
    actualPrice: 200,
    addons: ['A2', 'A5', 'A6', 'A7'],
    serviceOptions: ['DINE_IN', 'HOME_DELIVERY', 'GIFT_DELIVERY', 'REMINDER'],
    description: "A hamburger, or simply burger, is a food consisting of fillings, usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll.",
  },
  {
    id: 'F2',
    image: "imgs/pizza.jpg",
    name: 'Pizza',
    type: 'FOODS',
    price: 200,
    actualPrice: 220,
    addons: ['A2', 'A5', 'A6', 'A7'],
    serviceOptions: ['DINE_IN', 'HOME_DELIVERY', 'GIFT_DELIVERY', 'REMINDER'],
    description: "World famaouse pizza with various flavours, BBQ Chicken, Butter Chicken Masala, Chicken Hawaiian, etc...",
  },
  {
    id: 'F3',
    image: "imgs/sushi.jpeg",
    name: 'Sushi',
    type: 'FOODS',
    price: 180,
    actualPrice: null,
    addons: ['A5', 'A6', 'A7'],
    serviceOptions: ['DINE_IN', 'HOME_DELIVERY', 'GIFT_DELIVERY', 'REMINDER'],
    description: "Delicious sushi with high quality tuna fish with old japanese recipe.",
  },
  {
    id: 'F4',
    image: "imgs/Penang.jpg",
    name: 'Penang Assam Laksa',
    type: 'FOODS',
    price: 100,
    actualPrice: 120,
    addons: ['A2', 'A5', 'A6', 'A7'],
    serviceOptions: ['DINE_IN', 'HOME_DELIVERY', 'GIFT_DELIVERY', 'REMINDER'],
    description: "Penang Assam Laksa is a spicy soup made of assam ko (tamarind) with fish flakes made from poached ikan kembung (mackerel)",
  },
  {
    id: 'F5',
    image: "imgs/Spaghetti.jpg",
    name: 'Spaghetti',
    type: 'FOODS',
    price: 80,
    actualPrice: 100,
    addons: ['A2', 'A5', 'A6', 'A7'],
    serviceOptions: ['DINE_IN', 'HOME_DELIVERY', 'GIFT_DELIVERY', 'REMINDER'],
    description: "Spaghetti is a long, thin, solid, cylindrical pasta. It is a staple food of traditional Italian cuisine",
  },
  {
    id: 'F6',
    image: "imgs/rice.jpg",
    name: 'Fried Rice',
    type: 'FOODS',
    price: 60,
    actualPrice: 65,
    addons: ['A5', 'A6', 'A7'],
    serviceOptions: ['DINE_IN', 'HOME_DELIVERY', 'GIFT_DELIVERY', 'REMINDER'],
    description: "Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat",
  },
  {
    id: 'F7',
    image: "imgs/biriyani.jpg",
    name: 'Biriyani',
    type: 'FOODS',
    price: 60,
    actualPrice: 65,
    addons: ['A3', 'A5', 'A6', 'A7'],
    serviceOptions: ['DINE_IN', 'HOME_DELIVERY', 'GIFT_DELIVERY', 'REMINDER'],
    description: "Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and usually some type of meat",
  },
  {
    id: 'F8',
    image: "imgs/cake.jpg",
    name: 'Cake',
    type: 'DESSERTS',
    price: 30,
    actualPrice: 35,
    addons: ['A1'],
    serviceOptions: ['DINE_IN', 'GIFT_DELIVERY', 'REMINDER'],
    description: "Cake is a flour confection made from flour, sugar, and other ingredients, and is usually baked. In their oldest forms, cakes were modifications of bread",
  },
  {
    id: 'F9',
    image: "imgs/salad.jpg",
    name: 'Fruit salad',
    type: 'DESSERTS',
    price: 30,
    actualPrice: 35,
    addons: ['A1', 'A3', 'A4'],
    serviceOptions: ['DINE_IN', 'REMINDER'],
    description: "Fruit salad is a dish consisting of various kinds of fruit, sometimes served in a liquid, either their juices or a syrup. In different forms",
  },
  {
    id: 'F10',
    image: "imgs/juice.jpg",
    name: 'Fruit Juice',
    type: 'DRINKS',
    price: 30,
    actualPrice: 35,
    addons: ['A1', 'A3', 'A4'],
    serviceOptions: ['DINE_IN', 'REMINDER'],
    description: "Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables",
  },
  {
    id: 'F11',
    image: "imgs/tea.jpg",
    name: 'Tea',
    type: 'DRINKS',
    price: 12,
    actualPrice: 15,
    addons: ['A1'],
    serviceOptions: ['DINE_IN', 'REMINDER'],
    description: "Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis",
  },
  {
    id: 'F12',
    image: "imgs/coffee.jpg",
    name: 'Coffee',
    type: 'DRINKS',
    price: 12,
    actualPrice: 15,
    addons: ['A1', 'A3', 'A4'],
    serviceOptions: ['DINE_IN', 'REMINDER'],
    description: "Coffee is a drink prepared from roasted coffee beans. Darkly colored, bitter, and slightly acidic",
  },
  {
    id: 'F13',
    image: "imgs/water.jpg",
    name: 'Sparkling Water',
    type: 'DRINKS',
    price: 5,
    actualPrice: null,
    addons: ['A1', 'A3'],
    serviceOptions: ['DINE_IN', 'REMINDER'],
    description: "Carbonated water is water containing dissolved carbon dioxide gas",
  }

]

const addons = [
  {
    id: 'A1',
    name: 'Chocolate',
    price: 15,
    image: 'imgs/choco.jpg'
  },
  {
    id: 'A2',
    name: "Cheese",
    price: 10,
    image: 'imgs/cheese.jpg'
  },
  {
    id: 'A3',
    name: 'Chocolate Ice Cream',
    price: 5,
    image: "imgs/c-ice.jpg"
  },
  {
    id: 'A4',
    name: 'Vanilla Ice Cream',
    price: 5,
    image: "imgs/v-ice.jpg"
  },
  {
    id: 'A5',
    name: 'Green Chiles',
    price: 2,
    image: 'imgs/chile.jpg'
  },
  {
    id: 'A6',
    name: 'Sausage',
    price: 2,
    image: 'imgs/sausage.jpg'
  },
  {
    id: 'A7',
    name: 'Gorgonzola and mushroom',
    price: 20,
    image: 'imgs/mush.jpg'
  }
]

const serviceOptions = {
  DINE_IN: 0, 
  HOME_DELIVERY: 10, 
  GIFT_DELIVERY: 20, 
  REMINDER: 2
}