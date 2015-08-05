# generator-angular-es6-components 

> [Yeoman](http://yeoman.io) generator

This generator is used to create AngularJS 1.X component in an Angular 2 way. It generates every file necessary for a component in ES6. 

## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-angular-es6-components from npm, run:

```bash
npm install -g generator-angular-es6-components
```

Finally, initiate the generator (TODO: initial generator not done):

```bash
yo angular-es6-components
```

#### Project structure

```
├── app/                                * Source code of the application
│   ├── app.config.js                   * The config file of the application (routes, etc.)
│   ├── app.constants.js                * Constants (service urls, etc.)
│   ├── app.js                          * Declaration of the angular application 
│   ├── app.run.js                      * The first file to run when application starts
│   ├── assets/                         * Images, etc.
│   ├── components/                     * The main components
│   │   ├── business/                   * Reusable components
│   │   ├── appName.components.js       * Declaration of the components
│   │   ├── container/                  * The container of every views
│   │   ├── orchestration/              * Event listening and forwarding
│   │   └── plugins/                    * Plugins components (event, http, etc.)
│   ├── css/                            * Global CSS files
│   ├── index.html                      * Entry point HTML
│   ├── init.js                         * Entry point JS (angular bootstaping pollyfills)
│   └── views/                          * Views of the application, use container components
├── bower_components/                   * Third party libraries install via bower
├── bower.json                          * The list of the third party libraries
├── coverage/                           * The result of the unit test coverage
├── dist/                               * The compiled application via gulp
├── e2e/                                * The e2e tests
│   ├── dist/                           * Compiled e2e tests
│   └── src/                            * Source e2e tests (ES6)
├── gulpfile.js                         * Contains the gulp build tasks
├── karma.conf.js                       * The config file for karma test runner
├── mobile/                             * The cordova directory project
│   ├── config.xml                      * Cordova config file
│   ├── hooks/                          * Used for plugins
│   ├── platforms/                      * Cordova platforms
│   ├── plugins/                        * Cordova plugins
│   ├── res/                            * Resource files (splash, icons, etc.)
│   └── www/                            * Compiled web source files
├── node_modules/                       * Third party libraries used for gulp
├── package.json                        * The list of the third party libraries for gulp
├── protractor.conf.js                  * The config file for e2e tests
└── README.md 
```

### Create a component

```shell
yo angular-es6-components:component newComponent
``` 

This will generate a new component in the selected module. Don't forget to add it to the parent module.

#### Component architecture

```
├── product/                        * Component directory
│   ├── product.controller.js       * Component controller (no logic)
│   ├── product.controller.spec.js  * Unit test file for the controller
│   ├── product.css                 * Style
│   ├── product.directive.js        * Angular directive, parameters declaration
│   ├── product.html                * View
│   ├── product.js                  * Angular component declaration in a scoped module
│   ├── product.service.js          * Service (logic)
│   └── product.service.spec.js     * Service unit test
└── appName.business.js           * Parent module definition registering child components
```

# TODO

* Complete tests
* Directive caps dash
* Initial generator

## License

MIT
