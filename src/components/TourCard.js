import { Grid, Paper, Typography, Box, Rating } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const TourCard = ({ tour }) => {
  const { id, name, duration, rating, numberOfReviews, price, image } = tour;

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`${id}`);
  };

  return (
    <Grid item xs={3}>
      <Paper
        elevation={3}
        onClick={() => clickHandler()}
        sx={{
          '&:hover': {
            transform: 'scale(1.05)',
            cursor: 'pointer',
            background: '#cdfaec'
          }
        }}
      >
        <img className="img" src={image} alt="img" />
        <Box padding={3}>
          <Typography variant="subtitle1" component="h2">
            {name}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <AccessTime sx={{ width: 12.5 }} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              {duration} hours
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
            marginTop={3}
          >
            <Rating
              size="small"
              readOnly
              name="read-only"
              value={rating}
              precision={0.5}
            />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              {rating}
            </Typography>
            <Typography variant="body2" component="p" marginLeft={0.5}>
              ({numberOfReviews} reviews)
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6"
              component="h2"
              marginLeft={0}
              marginTop={2}
            >
              From C ${price}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
