# Countries App

An application for searching and viewing information about countries using the
[REST Countries API](https://restcountries.com/).

## Features

### Routing

The application includes the following routes:

- `/` — **Home** page, displays a list of European countries
- `/country` — **SearchCountry** page, search countries by region
- `/country/:countryId` — **Country** page, detailed information about a country

If a user navigates to a non-existent route, they are redirected to the home
page using the `<Navigate />` component.

Pages are loaded lazily using `React.lazy`.

---

## API

Backend requests are handled via functions from the `service/countryApi` file.

The following REST Countries API endpoints are used:

- `/v3.1/region/europe` — fetches a list of European countries
- `/v3.1/region/{region}` — searches countries by region
- `/v3.1/name/{name}` — fetches full information about a country

---

## Pages

### Home

When the page loads, a request is sent to fetch European countries. The list is
rendered using the `CountryList` component, which utilizes `Grid` and `GridItem`
components.

---

### SearchCountry

The page includes the `<SearchForm />` component for selecting a region. After
form submission, a request is sent to fetch countries from the selected region.
Results are displayed using the `CountryList` component.

---

### Country

This page displays detailed information about the selected country. A back
navigation button is implemented using the `GoBackBtn` component.
