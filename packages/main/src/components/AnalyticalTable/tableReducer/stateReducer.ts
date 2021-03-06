import { deepCompare } from '../util/deepCompare';

export const stateReducer = (newState, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'SET_GROUP_BY':
      if (deepCompare(newState.groupBy, payload)) {
        return newState;
      }
      return { ...newState, groupBy: payload };
    case 'SET_SELECTED_ROWS':
      if (deepCompare(newState.selectedRowIds, action.selectedIds)) {
        return newState;
      }
      return { ...newState, selectedRowIds: action.selectedIds };
    case 'TABLE_RESIZE':
      return { ...newState, tableClientWidth: payload.tableClientWidth };
    default:
      return newState;
  }
};
