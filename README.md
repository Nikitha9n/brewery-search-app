# Brewery Search App

A simple web application built using HTML, CSS, JavaScript, and Axios that allows users to search breweries by country using the Open Brewery DB API. The application fetches brewery data from the API and dynamically displays the brewery names on the webpage.

---

## Live Demo

https://brewery-search-app.netlify.app/

## Features

- Search breweries by country.
- Fetch real-time brewery data using the Open Brewery DB API.
- Display brewery names dynamically.
- Clear search input and previous results.
- Show a message when no breweries are found.
- Validate empty user input.
- Handle API errors using `try...catch`.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Axios
- Open Brewery DB API

---

## Project Structure

```text
brewery-search-app/
│── index.html
│── style.css
│── Final.js
│── README.md
```

---

## How to Run

1. Clone this repository.
2. Open the project folder.
3. Open `index.html` in your browser.
4. Enter a country name (for example: United States).
5. Click the **Search** button to view brewery names.
6. Use the **Clear** button to reset the search.

---

## API Used

**Open Brewery DB API**

Endpoint used:

```text
https://api.openbrewerydb.org/v1/breweries?by_country=
```

---

## What I Learned

During this project, I practiced:

- Working with REST APIs
- Making HTTP requests using Axios
- Using async/await
- Error handling with try...catch
- DOM manipulation
- Creating and appending HTML elements dynamically
- Handling user input validation
- Working with JSON responses

---

## Future Improvements

- Search breweries by state.
- Display city, state, and brewery type.
- Add loading indicator while fetching data.
- Improve the UI and responsiveness.
- Add pagination for large search results.

---

## Author

**Nikitha Nayak**
