import { useCallback, useMemo } from 'react';
import {
  DataLabel,
  SecondaryDimensionTicksXAxis,
  SecondaryDimensionTicksYAxis,
  YAxisTicks
} from '../internal/CustomElements';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { getTextWidth, renderAxisTicks } from '../util/Utils';

export const useDataLabel = (dataLabel, dataLabelCustomElement, dataLabelFormatter, stacked?, bar?, noSizeCheck?) =>
  useMemo(() => {
    return dataLabel || typeof dataLabel === 'undefined'
      ? dataLabelCustomElement
        ? (props) => DataLabel(props, dataLabelFormatter, dataLabelCustomElement)
        : {
            position: bar ? (stacked ? 'insideRight' : 'right') : stacked ? 'inside' : 'top',
            content: (props) => {
              const formattedDataValue = dataLabelFormatter(props.value);
              if (noSizeCheck) {
                return formattedDataValue;
              }
              if (props.viewBox.width < getTextWidth(formattedDataValue)) {
                return null;
              }
              if (props.viewBox.height < 12) {
                return null;
              }
              return formattedDataValue;
            },
            fill: ThemingParameters.sapContent_LabelColor
          }
      : false;
  }, [stacked, bar, dataLabel, dataLabelFormatter, dataLabelCustomElement]);

export const usePieDataLabel = (dataLabel, dataLabelCustomElement, dataLabelFormatter) =>
  useMemo(() => {
    return dataLabel || typeof dataLabel === 'undefined'
      ? dataLabelCustomElement
        ? (props) => DataLabel(props, dataLabelFormatter, dataLabelCustomElement)
        : (props): number | string => dataLabelFormatter(props.value)
      : false;
  }, [dataLabelFormatter, dataLabelCustomElement, dataLabel]);

export const useAxisLabel = (AxisFormatter, AxisUnit, yAxis?) => {
  return useCallback(
    (labelProps) => {
      return yAxis
        ? YAxisTicks(labelProps, AxisFormatter, AxisUnit)
        : renderAxisTicks(labelProps, AxisFormatter, AxisUnit);
    },
    [AxisFormatter, AxisUnit]
  );
};

let dimension = '';
export const useSecondaryDimensionLabel = (yAxis?: boolean, yAxisFormatter?) => {
  return useCallback((labelProps) => {
    if (dimension === labelProps.payload.value) {
      return undefined;
    } else {
      dimension = labelProps.payload.value;
      return yAxis
        ? SecondaryDimensionTicksYAxis(labelProps, yAxisFormatter)
        : SecondaryDimensionTicksXAxis(labelProps);
    }
  }, []);
};
