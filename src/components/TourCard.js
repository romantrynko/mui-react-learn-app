import { Grid, Paper, Typography, Box, Rating } from '@mui/material';
import { AccessTime } from '@mui/icons-material';

const TourCard = ({ tour }) => {
  const { name, duration, rating, numberOfReviews, price, image } = tour;
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img className="img" src={image} alt="img" />
        <Box paddingX={1}>
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
            <Typography variant="h6" component="h2" marginLeft={0}>
              From C ${price}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
