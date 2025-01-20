Mercari Playwright Testing Repository
d
Welcome to the Mercari Playwright Testing Repository. This README will guide you through downloading and installing the required tools, running tests, and generating reports.
Table of Contents

    Downloading and Installing Git
    Cloning the Repository
    Installing Playwright and Prerequisites
    Running Playwright Tests
    Uploading Test Case Run Videos
    Demonstration Videos

Downloading and Installing Git
Step 1: Download Git

    Visit Git's official website.
    Click on the download button suitable for your operating system (Windows, macOS, Linux).

Step 2: Install Git

    Follow the installation instructions provided for your operating system.

Step 3: Verify Installation

    Open a terminal or command prompt.
    Run the following command to verify Git installation:

    git --version

    This should display the installed Git version.

Cloning the Repository

Once Git is installed, you can clone this repository using the following steps:

    Open a terminal or command prompt.
    Navigate to the directory where you want to clone the repository.
    Run the command:

    git clone https://github.com/SaadiIftikhar/Mercari.git

This will create a local copy of the repository on your machine.
Installing Playwright and Prerequisites
Step 1: Install Node.js

    Visit Node.js official website.
    Download and install the LTS version of Node.js suitable for your operating system.

Step 2: Install Playwright

    Open a terminal or command prompt.
    Navigate to the cloned repository's directory.
    Run the following command to install Playwright:

    npm install playwright

Running Playwright Tests

You can run the Playwright tests using the following commands:
Headless Run

To execute tests in headless mode:

npx playwright test --reporter=line

Report Generation

To generate an HTML report of the test results:

npx playwright test --reporter=html

Show Report

To display the generated HTML report:

npx playwright show-report

Non-Headless Run

To run tests with the UI (non-headless mode):

npx playwright test --ui

Uploading Test Case Run Videos

You will upload videos demonstrating the execution of six test cases. These videos will be included in this repository to provide a visual understanding of the tests.
Demonstration Videos

    Headless Run Video: A video showcasing the headless run of the tests.
    Report Generation Video: A video demonstrating the report generation and viewing process.
