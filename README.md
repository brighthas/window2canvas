
# window2canvas

  window mouse position transform to canvas position.

## Installation

  Install with [component(1)](http://component.io):

    $ component install brighthas/window2canvas

## API

    var w2c = require("window2canvas");
    var cavansXY = w2c(canvasElement,clientX,clientY);
    console.log(cavansXY.x , cavansXY.y);

## License

  MIT
