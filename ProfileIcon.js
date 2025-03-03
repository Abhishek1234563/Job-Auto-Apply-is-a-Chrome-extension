import React from 'react';
import { IconButton, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ProfileIcon() {
  const navigate = useNavigate();

  return (
    <IconButton onClick={() => navigate('/profile')}>
      <Avatar alt="Profile" src="/icon.png" />
    </IconButton>
  );
}

export default ProfileIcon;
