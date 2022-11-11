const express = require('express');
const app = express();
const fs = require('fs');
const sortDistance = require('sort-distance');

app.get('/stationList', function (req, res) {
  var latitude = req.param('latitude');
  var longitude = req.param('longitude')

  const jsonFile = fs.readFileSync('./SeoulCapitalArea.json');
  const jsonData = JSON.parse(jsonFile)

  const stationList = jsonData.DATA

  const opts = {
    yName: "station_lat",
    xName: "station_long"
  };

  const origin = {station_lat: latitude, station_long: longitude}

  console.log(sortDistance(origin, stationList, opts))
  res.json(sortDistance(origin, stationList, opts))
});

app.listen(3001, () => {
  console.log('Start Server : localhost:3001');
});
// app.listen(3001, () => {
//   console.log('Start Server : localhost:3001');
// });