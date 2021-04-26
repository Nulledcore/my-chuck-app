import React, { Component } from 'react';
import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
    palette: {
      type: "dark",
      primary: red,
      secondary: {
        main: '#5c6bc0',
      },
    },
});

class Chuck extends Component {
    state = {  }
    render() { 
        return (
        <ThemeProvider theme={theme}>
            <div>
                <p>Hello World from Chuck</p>
            </div>
            <CssBaseline/>
        </ThemeProvider>
        );
    }
}
 
export default Chuck;