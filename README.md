# weather-app

Weather application using Weather API

Link: https://www.weatherapi.com/

You can check how it works here: https://weather-app-murashkoil.netlify.app/

## Task

https://docs.google.com/document/d/1GLfIU93NLco1XkdUXnje-kPpvEEal6Q_jCXv4keKU_U/edit#

## How to use

When you click on the link, you get to the Home page
### Home page
Home page represents weather for your current location:
* Current city name
* Temperature
* Weather icon
* Weather status
* Humidity
* Pressure
* Wind speed
* Sunset and sunrise time
* Current day forecast
* Forecast for next two days

### Saved page
Saved page represents:
* Input field for searching cities
* Saved cities cards

#### Saved card
Contains: 
* City name
* City temperature
* Weather icon
* Country name
* Humidity
* Wind speed
* Delete button

On card click: 
* Display detailed information about the city

On input: 
* Insert city name and click to "Like" button to add this city to saved cards

## Settings page
Settings page represent:
* The same info about current weather like at Home Page
* Switch between temperature (ºC or ºF)
* Switch between wind speed (km/h or m/s)
* Switch between theme (Light or Dark)

## Folder structure

.
├── .husky
├── dist
├── node_modules
├── public
    ├── index.html
├── src
    ├── helpers
        ├── dom.js
        ├── emitter.js
        ├── localstorage.js
        ├── observer.js
        ├── render.js
        ├── selectors.js
    ├── js
        ├── pages
            ├── error
                ├── error.js
            ├── home
                ├── home.js
            ├── saved
                ├── saved.js
                ├── savedRenders.js
            ├── settings
                ├── settings.js
        ├── dataManager.js
        ├── router.js
        ├── weather.js
    ├── styles
        ├── pages
            ├── footer.scss
            ├── home.scss
            ├── saved.scss
            ├── settings.scss
        ├── error.scss
        ├── index.scss
        ├── styles.scss
        ├── theme.scss
    ├── templates
        ├── error.template.js
        ├── home.tempalate.js
        ├── saved.template.js
        ├── settings.template.js
    ├── index.js
├── tests
    ├──



├── .babelrc
├── .eslintignore
├── .eslint.json
├── .gitignore
├── .prettierrc
├── package-lock.json
├── package.json
├── README.md
├── webpack.config.js

