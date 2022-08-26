import { Container, Grid } from '@mui/material';
import TourCard from './components/TourCard';
import './App.css';

function App() {
  return (
    <Container>
      <Grid container spacing={5}>
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
      </Grid>
    </Container>
  )
}

export default App;
