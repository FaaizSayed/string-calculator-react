# 🧪 String Calculator - TDD (React + TypeScript)

This project implements the classic String Calculator TDD as a simple React application using **TypeScript**, **React** **Vite**, **Jest**, and **React Testing Library**.

It demonstrates Test-Driven Development (TDD) by evolving the solution feature by feature with test coverage at every step.

---

## 🚀 Features

- Add numbers from a string (e.g. `"1,2"` → `3`)
- Supports:
  - Empty string input
  - One or multiple comma-separated numbers
  - New line as delimiter (e.g. `"1\n2,3"`)
  - Custom delimiters (e.g. `"//;\n1;2"`)
  - Throws on negative numbers with full error message
- Built with TDD using `jest` and `@testing-library/react`
- Fully typed with TypeScript
- Runs in a browser with a simple UI

---

## 📦 Tech Stack

- **React + TypeScript**
- **Vite** (bundler)
- **Jest** (test runner)
- **React Testing Library**
- **ESLint + Prettier** (optional)

---

## 🛠 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/string-calculator-react.git
cd string-calculator-react
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm run dev
```


## 🧪 Running Tests

### 1. Install Required Test Packages
Make sure these are installed:
```bash
npm install --save-dev jest ts-jest @types/jest ts-node jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```

### 2. Run Tests

```bash
npm test
```

### 3. All unit tests for the add() function are located in:

```bash
src/utils/stringCalculator.test.ts
```

## 📁 Project Structure

```bash
string-calculator-react/
├── src/
│   ├── App.tsx                # Main React UI
│   ├── main.tsx               # Entry point
│   ├── utils/
│   │   └── stringCalculator.ts       # Core logic
│   │   └── stringCalculator.test.ts  # TDD tests
│   └── setupTests.ts          # Jest setup (RTL, etc.)
├── jest.config.ts             # Jest config file
├── tsconfig.json
├── package.json
└── README.md
```

## 📁 💻 Example Inputs

```bash
| Input        | Output                                     |
| ------------ | ------------------------------------------ |
| `""`         | `0`                                        |
| `"1"`        | `1`                                        |
| `"1,2"`      | `3`                                        |
| `"1\n2,3"`   | `6`                                        |
| `"//;\n1;2"` | `3`                                        |
| `"1,-2"`     | ❌ `Error: negative numbers not allowed -2` |
```

## 💡 Notes

- This project was built using TDD principles with clean, incremental commits.
- TypeScript and ESLint are used to enforce type safety and best practices.
- Vite provides a super-fast local dev server and HMR.

## 📸 Screenshots
