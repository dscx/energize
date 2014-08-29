var getDataByStateYear = function(year) {
  var temp = [];
  var obj = {};
  for ( var state in data ) {
    obj.state = data[state].state;
    obj.btu = data[state].data[2012-year][0];
    temp.push(obj);
    obj = {};
  }
  return temp;
};
updateYear(1960);
var dataYear;

var margin = { top: 40, right: 40, bottom: 40, left: 100 };
var width = 1000- margin.left - margin.right;
var tallness = 500 - margin.top - margin.bottom;

var xScale = d3.scale.ordinal()
  .rangeRoundBands([0, width], 0.25)
  .domain(dataYear.map(function(d) { return d.state; }));

var yScale = d3.scale.linear()
  .range([tallness, 0])
  .domain([0, 12562851])
  ;

var xAxis = d3.svg.axis()
  .scale(xScale)
  .orient('bottom')
  ;

var yAxis = d3.svg.axis()
  .scale(yScale)
  .orient('left')
  .ticks(5)
  ;

var chart = d3.select('#blueChart')
  .append('svg')
  .attr("width", width + margin.left + margin.right)
  .attr("height", tallness + margin.top + margin.bottom)
  .append('g')
  .attr('transform', 'translate('+margin.left + "," + margin.top + ")");
  
  chart.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + tallness + ")")
      .call(xAxis);

  chart.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("BTUs");

  chart.selectAll(".bar")
      .data(dataYear)
    .enter()
    .append("rect")
      .attr("class", "bar")
      .attr("x", function(d, i) { return xScale(d.state); })
      .attr("width", xScale.rangeBand())
      .attr("y", function(d, i) { return yScale(d.btu); })
      .attr("height", function(d) { return tallness - yScale(d.btu); })
        ;

  chart.append('title')
    .text('United States BTU consumption:');

  d3.select('#nYear').on('input', function() {
    dataYear = +this.value;
    update(dataYear);
  });
  
  function updateYear(nYear) {
    d3.select('#nYear-value').text(nYear);
    d3.select('#nYear').property('value', nYear);
    console.log(nYear);

    dataYear = getDataByStateYear(nYear);
  }

function update(data) {
  console.log(data);
  dataYear = getDataByStateYear(data);
  chart.selectAll('.bar')
    .remove()
    .data(dataYear)
    .enter()
    .append("rect")
      .attr("class", "bar")
      .attr("x", function(d, i) { return xScale(d.state); })
      .attr("width", xScale.rangeBand())
      .attr("y", function(d, i) { return yScale(d.btu); })
      .attr("height", function(d) { return tallness - yScale(d.btu); })
      ;
}

// Sort by State Check box
  d3.select('#sorter').on('change', change);

  function change() {

    // Copy-on-write since tweens are evaluated after a delay.
    var x0 = xScale.domain(dataYear.sort(this.checked
        ? function(a, b) { return b.btu - a.btu; }
        : function(a, b) { return d3.ascending(a.state, b.state); })
        .map(function(d) { return d.state; }))
        .copy();

    var transition = chart.transition().duration(500),
        delay = function(d, i) { return i * 50; };

    transition.selectAll(".bar")
        .delay(delay)
        .attr("x", function(d) { return x0(d.state); });

    transition.select(".x.axis")
        .call(xAxis)
      .selectAll("g")
        .delay(delay);
  }