# Project Title

## Overview

SnowBuddy is a comprehensive web application designed to bring all essential information about Canadian ski resorts into one accessible platform. Users can explore resorts, find detailed information, and receive real-time updates on snow conditions and weather forecasts.

### Problem

Ski enthusiasts often struggle to find consolidated information about different ski resorts in Canada, such as trail maps, number of trails, and snow conditions, all in one place.

### User Profile

The primary users will be ski and snowboard enthusiasts, travel planners, and holiday-goers looking for resort information and snow conditions.

### Features

- **List of Ski Resorts in Canada**: Users can view a sortable and searchable list of ski resorts.
- **Detailed Resort Pages**: Provides extensive information about each resort including trails, maps, and contact info.
- **Real-time Snow Forecast and Resort Conditions**: Integrates with the Open-meteo API to provide current weather conditions.
- **CRUD Ski Diary**: Users can record, update, and delete entries about their ski sessions.
- **Authentication and Authorization**: Secure login and sign-up capabilities for users to access personalized features like the ski diary.

## Implementation

### Tech Stack

### Frontend

- **React**: Used for building the user interface with interactive components.
- **React Router**: Manages navigation between different components.
- **Axios**: Handles HTTP requests to external APIs and the backend.

### Backend

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web application framework.
- **MySQL**: Database for storing user data and resort information.
- **Knex**: A SQL query builder that facilitates database interactions.

### APIs

- **Open-meteo API**: Utilized to fetch real-time weather conditions for various resorts.


### Sitemap

- ResortList page: Showcases a list of resorts
- ResortDetails page: Presents detailed information about each resort and snow forecast
- Logbook page: Allow users to create, read, update, delete ski diary
- Profile page: Welcome message
- Login/Sign Up page: Authorization and Authentication


### Mockups

- Resort list page: 
![](resort-list-page.jpg)

- Resort details page: 
![](resort-details-page.jpg)


#### Data
##### resorts
- resort_id: int
- resort_name: varchar
- city: varchar
- province: varchar
- country: varchar
- trail_count: int
- base_altitude: int
- summit_altitude: int
- vertical: int
- latitude: decimal
- longitude: decimal
- website: varchar
- map_url: varchar

#### Weather
- temperature_2m: decimal
- wind_speed_10m: decimal
- precipitation: decimal
- snowfall: decimal
- weathercode: int

#### Users
- user_id: int
- name: varchar
- username: varchar
- password: varchar

#### ski_diary
- user_id: int
- resort_id: int
- resort_name: varchar
- date: DATE
- start_time: TIME
- end_time: TIME



### Endpoints

**GET /api/resorts**
- Get all resorts

**GET /api/resorts/:id**
- Get a single resort by ID
Parameters:
- id: resort id as number

**GET /api/resorts//:id/weather**
- Get weather info by resort ID
Parameters:
- id: resort id as number

**POST /api/logbook**
- Logged in user can create a new ski diary entry

**GET /api/logbook**
- Logged in user can retrieve ski diary entries for the authenticated user

**PUT /api/logbook/:id**
- Logged in user can update a new ski diary entry

**DELETE /api/logbook/:id**
- Logged in user can delete a new ski diary entry

**POST /users/register**
- Add a user account
Parameters:
- name: User's name
- username: User's username
- password: User's provided password

**POST /users/login**
- Login a user
Parameters:
- username: User's username
- password: User's provided password

### Auth

- Authorization and authentication are implemented for personalized experiences such as Logbook and profile page.


## Installation
### Backend Setup
Navigate to the server directory and install the back-end dependencies
```
cd snowbuddy-server
```

Install dependencies
```
npm install
```

Use .env.sample as a template to create Environment File
- Create a new file named .env in the snowbuddy-server directory.
- Copy the content of .env.sample into .env.
- Replace placeholders <YOUR_DB_NAME>, <YOUR_DB_USER>, <YOUR_DB_PASSWORD> and <YOUR_SECRET_KEY> with your MySQL database details.

Create and configure the MySQL database:
```
CREATE DATABASE snowbuddy;
USE snowbuddy;
```

Create database tables with knex migrations
```
npm run migrate
```

Seed the tables with data
```
npm run seed
```

Start the server
```
npm start
```

### Frontend Setup
Navigate to the client directory and install the front-end dependencies

```
cd snowbuddy
```

Install nodeJS dependencies
```
npm install
```
Run React App
```
npm start
```


## Lessons Learned
- **React and State Management:** Enhanced understanding of React and state management for building interactive UIs.
- **API Design:** Learned best practices in RESTful API design and implementation using Express.
- **Secure Authentication:** Implemented secure registration and login processes.



## Next Steps
- **Enhance User Profiles:** Add more personalization and settings options.
- **Favorites Feature:** Enable users to save preferred resorts.
- **Social Features:**  Develop a community platform within the app for users to share experiences and reviews.
- **Marketplace and Carpool Options:** Add features to help users exchange gear and organize carpools.

