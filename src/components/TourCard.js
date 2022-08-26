import { Grid, Paper, Typography, Box, Rating } from '@mui/material';
import { AccessTime } from '@mui/icons-material';

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img
          className="img"
          src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
          alt="1"
        />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            Immerse into the Falls
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <AccessTime sx={{ width: 12.5 }} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              5 hours
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
              value={4.5}
              precision={0.5}
            />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              4.5
            </Typography>
            <Typography variant="body2" component="p" marginLeft={0.5}>
              (655 reviews)
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="h2" marginLeft={0}>
              From C $147
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
