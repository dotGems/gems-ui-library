import { createMuiTheme } from '@mui/material/styles';

export const muiTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#ff0000"
        }
    },
    typography: {
        fontFamily: 'Nunito Sans, sans-serif',
        button: {
            textTransform: 'none'
        }
    },
    shape: {
        borderRadius: 3
    }
})