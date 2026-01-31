# ITPM Assignment 01 - IT23136588

## Singlish to Sinhala Translator - Playwright Test Suite

This project contains automated test cases for testing the Singlish to Sinhala translator at [Swift Translator](https://www.swifttranslator.com/).

## Project Structure

```
IT23136588/
├── IT23136588_GitHub_Link.txt    # GitHub repository link
├── IT23136588_TestCases.xlsx     # Excel file with test cases
├── README.md                      # This file
├── package.json                   # Root dependencies
├── singlish-playwright/           # Playwright project
│   ├── .github/workflows/         # GitHub Actions
│   ├── tests/
│   │   ├── IT23136588_positive_functional.spec.ts
│   │   ├── IT23136588_negative_functional.spec.ts
│   │   ├── IT23136588_positive_ui.spec.ts
│   │   └── IT23136588_negative_ui.spec.ts
│   ├── playwright.config.js
│   └── package.json
└── test-results/                  # Test execution results
```

## Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)

## Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/ITPM-Assignment-01-IT23136588.git
cd ITPM-Assignment-01-IT23136588
```

2. Install dependencies:
```bash
cd singlish-playwright
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install chromium
```

## Running Tests

### Run all tests:
```bash
cd singlish-playwright
npx playwright test
```

### Run specific test files:
```bash
npx playwright test IT23136588_positive_functional.spec.ts
npx playwright test IT23136588_negative_functional.spec.ts
npx playwright test IT23136588_positive_ui.spec.ts
npx playwright test IT23136588_negative_ui.spec.ts
```

### Run tests with UI:
```bash
npx playwright test --ui
```

### View test report:
```bash
npx playwright show-report
```

## Test Cases Summary

| Category | File | Count |
|----------|------|-------|
| Positive Functional | IT23136588_positive_functional.spec.ts | 37 |
| Negative Functional | IT23136588_negative_functional.spec.ts | 12 |
| Positive UI | IT23136588_positive_ui.spec.ts | 2 |
| Negative UI | IT23136588_negative_ui.spec.ts | 1 |
| **Total** | | **52** |

### Expected Test Results

- **40 tests pass** - These verify correct translator behavior
- **12 tests fail** - These are intentional failures demonstrating edge cases the translator cannot handle (e.g., joined words, slang, special characters, QQ notation)

## Author

- Registration Number: IT23136588

## License

This project is for educational purposes only.
