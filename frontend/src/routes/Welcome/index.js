import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import background from '../../assets/images/welcome.jpg'
import { positions } from '@mui/system';


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


const Welcome = () => {

    return (
        <ThemeProvider theme={darkTheme}>
            <div

                style={{
                    backgroundImage: `url(${background})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    minWidth: '100vw',
                    minHeight: '100wh',
                    position: 'fixed'
                }}

            >
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: 30, width: '40vw', display: 'flex', flex: 1, flexDirection: 'column', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
                    <h1 style={{ color: 'white', fontSize: 50 }}>Welcome to UICS</h1>
                    <div style={{ display: "flex", flexDirection: 'column' }}>
                        <div style={{ display: 'flex', marginBottom: 40, flexDirection: 'column', alignItems: 'center' }}>
                            <span style={{ display: 'flex', marginBottom: 20, color: "white", fontSize: 20 }}>Do you have an account?</span>
                            <Button variant="contained" sx={{
                                width: 200, backgroundColor: '#d1600f', color: 'white', "&:hover": {
                                    backgroundColor: 'black'
                                }
                            }} >Go to login</Button>
                        </div>
                        <div style={{
                            display: 'flex', marginBottom: 24, flexDirection: 'column', alignItems: 'center'
                        }}>
                            <span style={{ display: 'flex', marginBottom: 20, color: "white", fontSize: 20 }}>New to our web site?</span>
                            <Button variant="outlined" sx={{
                                width: 200, color: '#d1600f', borderColor: '#d1600f', "&:hover": {
                                    borderColor: 'white'
                                }
                            }}> Create an account</Button>
                        </div>
                    </div>
                </div>
            </div >

        </ThemeProvider >
    );
}

export default Welcome