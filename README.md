# Project Title

## Overview

SnowBuddy is a comprehensive web application designed to bring all essential information about Canadian ski resorts into one accessible platform. Users can explore resorts, find detailed information, and receive real-time updates on snow conditions and weather forecasts.

### Problem

Ski enthusiasts often struggle to find consolidated information about different ski resorts in Canada, such as trail maps, number of trails, and snow conditions, all in one place.

### User Profile

The primary users will be ski and snowboard enthusiasts, travel planners, and holiday-goers looking for resort information and snow conditions.

### Features

- List of ski resorts in Canada
- Detailed resort pages
- Real-time snow forecast and resort conditions

## Implementation

### Tech Stack

- React
- Express
- Node.js
- Mysql
- Client libraries: 
    - react
    - react-router
    - axios
- Server libraries:
    - knex
    - express

### APIs

- SnowForecast API for real-time snow conditions

### Sitemap

- Resort list page: Showcases a list of resorts
- Resort details page: Presents detailed information about each resort and live snow conditions

### Mockups

- Resort list page: 
![](resort-list-page.jpg)

- Resort details page: 
![](resort-details-page.jpg)


### Data

- Resort: Model for storing resort details including id, name, province, city, number of trails, base altitude, vertical and summit altitude, website, trail map etc.

### Endpoints

- GET /resorts: Retrieves a list of resorts
- GET /resorts/{id}: Provides detailed information about a specific resort

### Auth

- No authentication is needed for the first sprint. User accounts will be considered for future development sprints.

## Roadmap

- Create client
    - react project with routes and boilerplate pages

- Create server
    - express project with routing

- Frontend and backend development for resort list page

- Frontend and backend development for resort details page

- Feature: List resorts in Canada
    - Implement resort list page
    - Create GET /cafes endpoint

- Feature: View resort
    - Implement resort details page
    - Create GET /cafes/:id 

- Testing and bug fixes

- DEMO DAY

## Nice-to-haves

- Advanced filter options for finding resorts
- User profile page
- Registration and login pages
- Recording/tracking feature
- A social platform for users to rate resorts and share experiences
    - Rating system
    - Share location with nearby friends
- Carpool finder
- Marketplace for trading or selling snow gear

