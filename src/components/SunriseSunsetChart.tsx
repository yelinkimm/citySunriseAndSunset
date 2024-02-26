import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  ChartData,
  Ticks
} from 'chart.js';
import { useEffect, useRef, useState } from "react";
import { faker } from '@faker-js/faker';
import { CityInfo } from "../routes/City";
import _ from "lodash";
import moment from "moment";
// import type { Chart, ChartType, ChartData, ChartOptions, DefaultDataPoint, Plugin, UpdateMode } from 'chart.js';
interface SunriseSunsetChartProps {
  cityInfo: CityInfo;
}

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

function triggerTooltip(chart: ChartJS | null) {
  const tooltip = chart?.tooltip;

  if (!tooltip) {
    return;
  }

  if (tooltip.getActiveElements().length > 0) {
    tooltip.setActiveElements([], { x: 0, y: 0 });
  } else {
    const { chartArea } = chart;

    tooltip.setActiveElements(
      [
        {
          datasetIndex: 0,
          index: 2,
        },
        {
          datasetIndex: 1,
          index: 2,
        },
      ],
      {
        x: (chartArea.left + chartArea.right) / 2,
        y: (chartArea.top + chartArea.bottom) / 2,
      }
    );
  }

  chart.update();
}

function SunriseSunsetChart({ cityInfo }: SunriseSunsetChartProps) {
  const [dateLabels, setDateLabels] = useState<string[]>([]);
  const [chartData, setChartData] = useState<ChartData>();
 

const chartRef = useRef<ChartJS>(null);
  useEffect(() => {
    // const chart = chartRef.current;

    // triggerTooltip(chart);
    if (cityInfo) {
      setDateLabels(_.map(cityInfo?.results, "date"));
      console.log('qqq cityInfo: ', cityInfo)
    }
  }, [cityInfo]);

  useEffect(() => {
    const data = {
      labels: dateLabels,
      datasets: [
        {
          type: 'line' as const,
          label: 'sunrise',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 2,
          fill: false,
          data: _.map(cityInfo?.results, (infoItem) => moment(`${infoItem.date} ${infoItem.sunrise}`).valueOf()),
          yAxisID: 'y',
        },
        {
          type: 'line' as const,
          label: 'sunset',
          borderColor: 'rgb(99, 224, 255)',
          borderWidth: 2,
          fill: false,
          data: _.map(cityInfo?.results, (infoItem) => moment(`${infoItem.date} ${infoItem.sunset}`).valueOf()),
          yAxisID: 'y1',
        },
        // {
        //   type: 'line' as const,
        //   label: 'sunset',
        //   backgroundColor: 'rgb(75, 192, 192)',
        //   data: _.map(cityInfo?.results, (infoItem) => moment(`${infoItem.date} ${infoItem.sunset}`).valueOf()),
        //   // borderColor: 'white',
        //   borderWidth: 2,
        // },
        // {
        //   type: 'line' as const,
        //   label: 'golden hour',
        //   backgroundColor: 'rgb(53, 162, 235)',
        //   data: _.map(cityInfo?.results, (infoItem) => moment(`${infoItem.date} ${infoItem.golden_hour}`).valueOf()),
        // },
      ]
    };
    setChartData(data);
    const testdata = _.map(cityInfo?.results, (infoItem) => moment(`${infoItem.date} ${infoItem.sunrise}`).valueOf());
  }, [dateLabels]);

  return (
    <>
    {
      chartData ? 
      <Chart ref={chartRef} type='bar' data={chartData} options={{
        scales: {
          y :{
            position: 'left'
          },
          y1 :{
            position: 'right',
            grace: '5%',
            // min: moment('16:00:00 pm', "HH:mm:ss a").valueOf(),
            // max: moment('18:00:00 pm', "HH:mm:ss a").valueOf(),
            ticks: {
              stepSize: 10000000,
              callback: function(value, index, ticks) {
                return moment(value).format("HH:mm a");
              }
            }
          }
          // y: {
          //   display: true
          // //   // min: moment('7:00:00', "HH:mm:ss a").valueOf(),
          // //   // max: moment('8:00:00', "HH:mm:ss a").valueOf(),
          //   // display: false,
          // //   // grace: '100%',
          //   // ticks: {
          //     // stepSize: 600000,
          // //     // display: true
          //     // callback: function(value, index, ticks) {
          // //       console.log('qqq value:  ', moment('7:00:00', "HH:mm:ss a").valueOf(), value)
          // // //       console.log('qqq ---------', this.getLabelForValue(value), this.getLabelForValue(index))
          // // //       // console.log('aaa callback', value, ticks, moment(value, "mm:ss").valueOf())
          // // //       // const currentTime = moment(value, "mm:ss").valueOf();
          // // //       // const fiveAM = moment('05:00:00 AM', "mm:ss").valueOf();
          // // //       // const sixAM = moment('06:00:00 AM', "mm:ss").valueOf();
          // // //       // const sevenAM = moment('07:00:00 AM', "mm:ss").valueOf();
          // // //       // // console.log('qqq-111', value, moment(value, "mm:ss").format("mm:ss") , fiveAM)
          // // //       // // console.log('qqq-222', ticks, currentTime <= fiveAM)
          // // //       // console.log('qqq value: ', value, moment(value, "mm:ss").format("mm:ss"))
          // // //       // if (currentTime <= fiveAM) {
          // // //       //   return "5:00 AM"
          // // //       // } else if (currentTime <= sixAM) {
          // // //       //   return "6:00 AM"
          // // //       // } else if (currentTime <= sevenAM) {
          // // //       //   return "7:00 AM"
          // // //       // } else {
          // // //       //   return "12:00 PM"
          // // //       // }
          // // //       return moment(value).format("hh:mm a");
          // // return '';
          //     // }
          //   // }
          // }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: (tooltipItem, data) => {
                return moment(tooltipItem.raw).format("HH:mm:ss a");
              }
            }
          }
        }
      }}/> : 
      null
    }
    </>
  );
}

export default SunriseSunsetChart;