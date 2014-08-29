var width = 960;
var height = 600;

var svg = d3.select("#redMap").append("svg")
    .attr("width", width)
    .attr("height", height);

var years = [2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 1989, 1988, 1987, 1986, 1985, 1984, 1983, 1982, 1981, 1980, 1979, 1978, 1977, 1976, 1975, 1974, 1973, 1972, 1971, 1970, 1969, 1968, 1967, 1966, 1965, 1964, 1963, 1962, 1961, 1960];
var states = ["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];

var year = 0;
var projection = d3.geo.albersUsa()
    .scale(1280)
    .translate([width / 2, height / 2]);
var path = d3.geo.path()
    .projection(projection);
var states = topojson.feature(us, us.objects.states);

svg.selectAll('.states')
    .data(topojson.feature(us, us.objects.states).features)
    .enter().append("path")
    .attr("id", function(d, i) {
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
        return "rgb(" + color.r + "," + color.g +
            "," + color.b + ")";
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
    .attr("d", path);

var yearSelector = function(year) {
  svg.selectAll('.state')
      .style('fill', function(d, i) {
        if(dataId[d.id]) {
          var stateIndex = dataId[d.id].index;
          var stateData = data[stateIndex];
          var stateYearData = stateData.data[year];
          var j = quantize(Math.log(stateYearData));
          var color = colors[j].getColors();
          return "rgb(" + color.r + "," + color.g +
              "," + color.b + ")";
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

//year selection handling
$("#yearChoice").change( function() {
  var yearInput = $("#yearChoice").val();
  if(yearInput >= 1960 && yearInput <= 2012){
    year = 2012 - yearInput;
    yearSelector(year);
  }
});

$("#yearChoice").on("focus", function() {
  clearInterval(cancelSetInterval);
});

var direction = 'down';

var yearInc = function() {
  $("#yearChoice").val(parseInt($("#yearChoice").val()) + 1);
  $("#yearChoice").change();
};

var yearDec = function() {
  $("#yearChoice").val(parseInt($("#yearChoice").val()) - 1);
  $("#yearChoice").change();
};

var cancelSetInterval;

setTimeout(function() {
  cancelSetInterval = setInterval(function() {
    if(direction === 'down') {
      if(year === 2012 - 1960) {
        direction = 'up';
        yearInc();
      } else {
        yearDec();
      }
    } else {
      if(year === 2012 - 2012) {
        direction = 'down';
        yearDec();
      } else {
        yearInc();
      }
    }
  }, 500);
}, 500);
