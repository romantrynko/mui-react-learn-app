import { Container, Typography, Box, Button } from '@mui/material';
import { useEffect, useMemo, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router';
import CustomizedAccordions from '../components/Accordion';
import ImageCollage from '../components/ImageCollage';
import data from '../data.json';
import { BottomNav } from '../components/BottomNav';

const Tour = () => {
  const [tour, setTour] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const numberId = parseInt(id);

  const allTours = useMemo(
    () =>
      data.reduce((acc, city) => {
        return [...acc, ...city.tours];
      }, []),
    []
  );

  useEffect(() => {
    const exactTour = allTours.find((tour) => tour.id === numberId);
    setTour(exactTour);
  }, [allTours, numberId]);

  const handleHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    tour && (
      <Container sx={{ width: 900, marginBottom: 10 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 3
          }}
        >
          <Typography variant="h3" component="h1">
            {tour.name}
          </Typography>
          <Button onClick={() => handleHome()}>Home</Button>
        </Box>

        <Box
          marginTop={3}
          sx={{ display: 'flex', overflow: 'hidden', height: 350 }}
        >
          <Box sx={{ width: '70%', overflow: 'hidden' }}>
            <img src={tour.image} height="100%" alt="img"></img>
          </Box>
          <ImageCollage sx={{ width: '30%' }} />
        </Box>
        <Box>
          <Typography variant="h6" component="h4" marginTop={3}>
            About this ticket
          </Typography>
          <Typography variant="paragraph" component="p" marginTop={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac
            nunc ante. In dictum libero sit amet massa lobortis, a sodales purus
            pharetra. Etiam eget libero massa. Donec a sollicitudin nunc, eget
            commodo dui. Nam erat lorem, cursus eget lacus sed, eleifend tempor
            felis. In libero ipsum, dignissim quis vehicula eu, interdum ac
            ligula. Sed at purus quis lectus mollis porta.
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            component="h4"
            marginTop={3}
            marginBottom={2}
          >
            Frequently asked question
          </Typography>
          <CustomizedAccordions sx={{ marginBottom: 10 }} />
        </Box>
        <BottomNav />
      </Container>
    )
  );
};

export default Tour;
