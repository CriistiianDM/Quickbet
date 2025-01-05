// Material IU
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

type Props = {
    sx: object,
    placeholders: string
}

export default (props: Props) => {
    return (
       <CustomizedInputBase {...props}/>
    )
}

const CustomizedInputBase = ({ sx, placeholders }) => {
  return (
    <Paper
      component="form"
      sx={sx}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholders}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
