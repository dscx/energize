var width = 960;
var height = 600;
var interval = 700; // in ms
var transitionInterval = 350;
var easeType = 'bounce';
var direction = 'down';
var cancelSetInterval;
var year = 0; // must equal input range and span for everything to sync properly

var svg = d3.select('#redMap').append('svg')
    .attr('width', width)
    .attr('height', height);

var projection = d3.geo.albersUsa()
    .scale(1280)
    .translate([width / 2, height / 2]);

var path = d3.geo.path()
    .projection(projection);

var states = topojson.feature(us, us.objects.states);

// renders map w/ values from initial year
svg.selectAll('.state')
    .data(topojson.feature(us, us.objects.states).features)
    .enter().append('path')
    .attr('id', function(d, i) {
      if(dataId[d.id])
        return dataId[d.id].abbr;
    })
    .style('fill', function(d, i) {
      if(dataId[d.id]) {
        var stateIndex = dataId[d.id].index;
        var stateData = data[stateIndex];
        var stateYearData = stateData.data[year];
        var j = quantize(Math.log(stateYearData));
        var color = colors[j].getColors();
        return 'rgb(' + color.r + ',' + color.g +
            ',' + color.b + ')';
      }
    })
    .attr('class', 'state')
    .attr('e', function(d) {
      if(dataId[d.id]) {
        var stateIndex = dataId[d.id].index;
        var stateData = data[stateIndex];
        var stateYearData = stateData.data[year];
        return stateYearData;
      }
    })
    .attr('d', path);

// updates colors of states as for different year
var yearSelector = function(year) {
  svg.selectAll('.state')
      .transition()
      .duration(transitionInterval)
      .ease(easeType)
      .style('fill', function(d, i) {
        if(dataId[d.id]) {
          var stateIndex = dataId[d.id].index;
          var stateData = data[stateIndex];
          var stateYearData = stateData.data[year];
          var j = quantize(Math.log(stateYearData));
          var color = colors[j].getColors();
          return 'rgb(' + color.r + ',' + color.g +
              ',' + color.b + ')';
        }
      })
      .attr('e', function(d) {
        if(dataId[d.id]) {
          var stateIndex = dataId[d.id].index;
          var stateData = data[stateIndex];
          var stateYearData = stateData.data[year];
          return stateYearData;
        }
      });
};

// when slider changes, updates everything accordingly
$('#nYear').change( function() {
  var yearInput = $('#nYear').val();
  if(yearInput >= 1960 && yearInput <= 2012){
    year = 2012 - yearInput;
    yearSelector(year);
  }
  dataYear = +this.value;
  update(dataYear);
  $('span').text(yearInput);
});

// automatic iteration stops after user clicks
$('body').on('click', function() {
  clearInterval(cancelSetInterval);
});

var yearInc = function() {
  $('#nYear').val(parseInt($('#nYear').val()) + 1);
  $('#nYear').change();
};

var yearDec = function() {
  $('#nYear').val(parseInt($('#nYear').val()) - 1);
  $('#nYear').change();
};

setTimeout(function() {
  cancelSetInterval = setInterval(function() {
    if(direction === 'down') {
      if(year === 2012 - 1960) {
        direction = 'up';
      } else {
        yearDec();
      }
    } else {
      if(year === 2012 - 2012) {
        direction = 'down';
      } else {
        yearInc();
      }
    }
  }, interval);
}, 500);
