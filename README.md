1-we can open vs code from cmd using this command: code .
_________________________________________________________________

2-Get back to the root directory of a Windows drive (like c:\)
use this command: cd\
__________________________________________________________________

If you are getting these types of error while doing ng serve -o
Your global Angular CLI version (1.5.0) is greater than your local
version (1.3.1). The local Angular CLI version is used.

Please find the fix below:-

3- how to uninstall old angular cli versions:

npm uninstall -g angular-cli
npm cache clean
__________________________________________________________________

4- re-install angular cli

global package:
npm install -g @angular/cli@latest

local package:
npm install --save-dev @angular/cli@latest
______________________________________________________________________

read URL: https://www.techiediaries.com/updating-angular-cli-projects/
______________________________________________________________________

# PassingData

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
