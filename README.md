# Mercari Playwright Tests

This repository contains Playwright tests for the Expo https://expo.dev/ React-Native website.

## Prerequisites

* Git
* Node.js and npm (or yarn)

## Installation

### Git

1. Download and install Git from the official website: https://git-scm.com/downloads.
2. Verify the installation by running `git --version` in your terminal. This should print the installed Git version.
3. You can also download files directly from github repository https://github.com/SaadiIftikhar/Mercari.git.

### Node.js and npm

1. Download and install Node.js from the official website: https://nodejs.org/
2. npm (Node Package Manager) will be bundled with your Node.js installation. Verify the installation by running `npm -v` in your terminal. This should print the installed npm version.

## Setting Up Playwright

1. Clone this repository using Git:

```bash
git clone https://github.com/SaadiIftikhar/Mercari.git
```

2. Navigate to the Project Directory:

```bash
cd Mercari
```

3. Install Playwright

```bash
npm init playwright@latest
```
It will ask the following
  * Do you want to use TypeScript or JavaScript? (Select JavaScript)
  * Where to put your end-to-end tests? (Enter value = tests)
  * Add a GitHub Actions workflow? (Select False)
  * Install Playwright browsers (can be done manually via 'npx playwright install')? (Select True)
  * Then it will ask you that some files already exists. Do you want to override it? (Select false for all)
  * Delete 'example.spec.js' file from tests folder (Optional) 
  * You are all set :)


## Running Tests
Once you are in the Mercari directory, you will be able to run these tests

1. Running tests in headless format

```bash
npx playwright test --reporter=line
```

2. Running tests through UI

```bash
npx playwright test --ui
```

3. Report can be generated using

```bash
npx playwright test --reporter=html
```

4. Report can be viewed using 
```bash
npx playwright show-report
```

The report can also be found in the playwright-report folder, the report file name will be index.html

## Videos Of Test Runs Through UI

Here’s the list of test cases numbered as you requested:

1. Verification of Sign Up checks

https://github.com/user-attachments/assets/48cb5106-2f95-45c5-b243-50e677c90043

2. Verification of second tab

https://github.com/user-attachments/assets/b4f69bc4-3684-4256-b11c-4f55bcea3905


3. Verification of API status and body elements

https://github.com/user-attachments/assets/4113a096-2456-4a9a-ac4d-2f04fd6d2113


4. Verification of hover action

https://github.com/user-attachments/assets/4f3254bc-aaf3-41b7-bfd6-ea3eeb99204a


5. Verification of UI using screenshot comparison

https://github.com/user-attachments/assets/affb5a9f-db46-48c9-a1f7-6dd6007f2a20


6. Verification of Landing page though element visibility and URL check

https://github.com/user-attachments/assets/214cd82a-b836-438f-87db-b211961c3172

## Generated Report Example

  ![Image](https://github.com/user-attachments/assets/9944e587-b83d-414e-a24e-24631b92f5d4)



