import { useRouter } from 'next/router';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';


const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function SignUp(props) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState('');

  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const name = document.getElementById('name');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    if (!name.value || name.value.length < 1) {
      setNameError(true);
      setNameErrorMessage('Name is required.');
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage('');
    }

    return isValid;
  };
const router = useRouter();

  //   // Function to redirect to the sign-up page
  const handleRedirect = (path) => {
    router.push(path);
  };


  return (
    < >
      <SignUpContainer direction="column" justifyContent="space-between">

      <Box
      sx={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
        padding: 2,
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h2" component="h1" sx={{ fontWeight: 700, mb: 3 }}>
          Welcome to Lancer
        </Typography>
        
        <Typography variant="h5" sx={{ mb: 4 }}>
          Your all-in-one freelancing platform to connect with clients and get work done efficiently.
        </Typography>
        
        <Typography variant="h6" sx={{ mb: 4, fontWeight: 500 }}>
          It is the first Web3-based freelancing platform, powered by blockchain for secure payments and transparent transactions.
        </Typography>
        
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          onClick={() => handleRedirect('/sign-in')} // Redirect to sign-in page
          sx={{ padding: '12px 24px', fontSize: '16px', marginRight: '8px' }}
        >
          Sign In
        </Button>
        
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          onClick={() => handleRedirect('/sign-up')} // Redirect to sign-up page
          sx={{ padding: '12px 24px', fontSize: '16px' }}
        >
          Sign Up
        </Button>
        
        <Typography variant="body1" sx={{ mt: 4, fontWeight: 400 }}>
          We are open to investment, collaboration, and contributions. Feel free to contact us on Telegram: 
          <a href="https://t.me/cybillnerd" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontWeight: 'bold' }}>
            @cybillnerd
          </a>
        </Typography>
      </Container>
    </Box>
      
      </SignUpContainer>
    </>
  );
}
