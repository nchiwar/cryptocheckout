# Crypto Checkout Assessment

A responsive, production-ready crypto payment flow built with React. This project demonstrates a clean UI/UX for converting crypto to fiat and completing a transaction, focusing on component modularity and state management.

## 🚀 Live Demo
https://cryptocheckout-ten.vercel.app/


## 🛠 Tech Stack
* **Framework**: React.js
* **Language**: TypeScript
* **Styling**: Tailwind CSS (Clean, responsive layout)
* **Routing**: React Router (Client-side navigation)
* **State Management**: React Context API (Global state for transaction flow)
* **Icons**: Lucide React

## ⚙️ Setup Instructions

To run this project locally, follow these steps:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/nchiwar/cryptocheckout.git
    cd cryptocheckout
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm start
    # or if using Vite:
    # npm run dev
    ```

4.  **Open in browser**
    Navigate to `http://localhost:3000` (or the port shown in your terminal).

## 🧩 Architectural Decisions & Trade-offs

### 1. State Management (Context API vs. Redux)
* **Decision**: I chose the **React Context API** over external libraries like Redux or Zustand.
* **Reasoning**: The scope of this application (5 screens, linear flow) does not require the boilerplate of a full state machine. Context provides sufficient power to persist user data (Amount, Recipient, Transaction Status) across routes without "prop drilling," while keeping the bundle size small.

### 2. Hardcoded Exchange Rates
* **Trade-off**: Real-time crypto pricing requires backend integration or third-party APIs (e.g., CoinGecko).
* **Assumption**: To focus on **UI quality and Component Structure** (as per the prompt), I mocked the exchange rate (1 ETH = 3,500,000 NGN) and API responses. In a production environment, this would rely on a `useQuery` hook fetching live data.

### 3. Component Structure
* **Decision**: I adopted an **Atomic Design** inspired approach.
    * `components/ui`: Reusable primitives (Buttons, Inputs, Cards).
    * `components/layout`: The consistent white-card wrapper used across the flow.
    * `pages`: Logic-heavy views that assemble the components.
* **Reasoning**: This separation makes the codebase scalable. If we need to change the "Primary Button" style later, we change it in one place, and it propagates everywhere.

### 4. Form Validation
* **Assumption**: I implemented client-side validation for the "Recipient" screen (checking bank selection and account number length).
* **Trade-off**: Backend validation (e.g., verifying if the account actually exists) is mocked via a timeout to simulate a network request.

## 📂 Folder Structure

```text
src/
├── components/
│   ├── layout/       # Shared Layout wrappers
│   └── ui/           # Buttons, Inputs, Selects
├── context/          # Global State (CheckoutContext)
├── pages/            # Calculator, Recipient, Payment, Success
├── utils/            # Helper functions (currency formatting)
└── App.tsx           # Route definitions