# Personal Dashboard 
Created a personal dashboard that can be added to the chrome extension. 
he dashboard currently displays the information on Cryptocurrency - such as current market value, 24hour high market value and 24 hour low value , it also displays the current time in your city, and also the current weather information in your city.

## Table of Contents

- [Overview](#overview)
- [Screenshot](#screenshot)
- [Links](#links)
- [Built With](#built-with)
- [What I Learned](#what-i-learned)
- [Acknowledgments](#acknowledgments)

## Overview
The personal dashboard uses https://openweathermap.org and https://www.coingecko.com/api/ API to give data on weather and cryptocurrency.

# Screenshot
<img width="791" height="495" alt="Screenshot 2025-11-05 at 12 01 37 PM" src="https://github.com/user-attachments/assets/113dd364-0e09-49ba-9765-26fa51064cd0" />
<img width="392" height="622" alt="Screenshot 2025-11-05 at 12 00 58 PM" src="https://github.com/user-attachments/assets/a430e5ab-bb32-44aa-b008-b3240b3f730d" />

### Built-with
Vanilla JS
Responsive design
HTML/CSS/Flexbox
API Intergration

### What I learned
Understanding the API documenation to fetch the required data.
Handling error that is thrown in the .then() block, and using .catch() to display default information in case of an error.
```
   if(!res.ok) {
            throw Error("Error : ", res.status)
        }

   .then()
     .catch(err => console.error(err))     
```        
Learnt how we can use the below code to display the time in a required format. 

```
const date = new Date();
date.toLocaleString('en-us', {timeStyle: "medium"})
```
And update the time using : 
```
setInterval(getCurrentTime ,1000)
```
Learnt about Geolocation API object and getCurrentPosition() method
```
navigator.geolocation.getCurrentPosition(position => { })
```
 

### Acknowledgments 
https://openweathermap.org/weather-conditions //for weather icon
https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition //for get the current position of the user
https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#getting_the_current_position //understanding geolocation API
https://openweathermap.org/current#geo //open Weather api
https://stackoverflow.com/questions/14638018/current-time-formatting-with-javascript // displaying the time in required format
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString#parameters //for time display
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters
https://www.coingecko.com/api/documentations/v3#/ //coinGecko api
https://unsplash.com/t/nature // to display a background image and its author name
