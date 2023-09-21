import { createTheme } from '@mui/material/styles'

export const shades = {
  primary: {
          100: "#ccd2d8",
          200: "#99a5b1",
          300: "#66778b",
          400: "#334a64",
          500: "#001d3d",
          600: "#001731",
          700: "#001125",
          800: "#000c18",
          900: "#00060c"
},

  secondary: {
          100: "#d5fed3",
          200: "#acfda7",
          300: "#82fb7c",
          400: "#59fa50",
          500: "#2ff924",
          600: "#26c71d",
          700: "#1c9516",
          800: "#13640e",
          900: "#093207"
},
  neutral: {
          100: '#f5f5f5',
          200: '#ecebeb',
          300: '#e2e1e1',
          400: '#d9d7d7',
          500: '#cfcdcd',
          600: '#a6a4a4',
          700: '#7c7b7b',
          800: '#535252',
          900: '#292929'
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500]
    },
    secondary: {
      main: shades.secondary[500]
    },
    neutral: {
      dark: shades.neutral[700],
      main: shades.neutral[500],
      light: shades.neutral[100]
    }
  },
  typography: {
    fontFamily: ['Hamlet', 'sans-serif'].join(','),
    fontSize: 11,
    h1: {
      fontFamily: ['Hamlet', 'sans-serif'].join(','),
      fontSize: 48
    },
    h2: {
      fontFamily: ['Lora', 'sans-serif'].join(','),
      fontSize: 36
    },
    h3: {
      fontFamily: ['Lora', 'sans-serif'].join(','),
      fontSize: 20
    },
    h4: {
      fontFamily: ['Lora', 'sans-serif'].join(','),
      fontSize: 14
    }
  },
  
})
