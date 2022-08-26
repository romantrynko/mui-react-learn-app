import { Container, Grid, Typography } from '@mui/material';
import TourCard from '../components/TourCard';

import cities from '../data.json';

const Home = () => {
  return (
   
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
  );
};

export default Home;
