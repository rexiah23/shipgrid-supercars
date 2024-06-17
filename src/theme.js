// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTab: {
        styleOverrides: {
            root: {
                textTransform: 'none', // Apply globally to all Tab components
            }
        }
    }
},  
  palette: {
    primary: {
      main: '#ff9800',  // Orange color
    },
    secondary: {
      main: '#19857b',  // Custom secondary color
    },
  },
});

export default theme;
