// React
import React from 'react'

// Material IU
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(253, 254, 255, 0)',
    },
  },
}));

type Props = {
  sx: object,
  placeholders: string
}

export default (props: Props) => {
    const [genres, setGenres] = React.useState(null)

    const init = async () => {
        const response = await fetch(`/api/movies`,{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: {
              'action': 'listGenre',
              'value': ''
            }
          })
        });
        const result = await response.json()
        setGenres(result.genres);
    }
    
    React.useMemo(init,[])
    console.log(genres,"genres")
    return (
      <React.Fragment>
        {
          genres?.length > 0 &&
          <CustomizedSelects {...props} genres={genres}/>
        }
      </React.Fragment>
    )
}

const CustomizedSelects = ({sx , genres}) => {
  const [age, setAge] = React.useState('');
  const handleChange = (event: { target: { value: string } }) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl sx={sx} variant="standard">
        <NativeSelect
          id="select"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option aria-label="None" value="_">_____________</option>
          {
            genres.map((option, index) => (
              <option key={index} value={option.id}>{option?.name}</option>
            ))
          }
        </NativeSelect>
      </FormControl>
    </div>
  );
}