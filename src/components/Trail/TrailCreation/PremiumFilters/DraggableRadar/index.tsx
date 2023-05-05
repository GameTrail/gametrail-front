import type { FC } from 'react';
import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

// @ts-expect-error
import * as DragDataPlugin from 'chartjs-plugin-dragdata';
import { Radar } from 'react-chartjs-2';

const radarOptions = (endDragFunction: (index: any, value: any) => void) => ({
  responsive: true,
  resizeDelay: 200,
  aspectRatio: 2,
  scales: {
    r: {
      beginAtZero: true,
      angleLines: {
        display: false,
      },
      suggestedMin: 1,
      suggestedMax: 5,

      ticks: {
        display: false,
        stepSize: 1,
      },
      pointLabels: {
        font: {
          size: 14,
          weight: 'bold',
        },
        color: '#eceff4',
      },
      grid: {
        color: '#eceff4',
      },
    },
  },
  tension: 0,
  plugins: {
    legend: {
      display: false,
    },
    dragData: {
      round: 0,
      showTooltip: true,
      onDragStart: (e: any) => {
        e.target.style.cursor = 'grabbing';
      },
      onDrag: (e: any) => {
        e.target.style.cursor = 'grabbing';
      },
      onDragEnd: (e: any, datasetIndex: any, index: any, value: any) => {
        e.target.style.cursor = 'default';
        endDragFunction(index, value);
      },
    },
  },
  tooltip: {
    enabled: false,
  },
});

interface Props {
  data: any;
  endDragFunction: (index: any, value: any) => void;
}

const DraggableRadar: FC<Props> = ({ data, endDragFunction }) => {
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    DragDataPlugin,
  );
  return (
    <Radar data={data} options={radarOptions(endDragFunction)} />
  );
};

export default DraggableRadar;
