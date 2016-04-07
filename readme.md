# hello-angular2

This is a simple app to learn some basics of an Angular 2 JavaScript application.

## MVC
To understand an Angular application, it helps to first understand the MVC pattern

- Model - the data used by the application
- View - how that data is presented
- Controller - manages changes to the model


## Angular Components
Components manage a part of the view. 
They do this by applying a view template to a selector.

- A template is just HTML that tells Angular how to show or render a view
- The selector is a CSS selector for the HTML tag where the view should be rendered

app.component.js file:
``` JavaScript
(function(app) { 
    app.AppComponent = ng.core.Component({ 
        selector: 'hello-app', 
        template: '<h1>Hello Angular 2</h1>' 
    }).Class({ 
        constructor: function() {} 
    }); 
})(window.app || (window.app = {}));
```

## Bootstrapping
To have Angular load a Component, we need to put it in the global app object then use Angular’s bootstrap method.

main.js file:
``` JavaScript
(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.AppComponent);
  });
})(window.app || (window.app = {}));
```

## HTML 
In our index HTML file, there are important libraries to be included in the head section.

- Polyfills - for IE and angular
- Reactive Extensions RxJS (for Ajax)
- Angular 2 

Then in the body, we have our static page HTML and the area that we want dynamically updated.  For this example that is the `<hello-app>` element.

index.html file:
``` html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello Angular 2</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="styles.css">

    <!-- IE required polyfill -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.0/es6-shim.min.js"></script>
    <script src="https://npmcdn.com/angular2@2.0.0-beta.13/es6/dev/src/testing/shims_for_IE.js"></script>   
    
    <!-- Angular 2 beta 13 -->    
    <script src="https://code.angularjs.org/2.0.0-beta.13/angular2-polyfills.js"></script>
    <script src="https://code.angularjs.org/2.0.0-beta.13/Rx.umd.js"></script>
    <script src="https://code.angularjs.org/2.0.0-beta.13/angular2-all.umd.dev.js"></script>

    <!-- Our Angular2 app Modules (order is important) -->
    <script src='app/app.component.js'></script>
    <script src='app/main.js'></script>

  </head>

  <body>
    <!-- my-app is the selector used by the Component -->
    <hello-app>Loading...</hello-app>
  </body>

</html>
```
