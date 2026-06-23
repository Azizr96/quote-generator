# Quote Generator App (JavaScript API Project)

A simple and interactive **quote generator web application** that fetches inspirational quotes from an external API and displays them dynamically. Users can generate new quotes instantly and share them on Twitter.

This project was built to strengthen core JavaScript skills, including API handling, DOM manipulation, and asynchronous programming.

---

## 🚀 Features

* Fetches quotes from an external API
* Displays random quotes on demand
* Handles missing author data gracefully
* Automatically adjusts styling for long quotes
* Loading spinner for better user experience
* “Tweet this quote” sharing feature
* Clean, responsive UI design

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript (ES6+)
* Fetch API (async/await)
* Font Awesome (icons)
* Google Fonts

---

## 📁 Project Structure

```text id="qt-structure"
quote-generator/
│
├── index.html
├── assets/
│   ├── CSS/
│   │   └── style.css
│   └── scripts/
│       ├── script.js
│       └── quotes.js
└── README.md
```

---

## ⚙️ How It Works

1. On page load, the app sends a request to a quotes API:

   ```
   https://jacintodesign.github.io/quotes-api/data/quotes.json
   ```

2. The response is stored in an array (`apiQuotes`).

3. When the user clicks **“New Quote”**:

   * A random quote is selected from the array
   * The UI updates dynamically
   * A loading spinner is shown during transitions

4. The app also:

   * Replaces missing authors with **“Unknown”**
   * Reduces font size for longer quotes

---

## 💡 Key JavaScript Concepts Used

### 🔄 API Fetching (Async/Await)

Handles external data loading using modern asynchronous JavaScript.

### 🎯 Random Selection Logic

```js id="random-quote"
const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
```

### ⏳ Loading State Management

Improves user experience by showing a spinner during API calls.

### 🐦 Twitter Integration

Allows users to share quotes instantly:

```js id="twitter-share"
https://twitter.com/intent/tweet?text=QUOTE - AUTHOR
```

---

## 📚 What I Learned

This project helped reinforce:

* Working with APIs using `fetch()`
* Handling asynchronous JavaScript (`async/await`)
* DOM manipulation and event handling
* Managing UI states (loading vs content)
* Handling edge cases (missing data, long text)
* Structuring modular JavaScript files

---

## 🔮 Possible Improvements

* Add “favorite quotes” feature using local storage
* Add categories (motivational, success, life, etc.)
* Improve error handling for API failures
* Add smooth transitions/animations between quotes
* Add copy-to-clipboard functionality
* Add offline mode using local dataset fallback

---
📷 Preview

<img width="2552" height="942" alt="image" src="https://github.com/user-attachments/assets/679bbf73-aaec-46ac-94e3-62027dc603a1" />

https://azizr96.github.io/quote-generator/
---
## 📄 License

This project is for educational and practice purposes.

---

## 👤 Author

Fictional project created for JavaScript API practice and learning.

---
