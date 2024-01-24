export function countryCard(country) {
  const card = `
  <div class="card" onclick="showCountryDetails('${country.name}')">
    <img class="flag" src="${country.flags.png}" alt="country flag" />
    <div class="cardContent">
      <h2>${country.name.common}</h2>
      <div class="desc">
        <p>
          <span>Population: </span>${country.population}
        </p>
        <p>
          <span>Region: </span>${country.region}
        </p>
        <p>
          <span>Capital: </span>${country.capital}
        </p>
      </div>
    </div>
  </div>
`;
return card
}

