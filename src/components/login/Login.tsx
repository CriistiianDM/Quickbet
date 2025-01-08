// React
import React from 'react'

// Material IU
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import { TransitionProps } from '@mui/material/transitions';
import CardMedia from '@mui/material/CardMedia';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';

// Icons Material IU
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

// Styles
import { styles } from './styles'

/**
 * Login
 */
export default ({ open, setOpen }) => {
    return (
        <AlertDialogSlide {...{open,setOpen}} />
    )
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialogSlide = ({ open, setOpen}) => {
  const [showLogin, setShowLogin] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        sx={styles.containerLogin}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
           {
             showLogin ? 
             <ContentDialog  {...{setShowLogin}}/>  : 
             <ContentDialogLogin {...{setShowLogin}}/>
           }
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

const ContentDialog = ({setShowLogin}) => {
    return (
        <Box sx={styles.contentDialog}>
          <Box>
                <Box sx={styles.containerBtn}>
                  <Button className="btn-active-login" variant="contained" disableElevation>
                    Sign up
                  </Button>
                  <Button onClick={() => setShowLogin(false)} variant="contained" disableElevation>
                    Log In
                  </Button>
                </Box>
                <Box sx={styles.contentRegister}>
                    <form>
                        <Button variant="contained" disableElevation>
                            <p>Register with your Email</p>
                            <MailOutlineOutlinedIcon />
                        </Button>
                    </form>
                </Box>
                <Box sx={styles.contentAlerts}>
                  <Typography variant="overline" gutterBottom sx={{ display: 'block', color: '#fff' }}>
                      For any questions, reach out
                      to support@Quickbetdmovies.com
                  </Typography>
                </Box>
          </Box>
          <Box sx={styles.containerMenssage}>
                <Typography color="white" variant="h4" gutterBottom>
                    Welcome to Quickbet Movies!
                </Typography>
                <Typography color="white" variant="overline" gutterBottom sx={{ display: 'block' }}>
                    🎬 Ready to unlock a universe of cinematic 
                    delights? Sign up now and start your journey with us!
                </Typography>
                <CardMedia
                  sx={{width: '100%', height: 'calc(67%)'}}
                  image={"/assets/login/02.png"}
                  title="green iguana"
                />
          </Box>
        </Box>
    )
}

const ContentDialogLogin = ({ setShowLogin }) => {
  const [showPassword, setShowPassword] = React.useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
      <Box sx={styles.contentDialog}>
        <Box>
              <Box sx={styles.containerBtn}>
                <Button onClick={() => setShowLogin(true)} variant="contained" disableElevation>
                  Sign up
                </Button>
                <Button className="btn-active-login" variant="contained" disableElevation>
                  Log In
                </Button>
              </Box>
              <Box sx={styles.contentRegister}>
                  <form>
                      <Typography variant="overline" gutterBottom sx={{ display: 'block', color: '#fff' }}>
                          We love having you back
                      </Typography>
                      <FormControl sx={styles.inputForm} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-password"
                          type={showPassword ? 'text' : 'password'}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label={
                                  showPassword ? 'hide the password' : 'display the password'
                                }
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                onMouseUp={handleMouseUpPassword}
                                edge="end"
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                        />
                      </FormControl>
                      <FormControl sx={styles.inputForm} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-password"
                          type={showPassword ? 'text' : 'password'}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label={
                                  showPassword ? 'hide the password' : 'display the password'
                                }
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                onMouseUp={handleMouseUpPassword}
                                edge="end"
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                        />
                      </FormControl>
                      <Button variant="contained" disableElevation>
                          <p>Continue</p>
                          <ConfirmationNumberOutlinedIcon />
                      </Button>
                  </form>
              </Box>
              <Box sx={styles.contentAlerts}>
                <Typography variant="overline" gutterBottom sx={{ display: 'block', color: '#fff' }}>
                    For any questions, reach out
                    to support@Quickbetdmovies.com
                </Typography>
              </Box>
        </Box>
        <Box sx={styles.containerMenssage}>
              <Typography color="white" variant="h4" gutterBottom>
                  Welcome back to Quickbet Movies!
              </Typography>
              <Typography color="white" variant="overline" gutterBottom sx={{ display: 'block' }}>
                  🍿 Ready to dive into the world of unlimited entertainment? 
                  Enter your credentials and let the cinematic adventure begin!
              </Typography>
              <CardMedia
                sx={{width: '100%', height: 'calc(67%)'}}
                image={"/assets/login/03.png"}
                title="green iguana"
              />
        </Box>
      </Box>
  )
}