import { Container, Typography, Box } from '@mui/material';
import CustomizedAccordions from './Accordion';
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
        <ImageCollage />
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
        <Typography variant="h6" component="h4" marginTop={3}>
          Frequently asked question
        </Typography>
        <CustomizedAccordions/>
      </Box>
    </Container>
  );
};

export default Tour;
