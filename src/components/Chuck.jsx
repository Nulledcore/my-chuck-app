import React, { Component } from 'react';
import { ThemeProvider, createMuiTheme, CssBaseline, Button } from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import chuckService from '../api/chuckService';

const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: red,
        secondary: {
            main: '#5c6bc0',
        },
    },
});

function refreshPage() {
    window.location.reload(false);
}

class Chuck extends Component {
    state = {
        fact:"Loading your fun fact"
    }
    async componentDidMount(){
        let funfact = await chuckService.getJoke()
        console.log(chuckService.getJoke());
        this.setState({fact:funfact})
    };

    render() {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <header className="App-header">
                        <h1>Hello World from Chuck</h1>
                        <h3>{this.state.fact}</h3>
                        <Button color="primary" variant="contained" onClick={refreshPage}>Get a new fact!</Button>
                    </header>
                    
                </div>
                <CssBaseline />
            </ThemeProvider>
        );
    }
}

export default Chuck;