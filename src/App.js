import { AppBar, Button, Container, CssBaseline, Grid, Toolbar, Typography } from "@material-ui/core";
import CameraOutlinedIcon from '@material-ui/icons/CameraOutlined';
import React from "react";
import useStyles from "./styles";

function App() {
  const classess = useStyles();
  return (
    <>
      <CssBaseline />
      {/* <Typography variant="h1">Hello there</Typography> */}
      <AppBar position="relative">
        <Toolbar>
          <CameraOutlinedIcon />
          <Typography variant="h6">Photo album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classess.container}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Hello, this is my album with material ui design luibry for a react app.
            </Typography>
            <>
              <Grid container spacing={2} justifyContent="center">
                <Button variant="contained" color="primary">
                  See my photos
                </Button>
              </Grid>
              <Grid container spacing={2} justifyContent="center">
                <Button variant="outlined" color="primary">
                  See my photos
                </Button>
              </Grid>
            </>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
