# AngularJS 1.X Seed with ES6, component based

## Description

This project is a seed to get started with angular 1.X written in ES6 with the component pattern. 
Possibility to make a mobile application using cordova or even an accelerated webview with cocoonjs.

## Dependencies

* nodejs/npm
* gulp
* bower

`npm install -g bower gulp`

## Run the application

`gulp`

## Directory layout

TODO

## Running on mobile

### Dependencies

* cordova
* cocoonjs

`npm install -g cordova cocoonjs`

### Running

See package.json scripts. First, add a platform, copy the files to mobile/www and then run cordova. Or simplified:

Add android platform:
`npm run-script redeploy-android`

Run on mobile:
`npm run-script mobile`

## Testing

### Unit tests

#### Dependencies

* karma

`npm install -g karma-cli`

#### Run the unit tests

`npm test`

### E2E tests

`gulp e2e`

## Useful links

### Angular with ES6

* http://cameronjroe.com/code/angular-movie-search/
* http://busypeoples.github.io/post/testing-angular-es6/
* http://www.michaelbromley.co.uk/blog/350/exploring-es6-classes-in-angularjs-1-x
* https://github.com/michaelbromley/angular-es6
* https://github.com/Swimlane/angular-systemjs-seed
* https://github.com/gocardless/es6-angularjs
* https://github.com/angular/material-start/tree/es6
* http://rangle.io/blog/how-to-embrace-angular-2-today-with-future-friendly-angular-1-3/

### Browserify

http://benclinkinbeard.com/talks/2014/ng-conf

### ES6 itself

* http://cameronjroe.com/code/angular-movie-search/
* http://es6-features.org