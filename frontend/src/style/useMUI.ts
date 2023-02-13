import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
      status: {
        danger: React.CSSProperties['color'];
      };
    }
  
    interface Palette {
      neutral: Palette['primary'];
    }
  
    interface PaletteOptions {
      neutral: PaletteOptions['primary'];
    }
  
    interface PaletteColor {
      darker?: string;
    }
  
    interface SimplePaletteColorOptions {
      darker?: string;
    }
  
    interface ThemeOptions {
      status: {
        danger: React.CSSProperties['color'];
      };
    }
  }

const theme = createTheme({
  status: {
    danger: 'white',
  },
  palette: {
    primary: {
      main: 'white',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});