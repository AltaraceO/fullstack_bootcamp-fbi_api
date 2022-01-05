# Exploring all the possibilities of the FBI API

This site aims to take dry crime statistics by location, year, and category and present them in a more readable and relatable way. Making a very basic comparison between different states’ crime statistics. An extra feature is the ability to view hundreds of wanted adverts in a simple card form, these include a link to the FBI page of that particular instance.

## View on Netlify

https://infallible-snyder-239f0f.netlify.app/

### `APIs used`

FBI Crime Data API --

https://crime-data-explorer.fr.cloud.gov/pages/docApi

FBI most wanted API --

https://www.fbi.gov/wanted/api

MockAPI --

https://mockapi.io/

### `Technologies and techniques implemented`

- All **HTML** and **CSS** features are my own. Used media queries to make sure that the site is responsive.

- Used **CRUD** in order to create, read, update, and delete new users, as well as update their search history. All the information was maintained in the MockAPI object for each unique user.

- Used **React Routes** and **Links** for navigation between pages

- Used the **useEffect** and **Hook** features when moving and storing data. In different locations that make API calls, I used a **Controller** to abort the call when a component is destroyed.

- Learned and Implemented the wonders of **createContext** to share the ‘current user’ state between different components that used it and updated it throughout.

- Made full use of conditional rendering to disable buttons, show alerts and toggle between different options.

### `What I learned most`

The value of an organized and well-executed plan. Time management and clear goals ensured I was able to explore different options and arrive at a finished product.
