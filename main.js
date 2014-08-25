var colors = d3.scale.category20c();




//load the data
  d3.json("data/SEDS.json", function(states){
    //gives each state a color dot
    var dot = svg.append("g")
        .attr("class", "dot")
      .selectAll(".dot")
        .data(interpolateData(1000))
        .enter().append("circle")
          .attr("class", "dot")
          .style("fill", function(d) {return colors(color(d)); });
  });