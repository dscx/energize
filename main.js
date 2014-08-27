var width = window.innerWidth;
var height = window.innerHeight - 15;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var years = [2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 1989, 1988, 1987, 1986, 1985, 1984, 1983, 1982, 1981, 1980, 1979, 1978, 1977, 1976, 1975, 1974, 1973, 1972, 1971, 1970, 1969, 1968, 1967, 1966, 1965, 1964, 1963, 1962, 1961, 1960];
var states = ["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];
var compass = ["n", "s", "e", "w"];
var yearPicked = 0;
var statePicked;
var color = d3.scale.category10();
var nodes;

//tooltip
var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([0, 0])
  .direction(function(d){
    return compass[Math.floor(Math.random() * 4)];
  })
  .html(function(d){
    return "<strong>"+ this.id +"</strong><span style='red'> " + d + " Billion BTU's" + "</span>";
  });

var drag = d3.behavior.drag()
    .on('drag', function() { 
      d3.select(this).attr('cx', d3.event.x)
                    .attr('cy', d3.event.y);
    });

//sets new random location at bottom of svg
var move = function(transition){
  transition
        .attr("cx", function(d){return Math.floor((Math.random() * width));})
        .attr("cy", function(d){return Math.floor(((Math.random() * d / 50000)) + height - 20);});
};

var clear = function(){
  d3.selectAll("circle").remove();
};


var yearSelector = function(year, set){
  set = set || data;
  yearPicked = years.indexOf(JSON.parse(year));

  set.forEach(function(d){
    var node = svg.selectAll("div")
      .data(d.data[yearPicked])
      .enter()
      .append('svg:circle')
        .attr("r", function(d) { return d / 50000; })
        .attr("cx", function(d){return Math.floor((Math.random() * width));})
        .attr("cy", function(d){return Math.floor((Math.random() * height));})
        .attr("class", "node")
        .attr("id", d.state)
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)
        .call(drag)
        .style("fill", function(){return '#'+Math.floor(Math.random()*16777215).toString(16); });
    });
};

//test feature for moving objects
// setInterval(function(){
// d3.selectAll('circle')
//     .transition().ease("bounce")
//     .call(move);

// }, 3000);


  svg.call(tip);

//year selection handling
$("form").on("submit", function(e) {
  e.preventDefault();
  var yearInput = $("#yearChoice").val();
  if(yearInput < 1960 || yearInput > 2012){ alert("Please pick a date between 1960 and 2012");}
    clear();
    yearSelector(yearInput);
    //force.start();
});

//starts the page with data
yearSelector(2012);


/*TODO
  implement state selector
  implement force

*/
