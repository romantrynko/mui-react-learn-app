import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import StaticDateRangePickerDemo from './Calendar';
import { useCallback } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center'
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const bookHandler = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div>
      <Button onClick={handleOpen} sx={{ marginTop: 1 }}>
        Book Now
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <StaticDateRangePickerDemo />
          <Button onClick={bookHandler} sx={{ marginTop: 2 }}>
            Select dates
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
