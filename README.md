# js-playground

## Motivation

I just want to have a simple playground to run JS code and so I can do some experiments and practice coding. There are many tools on internet to do the same, but they are not free, or they have many annoying restrictions, or they are expensive to run. Also, in this way I can take advantage of the nice VSCode's DX experience.

## Usage

1. Create a JS file inside of `playground` folder
1. The JS file just has to have this structure
    ```
    function main() {
      console.log("Whatever you want!!!");
    }

    main();

    module.exports = main;
    ```
1. Run `npm run watch`. This task executes a watcher that prints on the console the output of the any JS file updated or created inside of `playground` folder
1. That is all!!