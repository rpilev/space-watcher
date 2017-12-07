<p align="center">
  <img width="250" src="https://material.angularjs.org/latest/img/icons/angular-logo.svg">
</p>

# Space Watcher
Front-end demo of a space launch search system.

**Features include:**

* Looking up the latest rocket lanches
* Search for scheduled launches by date range

## Getting Started

### Prerequisites

Requirements to install and test this application:

    npm package-manager

### Installing

In your terminal clone the repository using

_HTTPS:_

    git clone https://github.com/rpilev/space-watcher.git
or

_SSH:_

    git clone git@github.com:rpilev/space-watcher.git

Install the dependencies

    npm install

For google maps to function you need to get an API key [here](https://developers.google.com/maps/documentation/javascript/get-api-key)

under app.module.ts insert the API key:

    AgmCoreModule.forRoot({
      apiKey: '*YOUR API KEY HERE*'
    }),

Run the dev server

    ng serve

If no other development servers are currently running on the local machine then the application should now be available for testing at:

[http://localhost:4200](http://localhost:4200)

## Built With

* [Angular 5](https://github.com/angular) (Bootstrapped with [Angular CLI](https://github.com/angular/angular-cli))
  * [NG Bootstrap](https://github.com/ng-bootstrap/ng-bootstrap)
* [Bootstrap](https://github.com/twbs/bootstrap)
* [Launch Library API](https://launchlibrary.net/docs/1.3/api.html)

## Authors
* Raul Špilev

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/rpilev/school-system/blob/master/LICENSE) file for details

## External links

Deployed preview available at:
[http://space-watcher.surge.sh/](http://space-watcher.surge.sh/)