import { styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

export const StyleDiv = styled('div')(() => ({
  marginTop: 80,
}));

export const StyleAppBar = styled(AppBar)(() => ({
  width: 'calc(100% - 240px)',
  backgroundColor: '#F6F6F6',
  display: 'flex',
  justifyContent: 'space-around',
}));

export const StyleTypography = styled(Typography)(() => ({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  paddingLeft: 15,
  paddingTop: 15,
}));
