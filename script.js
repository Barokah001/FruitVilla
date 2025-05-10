'use strict'
function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const menuToggle = document.querySelector('.menu-toggle')
  sidebar.style.display = 'flex'
  menuToggle.style.display = 'none'
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
  const menuToggle = document.querySelector(".menu-toggle");
  menuToggle.style.display = "block";
}




const sweetFruits = [
  "Banana",
  "Orange",
  "Watermelon",
  "Pear",
  "A document.querySelector('')pple",
  "Mango",
  "Dates",
  "Guava",
  "Pineapple",
  "Papaya (ripe pawpaw)",
  "Soursop",
  "Tangerine",
  "Grapes (imported)",
];
const sourFruits = [
  "Lemon",
  "Strawberry",
  "Lime",
  "Lemon",
  "Tamarind",
  "Orange (some varieties)",
  "Unripe mango",
  "Ube (African pear – slightly sour when unripe)",
  "Baobab fruit",
  "Star apple (Agbalumo – when unripe or slightly fermented)",
];
const bitterFruits = [
  "Bitter kola",
  "Bitter orange (Seville orange)",
  "Garden egg (some varieties)",
  "Unripe pawpaw (papaya)",
  "African walnut (when boiled, slightly bitter)",
  "Baobab fruit (tangy-bitter taste)",
];
const tastelessFruits = [
  "Cucumber",
  "Garden egg (white variety)",
  "Unripe watermelon",
  "Coconut water (from mature coconut)",
  "Cashew apple (can be watery if not fully ripe)",
  "Tomato (considered fruit, very mild flavor)",
];

