import { styled } from '@mui/material/styles';
import { cyan } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(cyan[300]),
  backgroundColor: cyan[300],
  '&:hover': {
    backgroundColor: cyan[500],
  },
}));

export const TopMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <ColorButton
          id="fade-button"
          aria-controls="fade-menu"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Gitary ⬇️
        </ColorButton>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Klasyczne</MenuItem>
          <MenuItem onClick={handleClose}>Akustyczne</MenuItem>
          <MenuItem onClick={handleClose}>Elektryczne</MenuItem>
        </Menu>
      </div>
    );
}