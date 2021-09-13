# Flight Search Engine

## Description
A responsive web test project using react, redux, express, material-icons.

This project does not use libraries such as jquery, bootstrap.

### Requirement:
node : 16.x.x or above 
npm : 7.x.x or above

### Data used for flights:
There is a file called flight.json inside 
```
cd ~/<root-dir>/src/utils/
```
This file contains mockup data used to perform search on flights.
Please refer to this file for making search query otherwise empty results will be shown.

## Sample search data:

### With returning journey:
Mumbai > New Delhi > Mumbai

**Depart:** *25-11-2021*

**Arrive:** *13-01-2022*

### One way:
Chennai > Ahmedabad

**Depart:** *26-12-2021*

### Steps to run this project:

First move to Project directory

```
cd ~/flight-search-engine
```
then

### 1. Install dependencies
```
npm install
```
### 2. Run the create-react-app development server
```
 npm run start
```
### 3. Run local deployment
```
 npm run build
 node server.js
```
### 4. See running project in local browser 
 ###
Open the [localhost](http://localhost:9000/) in browser

### 5. See live running project   
 ###
Open the [Flight Search Engine ](https://flight-availability-engine.herokuapp.com/) in browser

