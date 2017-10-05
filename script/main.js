var time = new Date();
var check = time.getTime();
console.log(check);

//size svg variable
var outerWidth = 1600;
var outerHeight = 800;
console.log(outerWidth);

//insert svg in body
var svg = d3.select("body").append("svg")
.attr("width", outerWidth)
.attr("height", outerHeight);

//Create scale variable
var scale = d3.scaleLinear();
var xScale = d3.scaleBand();

//load data
d3.tsv("data.tsv",function(err, data){
  //log err if there is an error
  if(err){
    console.log(err);
  }

  //call funtion
  createScale(data);
  renderData(data);
});

//Create scale
function createScale(data){
  //get range min/max of data
  let dataMin = d3.min(data, (d)=>+d.speakers);//get max value of data
  let dataMax = d3.max(data, (d)=>+d.speakers);//get min value of data
  scale.domain([dataMin, dataMax]) //Data space
  .range([0,outerWidth]); //Pixel spae

}

//Render data
function renderData(data){

var axis = d3.axisLeft(scale);

  svg.append("g")
  .attr("class", "axis axis--x")
  .call(d3.axisBottom(scale));

  svg.selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", (d)=>{
    return scale(d.speakers);
  })
  .attr("y", 50)
  .attr("width", 50)
  .attr("height", 50);
}
