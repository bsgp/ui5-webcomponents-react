import { CssSizeVariables } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

const styles = {
  tableContainer: {
    width: '100%',
    height: `calc(100% - ${CssSizeVariables.sapWcrAnalyticalTableRowHeight})`,
    minHeight: '3rem'
  },
  table: {
    position: 'relative',
    width: '100%',
    maxWidth: '100%',
    overflowX: 'auto'
  },
  tableHeaderRow: {
    boxShadow: 'none !important',
    height: CssSizeVariables.sapWcrAnalyticalTableRowHeight,
    position: 'relative'
  },
  th: {
    backgroundColor: ThemingParameters.sapList_HeaderBackground,
    height: CssSizeVariables.sapWcrAnalyticalTableRowHeight,
    fontFamily: ThemingParameters.sapFontFamily,
    fontSize: ThemingParameters.sapFontSize,
    fontWeight: 'normal',
    color: ThemingParameters.sapList_HeaderTextColor,
    borderTop: `1px solid ${ThemingParameters.sapList_BorderColor}`,
    borderBottom: `1px solid ${ThemingParameters.sapList_BorderColor}`,
    borderRight: `1px solid ${ThemingParameters.sapList_BorderColor}`,
    textAlign: 'start',
    boxSizing: 'border-box',
    '&:first-child': {
      borderLeft: `1px solid ${ThemingParameters.sapList_BorderColor}`
    }
  },
  tbody: {
    position: 'relative',
    zIndex: 0,
    backgroundColor: ThemingParameters.sapList_Background,
    overflowX: 'hidden !important',
    overflowY: 'auto !important'
  },
  alternateRowColor: {
    backgroundColor: ThemingParameters.sapList_HeaderBackground
  },
  emptyRow: {},
  tr: {
    zIndex: 0,
    color: ThemingParameters.sapList_TextColor,
    boxSizing: 'border-box',
    '&[data-is-selected]': {
      backgroundColor: `${ThemingParameters.sapList_SelectionBackgroundColor} !important`,
      '& $tableCell': {
        borderBottom: `1px solid ${ThemingParameters.sapList_SelectionBorderColor}`
      }
    },
    '&[data-is-selected]:hover': {
      backgroundColor: `${ThemingParameters.sapList_Hover_SelectionBackground} !important`
    }
  },
  tableGroupHeader: {
    '&$tr': {
      backgroundColor: `${ThemingParameters.sapList_TableGroupHeaderBackground} !important`,
      border: `1px solid ${ThemingParameters.sapList_TableGroupHeaderBorderColor}`,
      color: ThemingParameters.sapList_TextColor,
      '& $tableCell': {
        borderRight: 'none'
      }
    }
  },
  selectable: {
    '& $tr:hover:not($emptyRow)': {
      backgroundColor: ThemingParameters.sapList_Hover_Background,
      '&:not($selectionModeRowSelector)': {
        cursor: 'pointer'
      }
    },
    '& $tr:active:not([data-is-selected]):not($tableGroupHeader):not($emptyRow):not($selectionModeRowSelector)': {
      backgroundColor: ThemingParameters.sapList_Active_Background,
      '& $tableCell': {
        borderRight: `1px solid ${ThemingParameters.sapList_Active_Background}`,
        color: `${ThemingParameters.sapList_Active_TextColor}`,
        '--sapTextColor': ThemingParameters.sapList_Active_TextColor
      }
    }
  },
  selectionModeRowSelector: {},
  tableCell: {
    height: CssSizeVariables.sapWcrAnalyticalTableRowHeight,
    fontFamily: ThemingParameters.sapFontFamily,
    fontSize: ThemingParameters.sapFontSize,
    fontWeight: 'normal',
    borderBottom: `1px solid ${ThemingParameters.sapList_BorderColor}`,
    boxSizing: 'border-box',
    borderRight: `1px solid ${ThemingParameters.sapList_BorderColor}`,
    display: 'flex',
    padding: '0 0.5rem',
    '&:first-child': {
      borderLeft: `1px solid ${ThemingParameters.sapList_BorderColor}`
    },
    overflow: 'hidden',
    position: 'relative',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    alignItems: 'center',
    '&:focus': {
      outlineOffset: '-2px',
      outline: `1px dotted ${ThemingParameters.sapContent_FocusColor}`
    }
  },
  noDataContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: ThemingParameters.sapList_Background,
    width: '100%',
    boxSizing: 'border-box',
    color: ThemingParameters.sapList_TextColor,
    fontFamily: ThemingParameters.sapFontFamily,
    fontSize: ThemingParameters.sapFontSize,
    fontWeight: 'normal',
    borderBottom: `1px solid ${ThemingParameters.sapList_BorderColor}`
  }
};

export default styles;
