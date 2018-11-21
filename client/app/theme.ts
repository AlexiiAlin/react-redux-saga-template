import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  props: {
    MuiAppBar: {
      // Name of the rule
      style: {
        background: 'black',
        borderRadius: 3,
        border: 0,
        color: 'white',
        boxShadow: 'gray',
      }
    },
    MuiTable: {
      style: {
        minWidth: 700
      }
    },
    MuiPaper: {
      style: {
        width: '100%',
        marginTop: 12,
        overflowX: 'auto'
      }
    }
  },
  spacing: {
    unit: 4
  }
});
