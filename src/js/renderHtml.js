const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
function renderHtml(data) {
  countryInfo.innerHTML = '';
  countryList.innerHTML = '';
  console.log(data);
  if (data.length === 1) {
    const newCountryInfo = data
      .map(
        country =>
          `<h2 class="country-info-title"><img src="${
            country.flags.svg
          }" alt="Flag of country" width="25" height="25"> ${
            country.name.official
          }</h2>
          <p>Capital: <span class="country-info-text">${
            country.capital
          }</span></p>
        <p>Population: <span class="country-info-text">${
          country.population
        }</span></p>
          <p>Languages: <span class="country-info-text">${Object.values(
            country.languages
          )}</span></p>`
      )
      .join('');
    countryInfo.innerHTML = newCountryInfo;
  } else {
    const newCountryList = data
      .map(
        country =>
          `<li class="country-list_item"><img src="${country.flags.svg}" alt="Flag of country" width="25" height="25"> ${country.name.official}</li>`
      )
      .join('');
    countryList.innerHTML = newCountryList;
  }
}
export default { renderHtml, countryList, countryInfo };
