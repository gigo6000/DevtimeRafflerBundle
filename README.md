# Raffler Bundle [![Build Status](https://secure.travis-ci.org/gigo6000/DevtimeRafflerBundle.png?branch=master)](http://travis-ci.org/gigo6000/DevtimeRafflerBundle)

This bundle is a simple backbone.js + Symfony2 app created using https://github.com/gigo6000/DevtimeBackboneBundle, it also uses Twitter bootstrap. 

It allows you to get a ramdom winner from a list of names.

Follow [@gigo6000 on Twitter](http://twitter.com/gigo6000). Tweet any questions or suggestions you have about the project.

## What you need 
This bundle requires Symfony 2.1.1 or greater (it probably works in older versions but not tested)

    
## Installation

### Step 1: Download DevtimeRafflerBundle using composer

Add DevtimeRafflerBundle to your composer.json:

```js
{
    "require": {
        "devtime/raffler-bundle": "dev-master"
    }
}
```

Now tell *composer to download the bundle by running the command:

``` bash
$ php composer.phar update devtime/raffler-bundle
```

Composer will install the bundle to your project's `vendor/devtime` directory.

* Note: If you don't have Composer yet, download it following the instructions on
http://getcomposer.org/ or just run the following command:

``` bash
curl -s https://getcomposer.org/installer | php 
```

### Step 2: Enable the bundle

Enable the bundle in the kernel:

``` php
<?php
// app/AppKernel.php

public function registerBundles()
{
    $bundles = array(
        // ...
        new Devtime\Bundle\RafflerBundle\DevtimeRafflerBundle(),
    );
}
```

### Step 2: Import routes

Import the bundle routes by adding the following code to your application’s routing file:

``` yml
devtime_raffler:
    resource: "@DevtimeRafflerBundle/Controller/"
    type:     annotation
    prefix:   /  
```

After this point you should be able to go to http://yoursite.local/raffler to see the app.
