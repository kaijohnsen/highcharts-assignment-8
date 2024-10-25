//Container Source: https://www.bls.gov/iif/fatal-injuries-tables/archive.htm#DATA
//Container 2Source: https://www.bls.gov/iif/fatal-injuries-tables/fatal-occupational-injuries-table-a-1-2022.htm
Highcharts.chart('container', {

    title: {
        text: 'Comparison of Fatal Workplace Injuries from 2012-2022',
        align: 'left'
    },

    subtitle: {
        text: 'By Kai Johnsen. Source: <a href="https://www.bls.gov/iif/fatal-injuries-tables/archive.htm#DATA" target="_blank">U.S. Bureau of Labor Statistics</a>.',
        align: 'left'
    },

    yAxis: {
        title: {
            text: 'Number of Accidents'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2012 to 2022'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2012
        }
    },

    series: [{
        name: 'Transportation Accidents',
        data: [
            1923, 1865, 1984, 2054, 2083, 2077, 2080, 2122, 1778, 1982, 2066
        ]
    }, {
        name: 'Exposure to Harmful Substances',
        data: [
            340, 335, 390, 424, 518, 531, 621, 642, 672, 798, 839
        ]
    }, {
        name: 'Contact with Object and Equipment',
        data: [
           723, 721, 715, 722, 761, 695, 786, 632, 716, 705, 738
        ]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

Highcharts.chart('container2', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Fatal Workplace Injuries Grouped by Industry and Accident in 2022',
        align: 'left'
    },

    xAxis: {
        categories: ['Transportation Accidents', 'Exposure to Harmful Substances', 'Contact with Object and Equipment']
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Count injuries'
        }
    },

    tooltip: {
        format: '<b>{key}</b><br/>{series.name}: {y}<br/>' +
            'Total: {point.stackTotal}'
    },

    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },

    series: [{
        name: 'Natural resources and mining',
        data: [214, 42, 177],
        stack: 'Industry'
    }, {
        name: 'Construction',
        data: [243, 194, 149],
        stack: 'Industry'
    }, {
        name: 'Manufacturing',
        data: [98, 79, 118],
        stack: 'Industry'
    }, {
        name: 'Trade, transportation and utilities',
        data: [907, 150, 140],
        stack: 'Industry'
    }]
});
