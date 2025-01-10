// Material IU
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress, {
    CircularProgressProps,
  } from '@mui/material/CircularProgress';

export default (
    props: CircularProgressProps & { value: number, sx?: object },
  ) => {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex', ...props.sx}}>
        <CircularProgress size="30px" color="success" variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="caption"
            component="div"
            sx={{ color: '#fff', fontSize: '9px' }}
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    );
  }