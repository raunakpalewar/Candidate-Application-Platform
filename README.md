# Job Search Application

## Overview

The Job Search Application is a web application designed to help users search for job listings based on various criteria such as company name, location, job role, minimum experience, minimum base pay, and whether the job is remote or onsite. It provides a user-friendly interface for filtering and browsing job listings, with support for infinite scrolling to load more job listings dynamically.


![Simple Browser Screenshot](./weekday.png)


## Features

- **Job Filtering:** Users can filter job listings based on multiple criteria including minimum experience, company name, location, remote/onsite status, job role, and minimum base pay.
- **Infinite Scrolling:** The application supports infinite scrolling, allowing users to dynamically load more job listings as they scroll down the page.
- **Responsive Design:** The user interface is designed to be responsive, providing a seamless experience across different devices and screen sizes.
- **Error Handling:** Error handling is implemented to handle cases such as failed data fetching or invalid input.
- **Clear UI Feedback:** The application provides clear feedback to users when filtering results or loading more job listings.

## Technologies Used

- **React:** The front-end of the application is built using React, a popular JavaScript library for building user interfaces.
- **Axios:** Axios is used for making HTTP requests to fetch job data from the server.
- **CSS:** Custom CSS styles are used for styling the user interface components.
- **Infinite Scroll:** The application utilizes an Infinite Scroll component to implement dynamic loading of job listings.
- **JSON Data:** Job listings data is stored in a JSON file (`data.json`) and fetched dynamically from the server.

## Installation

To run the application locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using npm or yarn:
   ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```
5. Open your web browser and navigate to http://localhost:3000 to view the application.

## Usage 
- Upon opening the application, users are presented with a search interface where they can apply various filters to search for job listings.
- Users can adjust filter criteria such as minimum experience, company name, location, remote/onsite status, job role, and minimum base pay.
- Job listings are dynamically updated based on the applied filters, with support for infinite scrolling to load more listings.
- Users can click on individual job listings to view more details about each job.