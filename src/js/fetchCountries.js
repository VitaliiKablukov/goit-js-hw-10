import renderHtmlElements from './renderHtml';
import Notiflix from 'notiflix';
const { renderHtml, countryList, countryInfo } = renderHtmlElements;
function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(country => {
      if (country.length === 1) {
        renderHtml(country);
      }
      if (country.length > 1 && country.length <= 10) {
        renderHtml(country);
      }
      if (country.length > 10) {
        Notiflix.Notify.warning(
          'Too many matches found. Please enter a more specific name.'
        );
      }
    })
    .catch(error => {
      countryList.innerHTML = '';
      countryInfo.innerHTML = '';
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}
export default fetchCountries;
