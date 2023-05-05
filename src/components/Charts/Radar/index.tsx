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

import AutoColors from 'chartjs-plugin-autocolors';
// @ts-expect-error
import * as DragDataPlugin from 'chartjs-plugin-dragdata';
import Gradient from 'chartjs-plugin-gradient';
import { Radar } from 'react-chartjs-2';

const radarOptions = () => ({
  responsive: true,
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
    autoColors: {
      enabled: true,
      mode: 'data',
    },
  },
  tooltip: {
    enabled: false,
  },
});

const draggableOptions = (endDragFunction: (index: any, value: any) => void) => {
  const dragPluginOptions = {
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
  };

  const options = radarOptions();
  options.plugins = {
    ...options.plugins,
    ...dragPluginOptions,
  };

  return options;
};

interface Props {
  data: any;
  endDragFunction: (index: any, value: any) => void;
}

export const DraggableRadar: FC<Props> = ({ data, endDragFunction }) => {
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    DragDataPlugin,
    AutoColors,
    Gradient,
  );
  return (
    <Radar data={data} options={draggableOptions(endDragFunction)} />
  );
};

interface DefaultProps {
  data: any;
}

export const DefaultRadar: FC<DefaultProps> = ({ data }) => {
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    AutoColors,
    Gradient,
  );
  const options = radarOptions();
  return (
    <Radar data={data} options={options} />
  );
};
