import React from 'react';
import {Doughnut, Chart} from "react-chartjs-2";

var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    originalDoughnutDraw.apply(this, arguments);
    
    var chart = this.chart.chart;
    var ctx = chart.ctx;
    var width = chart.width;
    var height = chart.height;

    //var fontSize = (height / 114).toFixed(2);
    const fontSize = 1.5;
    ctx.font = fontSize + "rem Verdana";
    ctx.textBaseline = "middle";

    var text = chart.config.data.doughTotalSale,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;

    ctx.fillText(text, textX, textY);
  }
});

export default class DoughSale extends React.Component {
  render(props) {
    return (
      <Doughnut 
        data={this.props.data}
        options={this.props.options}
        width={this.props.width}
        height={this.props.height}
      />
    );
  }
}

// export default DoughSale;