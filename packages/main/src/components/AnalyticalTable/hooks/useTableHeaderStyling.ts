import { PluginHook } from 'react-table';

const getHeaderProps = (columnProps, { instance, column }) => {
  const { classes } = instance.webComponentsReactProperties;
  return [
    columnProps,
    {
      className: classes.th,
      column,
      style: {
        position: 'absolute'
      },
      id: column.id
    }
  ];
};

export const useTableHeaderStyling: PluginHook<{}> = (hooks) => {
  hooks.getHeaderProps.push(getHeaderProps);
};
useTableHeaderStyling.pluginName = 'useTableHeaderStyling';
