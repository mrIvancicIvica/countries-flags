import './style.css';
import { getCountries } from './app/services/index.js';
import { countryCard } from './app/components/countryCard.js';
const dropdownBtn = document.querySelector('.dropBtn');
const dropContent = document.querySelector('.dropdown-content');
const countries = document.querySelector('.countries');
const inputField = document.querySelector('.input');
const regionItems = document.querySelectorAll('.region');

const data = await getCountries();

async function renderCountries(countryData) {
  const countriesHTML = countryData
  .map((country) => countryCard(country))
    .join('');
  countries.innerHTML = countriesHTML;
}


renderCountries(data);

inputField.addEventListener('input', function () {
  var inputData = inputField.value;
  const filteredData = data.filter((item) =>
    item.name.common.toLowerCase().includes(inputData)
  );
  updateCountries(filteredData);
});

function updateCountries(filteredData) {
  const updatedHTML = filteredData
    .map((country) => countryCard(country))
    .join('');
  countries.innerHTML = updatedHTML;
}

dropdownBtn.addEventListener('click', function () {
  dropContent.classList.toggle('show');
});

regionItems.forEach(function (item) {
  item.addEventListener('click', function () {
    var filterRegion = item.getAttribute('data-filter');
    let filteredRegion = data.filter((region) => {
      return region.region === filterRegion;
    });

    const regionHTML = filteredRegion
      .map((region) => countryCard(region))
      .join('');

    countries.innerHTML = regionHTML;

    console.log(filteredRegion);
    dropContent.classList.remove('show');
  });
});
