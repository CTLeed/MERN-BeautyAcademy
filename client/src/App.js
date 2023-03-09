import './App.css';
import TopAppBar from './components/AppBar';
import BottomNavBar from './components/BottomNavBar';
import Carousel from './components/Carousel';
import ContactForm from './components/ContactForm';
import { Grid, Box } from '@mui/material';
import MapContainer from './components/Map';



function App() {
  return (
    <div className="App">
      <TopAppBar />
      <Carousel />
      <Box sx={{ width: '92.5%', height: '500px' }}>
        <Grid container spacing={2} sx={{ height: "100%" }}>
          <Grid item xs={6}>
            <MapContainer />
          </Grid>
          <Grid item xs={6} sx={{ height: "100$" }}>
            <ContactForm />
          </Grid>
        </Grid>
      </Box>
      <BottomNavBar />
    </div >
  );
}

export default App;
