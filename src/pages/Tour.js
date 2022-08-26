import { Container, Typography, Box } from '@mui/material';
import ImageCollage from './ImageCollage';

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World
      </Typography>
      <Box marginTop={3} sx={{ display: 'flex' }}>
        <img
          src="https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg"
          height={225}
          alt="img"
        ></img>
        <ImageCollage/>
      </Box>
    </Container>
  );
};

export default Tour;
