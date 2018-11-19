import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
    overrides: {
        MuiAppBar: {
            // Name of the rule
            root: {
                // Some CSS
                background: 'black',
                borderRadius: 3,
                border: 0,
                color: 'white',
                boxShadow: 'gray',
            },
        },
        MuiTable: {
            root: {
                minWidth: 700
            }
        },
        MuiPaper: {
            root: {
                width: '100%',
                marginTop: 12,
                overflowX: 'auto',
            },
        }
    },
    spacing: {
        unit: 4
    }
});