Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Peaches', 'Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Parker and Marley\'s house'
      }
    },
    series: [{
      name: 'Parker',
      data: [6, 3, 2, 5]
    }, {
      name: 'Marley',
      data: [6, 1, 1, 0]
    }]
  });