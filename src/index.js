import './css/styles.css';
import fetchCountries from './js/fetchCountries';
import { debounce } from 'debounce';
import renderHtmlElements from './js/renderHtml';
const { countryList, countryInfo } = renderHtmlElements;

const DEBOUNCE_DELAY = 500;

const input = document.querySelector('#search-box');
input.addEventListener('input', debounce(inputName, DEBOUNCE_DELAY));
function inputName() {
  if (input.value.trim()) {
    fetchCountries(input.value);
  } else {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
  }
}
