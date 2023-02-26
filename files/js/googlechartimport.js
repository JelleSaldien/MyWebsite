

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var queryString = encodeURIComponent('SELECT A, C, D'); // Replace A and B with the column headers in your spreadsheet
  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1O1U5HUjsVnCu2f-DhbEjVxQD9apvfOojQ1IuJ4PS2Tw/gviz/tq?gid=465013469&headers=1&tq=' + queryString);
  query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
  var data = response.getDataTable();
  var options = {
    chart: {
      title: 'The Kahoot EmTech Quiz Scores',
    },
    bars: 'horizontal', // Change to 'vertical' if you want vertical bars
    stacked: true,
  };
  var chart = new google.charts.Bar(document.getElementById('chart_div'));
 
  function resizeChart() {
    chart.draw(data, options);
  }

  window.addEventListener('resize', resizeChart);
  resizeChart();
}