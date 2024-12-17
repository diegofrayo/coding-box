# coding-box

## Motivation

I just want to have a simple playground to run JS code and so I can do some experiments and practice coding. There are many tools on internet to do the same, but they are not free, or they have many annoying restrictions, or they are expensive to run. Also, in this way I can take advantage of my Code Editor DX experience.

## Usage

1. Create a JS file inside `/playground`
1. The JS file just has to have this structure
    ```
    const Utils = require("../src/utils");

    function main() {
      console.log("Whatever you want!!!");
    }

    main();

    module.exports = main;

    // --- Utils ---

    function util() {}
    ```
1. Run `npm run watch`. This task executes a watcher that prints on the console the logs output of the any JS file updated or created inside `/playground`
1. This is all!!