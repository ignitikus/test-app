import React  from 'react';
import {Grid, Box}from '@mui/material'
import Login from "./Components/Login/Login.js"

function App() {
  return (
    <div className="App">
      <Box sx={{flexGrow: 1}}>
        <Grid container 
          spacing={0} 
          direction="column" 
          alignItems="center" 
          justifyContent="center" 
          sx={{minHeight: '100vh'}}>
          <Login />
        </Grid>
      </Box>
    </div>
  );
}

export default App;
