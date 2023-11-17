import { LoadingButton } from '@mui/lab';
import { Alert, Box, Button, Stack, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import userApi from '../../api/modules/user.api';
import { setAuthModalOpen } from '../../redux/features/authModalSlice';
import { setUser } from '../../redux/features/userSlice';

const LoginForm = ({ switchAuthState }) => {
  const dispatch = useDispatch();

  const [isLoginRequest, setIsLoginRequest] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Email is required.')
        .email('Enter a valid email address.')
        .matches(emailRegex, 'Enter a valid email address.'),
      password: Yup.string()
        .min(8, 'Password must be a minimum of 8 characters.')
        .required('Password is required.'),
    }),
    onSubmit: async (values) => {
      setErrorMessage(undefined);
      setIsLoginRequest(true);
      const { response, err } = await userApi.login(values);
      setIsLoginRequest(false);

      if (response) {
        loginForm.resetForm();
        dispatch(setUser(response));
        dispatch(setAuthModalOpen(false));
        toast.success(
          '🍿 Welcome back to the show! Enjoy your movie marathon! 🎬🎉'
        );
      }

      if (err) setErrorMessage(err.message);
    },
  });

  return (
    <Box component='form' onSubmit={loginForm.handleSubmit}>
      <Stack spacing={3}>
        <TextField
          type='text'
          placeholder='Email'
          name='email'
          fullWidth
          value={loginForm.values.email}
          onChange={loginForm.handleChange}
          color='success'
          error={
            loginForm.touched.email && loginForm.errors.email !== undefined
          }
          helperText={loginForm.touched.email && loginForm.errors.email}
        />
        <TextField
          type='password'
          placeholder='Password'
          name='password'
          fullWidth
          value={loginForm.values.password}
          onChange={loginForm.handleChange}
          color='success'
          error={
            loginForm.touched.password &&
            loginForm.errors.password !== undefined
          }
          helperText={loginForm.touched.password && loginForm.errors.password}
        />
      </Stack>

      <LoadingButton
        type='submit'
        fullWidth
        size='large'
        variant='contained'
        sx={{ marginTop: 4 }}
        loading={isLoginRequest}>
        sign in
      </LoadingButton>

      <Button fullWidth sx={{ marginTop: 1 }} onClick={() => switchAuthState()}>
        sign up
      </Button>

      {errorMessage && (
        <Box sx={{ marginTop: 2 }}>
          <Alert severity='error' variant='outlined'>
            {errorMessage}
          </Alert>
        </Box>
      )}
    </Box>
  );
};

export default LoginForm;
