let myChart = document.getElementById('myChart').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let minnPopChart = new Chart(myChart, {
  // types: bar, pie, horizontalBar, line, doughnut, radar, polarArea
  type: 'bar',
  data: {
    labels: ['Minneapois', 'St. Paul', 'Rochester', 'Duluth', 'Bloomington'],
    datasets: [{
      label: 'Population',
      data: [404670, 297160, 111396, 86164, 85080],
      backgroundColor: ['#104E8B', '#B0171F', '#8B4789', '#CDAD00', '#458B74'],
      borderWidth: 1,
      borderColor: '#777',
      hoverBorderWidth: 3,
      hoverBorderColor: '#000',
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Largest Cities In Minnesota',
      fontSize: 25
    },
    legend: {
      // position: 'right'
        labels: {
      // fontColor: '#000'
      }
    },
    layout: {
      // padding: {
      //   left: 50,
      //   right: 0,
      //   bottom: 0,
      //   top: 0
    },
  }
});
