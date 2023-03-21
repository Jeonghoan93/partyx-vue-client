function getDefaultCurrency() {
  const nordicCountries = {
    SE: "SEK", // Sweden
    NO: "NOK", // Norway
    DK: "DKK", // Denmark
    IS: "ISK", // Iceland
  };
  const euroCountries = [
    "AT",
    "BE",
    "CY",
    "EE",
    "FI",
    "FR",
    "DE",
    "GR",
    "IE",
    "IT",
    "LV",
    "LT",
    "LU",
    "MT",
    "NL",
    "PT",
    "SK",
    "SI",
    "ES",
  ];
  const country = this.location.country;
  if (nordicCountries.hasOwnProperty(country)) {
    return nordicCountries[country]; // Use specific Nordic currency
  } else if (euroCountries.includes(country)) {
    return "EUR"; // Use Euro for countries in the Eurozone
  }
  return "USD"; // Use US Dollar for other countries
}

module.exports = {
  getDefaultCurrency,
};
