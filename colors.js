// https://vida.io/documents/4vZ9mRGyepoyQxFcK
var COLOR_COUNTS = 6;

function Interpolate(start, end, steps, count) {
  return Math.floor( start + (((end - start) / steps) * count) );
}

function Color(_r, _g, _b) {
  var r, g, b;
  var setColors = function(_r, _g, _b) {
    r = _r;
    g = _g;
    b = _b;
  };

  setColors(_r, _g, _b);
  this.getColors = function() {
    var colors = {
      r: r,
      g: g,
      b: b
    };
    return colors;
  };
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// var COLOR_FIRST = "#c3e2ff", COLOR_LAST = "#08306B";
var COLOR_FIRST = "#FFCCCC", COLOR_LAST = "#8B0000";

var rgb = hexToRgb(COLOR_FIRST);

var COLOR_START = new Color(rgb.r, rgb.g, rgb.b);

rgb = hexToRgb(COLOR_LAST);
var COLOR_END = new Color(rgb.r, rgb.g, rgb.b);

var startColors = COLOR_START.getColors(),
    endColors = COLOR_END.getColors();

var colors = [];

for (var i = 0; i < COLOR_COUNTS; i++) {
  var r = Interpolate(startColors.r, endColors.r, COLOR_COUNTS, i);
  var g = Interpolate(startColors.g, endColors.g, COLOR_COUNTS, i);
  var b = Interpolate(startColors.b, endColors.b, COLOR_COUNTS, i);
  colors.push(new Color(r, g, b));
}

var quantize = d3.scale.quantize()
    // .domain([0, 1.0])
    .domain([Math.log(61434), Math.log(12281904)])
    .range(d3.range(COLOR_COUNTS).map(function(i) { return i; }));
