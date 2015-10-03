// create configuration object
var config = {
  container: document.getElementById('heatmapContainer'),
  radius: 10,
  maxOpacity: .5,
  minOpacity: 0,
  blur: .75,
  gradient: {
    // enter n keys between 0 and 1 here
    // for gradient color customization
    '.5': 'blue',
    '.8': 'red',
    '.95': 'white'
  }
};
var heatmapInstance = h337.create(config);

// a single datapoint
var dataPoint = {
  x: 5, // x coordinate of the datapoint, a number
  y: 5, // y coordinate of the datapoint, a number
  value: 100 // the value at datapoint(x, y)
};
heatmapInstance.addData(dataPoint);

// multiple datapoints (for data initialization use setData!!)
var dataPoints = [dataPoint, dataPoint, dataPoint, dataPoint];
heatmapInstance.addData(dataPoints);

var data = {
  max: 100,
  min: 0,
  data: [
    dataPoint, dataPoint, dataPoint, dataPoint
  ]
};
heatmapInstance.setData(data);

var currentData = heatmapInstance.getData();
// now let's create a new instance and set the data
var heatmap2 = h337.create(config);
heatmap2.setData(currentData); // now both heatmap instances have the same content

var nuConfig = {
  radius: 10,
  maxOpacity: .5,
  minOpacity: 0,
  blur: .75
};
heatmapInstance.configure(nuConfig);

heatmapInstance.addData({ x: 10, y: 10, value: 100});
// get the value at x=10, y=10
heatmapInstance.getValueAt({ x: 10, y: 10 }); // returns 100

heatmapInstance.getDataURL(); // data:image/png;base64...
// ready for saving locally or on the server
