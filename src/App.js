import { Container, Grid, ThemeProvider, Typography } from '@mui/material';
import TourCard from './components/TourCard';
import './App.css';
import theme from './theme/theme';
import SearchAppBar from './components/AppBar';
import cities from './data.json';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SearchAppBar />
      <Container sx={{ marginY: 5 }}>
        {cities.map((city) => (
          <>
            <Typography
              key={city.name}
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} tours
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour) => (
                <TourCard key={tour.name} tour={tour} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </ThemeProvider>
  );
}

export default App;
