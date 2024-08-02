import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
function App() {
  return (
    <div >
        <AppBar>
          <Toolbar sx={{fontSize:30, justifyContent:'center'}}>Kart Projesi</Toolbar>
        </AppBar>
  <Container maxWidth="lg">
        
        <Grid container spacing={2} sx={{ marginTop: 10 }}>
          <Grid item xs={12} md={6} lg={3} >
            <Course 
           image={Angular}
            title="Angular"
             description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo labore maiores, corporis consequuntur numquam veritatis sit consequatur, fugit molestias illum nesciunt corrupti ipsa cupiditate molestiae dicta, hic consectetur asperiores commodi."
             ></Course>
          </Grid>
          <Grid item xs={12} md={6} lg={3} >
            <Course 
           image={Angular}
            title="Angular"
             description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo labore maiores, corporis consequuntur numquam veritatis sit consequatur, fugit molestias illum nesciunt corrupti ipsa cupiditate molestiae dicta, hic consectetur asperiores commodi."
             ></Course>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course 
           image={Angular}
            title="Angular"
             description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo labore maiores, corporis consequuntur numquam veritatis sit consequatur, fugit molestias illum nesciunt corrupti ipsa cupiditate molestiae dicta, hic consectetur asperiores commodi."
             ></Course>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course 
           image={Angular}
            title="Angular"
             description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo labore maiores, corporis consequuntur numquam veritatis sit consequatur, fugit molestias illum nesciunt corrupti ipsa cupiditate molestiae dicta, hic consectetur asperiores commodi."
             ></Course>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
