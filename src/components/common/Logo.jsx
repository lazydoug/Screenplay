import { Typography, Link, useTheme } from '@mui/material';

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography fontWeight='700' fontSize='1.7rem'>
      <Link href='/' underline='none' color='inherit'>
        Screen<span style={{ color: theme.palette.primary.main }}>Play</span>
      </Link>
    </Typography>
  );
};

export default Logo;
