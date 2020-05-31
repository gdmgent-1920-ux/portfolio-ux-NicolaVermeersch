/**
 * Op een of andere manier werkte het niet in mijn andere script bestand  🤔 
 */

const allCounters = document.getElementsByClassName('qty');
let min = -1;
let result = document.getElementById('res');
let price = document.getElementById('prijs');

const formatPrice = price => {
  return ('€ ' + price.toFixed(2)).replace('.', ',');
}

const priceNumeric = parseFloat(price.innerHTML.replace(/[^0-9.,]/g, "").replace(',', '.'));

for (const someCounter of allCounters) {
  const minusBtn = someCounter.children[0];
  const counter = someCounter.children[1];
  const plusBtn = someCounter.children[2];
  minusBtn.addEventListener('click', () => {
    if (counter.value <= 0) {
      alert("je kan geen -1 items hebben eh 🤦‍♂️, tenzijn je merlijn de tovenaar bent natuurlijk 🧙‍♂️");
    }else {
      counter.value = parseInt(counter.value) - 1;
    }
    price.innerHTML = formatPrice(counter.value * priceNumeric);
  });
  plusBtn.addEventListener('click', () => {
  if (counter.value >= 10) {
    alert("Je kan niet meer dan 10 items tegelijkertijd bestellen.");
  }else {
    counter.value = parseInt(counter.value) + 1;
  }
    price.innerHTML = formatPrice(counter.value * priceNumeric);
  });
}