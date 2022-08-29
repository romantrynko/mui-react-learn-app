import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import { useState } from 'react';
import BasicModal from './Modal';

export const BottomNav = () => {
  const [value, setValue] = useState(0);
  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BasicModal/>
      </BottomNavigation>
    </Paper>
  );
};
