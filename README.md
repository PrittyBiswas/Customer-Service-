# 📌 Customer Support Zone  

A **React-based Customer Support Zone** that displays customer tickets, tracks their progress, and allows marking them as resolved.  
It follows a Figma design and includes **toast notifications with React-Toastify**, responsive UI, and dynamic task management.  

---

## 📖 Table of Contents  

1. [Features](#-features)  
2. [Project Structure](#-project-structure)  
3. [Installation & Setup](#-installation--setup)  
4. [Technologies Used](#-technologies-used)  
5. [React Concepts Explained](#-react-concepts-explained)  
   - JSX  
   - State vs Props  
   - useState Hook  
   - Sharing State  
   - Event Handling  
6. [Challenge Requirements](#-challenge-requirements-completed)  
7. [Screenshots](#-screenshots)  
8. [Author](#-author)  

---

## 🚀 Features  

- **Navbar**  
  - Website name/logo on the left.  
  - Menu items + New Ticket button on the right.  

- **Banner**  
  - Gradient background (as per Figma).  
  - Shows ticket statistics:  
    - 📌 In Progress Count  
    - ✅ Resolved Count (default = 0).  

- **Main Section**  
  - **JSON Data (Tickets.json):** 10–15 tickets with:  
    `id`, `title`, `description`, `customer`, `priority`, `status`, `createdAt`.  
  - **Ticket Cards:** Grid layout showing ticket details.  
  - **Task Status Section:**  
    - Clicking a card adds it to **Task Status (right side)**.  
    - In Progress count increases.  
    - **Complete Button:**  
      - Moves task to **Resolved List**.  
      - Removes it from Customer Tickets & Task Status.  
      - Updates counts accordingly.  

- **Footer**  
  - Styled footer designed as per Figma.  

- **Toast Notifications**  
  - Alerts replaced with **React-Toastify** for better UX.  

- **Responsiveness**  
  - Fully responsive for **desktop & mobile**.  

---

## 📂 Project Structure  

## 📂 Project Structure  

```bash
Customer-Service-/
├── Customer Support — Ticket System.fig  # Figma design reference
├── eslint.config.js                      # ESLint configuration
├── index.html                            # Main HTML file
├── package.json                          # Project dependencies & scripts
├── package-lock.json                     # Lockfile (auto-generated)
├── public/
│   ├── Tickets.json                      # JSON dataset with tickets
│   └── vite.svg                          # Vite logo
├── README.md                             # Project documentation
├── src/
│   ├── App.css                           # App-level styling
│   ├── App.jsx                           # Main React component (logic + layout)
│   ├── assets/
│   │   └── react.svg                     # React logo asset
│   ├── components/                       # Reusable UI components
│   │   ├── Banner.jsx                    # Gradient banner with stats
│   │   ├── Footer.jsx                    # Footer section
│   │   ├── Navbar.jsx                    # Navigation bar
│   │   ├── TaskStatus.jsx                # Task Status (In Progress + Resolved)
│   │   └── TicketCard.jsx                # Ticket card layout
│   ├── index.css                         # Global Tailwind CSS styles
│   └── main.jsx                          # React entry point
├── vector1.png                           # Design vector (used in UI)
├── vector2.png                           # Design vector (used in UI)
└── vite.config.js                        # Vite configuration
```


---
