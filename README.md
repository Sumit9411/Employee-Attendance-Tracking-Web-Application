# Employee Attendance Tracker

A lightweight, responsive web application for tracking employee attendance in real-time. Built with **HTML5**, **Bootstrap 5**, and **Vanilla JavaScript**, featuring a clean separation of concerns (HTML, CSS, JS).

## 🚀 Features

* **Real-Time Dashboard:** Instantly view total counts for "Present" and "Absent" employees.
* **Dynamic Table:**
    * **Add Employees:** Easily add new staff members with a name and department.
    * **Delete Employees:** Remove employees from the list with a confirmation prompt.
    * **Status Toggling:** Switch attendance status between "Present" and "Absent" with a single click.
* **Visual Feedback:** Rows change color automatically based on status (Green for Present, Red for Absent).
* **Responsive Design:** Fully functional on mobile, tablet, and desktop devices.

## 🛠️ Technologies Used

* **HTML5:** Structure and layout (`index.html`).
* **Bootstrap 5:** Styling framework.
* **CSS3:** Custom styling overrides (`style.css`).
* **JavaScript (ES6):** Logic and state management (`script.js`).

## 📂 Project Structure

Ensure all three files are located in the same directory:

```text
/
├── index.html   <-- Main structure and UI
├── style.css    <-- Custom styling and animations
└── script.js    <-- Application logic and data handling

```

## 📖 How to Run

1. Download or Clone this repository.
2. Ensure `index.html`, `style.css`, and `script.js` are in the **same folder**.
3. **Double-click** `index.html` to open it in your default web browser (Chrome, Firefox, Edge, Safari).

## ⚙️ Customization

### Modifying Initial Data

To change the default list of employees, open **`script.js`** and edit the `employees` array:

```javascript
let employees = [
    { id: 101, name: "John Doe", dept: "IT", status: "Present" },
    // ...
];

```

### Changing Departments

To add or remove department options in the dropdown, open **`index.html`** and modify the `<select>` element:

```html
<select id="new-dept" class="form-select">
    <option value="HR">HR</option>
    <option value="Your New Dept">Your New Dept</option>
</select>

```

### Changing Colors

To adjust the highlight colors, open **`style.css`**:

```css
.table-danger { --bs-table-bg: #ffe6e6; } /* Absent Color */
.table-success { --bs-table-bg: #e6fffa; } /* Present Color */

```

## 📄 License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE).

```

***

**Would you like me to guide you on how to host this specifically on "GitHub Pages" so you can share a live link with others?**

```
