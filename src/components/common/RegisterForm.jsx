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

const RegisterForm = ({ switchAuthState }) => {
  const dispatch = useDispatch();

  const [isLoginRequest, setIsLoginRequest] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const registerForm = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Email is required.')
        .email('Enter a valid email address.')
        .matches(emailRegex, 'Enter a valid email address.'),
      password: Yup.string()
        .min(8, 'Password must be a minimum of 8 characters.')
        .required('Password is required.'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords do not match.')
        .min(8, 'Password must be a minimum of 8 characters.')
        .required('Re-type your password.'),
    }),
    onSubmit: async (values) => {
      setErrorMessage(undefined);
      setIsLoginRequest(true);
      const { response, err } = await userApi.register(values);
      setIsLoginRequest(false);

      if (response) {
        registerForm.resetForm();
        dispatch(setUser(response));
        dispatch(setAuthModalOpen(false));
        toast.success(
          '🎉 Hooray! Welcome to the movies. Lights, camera, action! 🍿🎬'
        );
      }

      if (err) setErrorMessage(err.message);
    },
  });

  return (
    <Box component='form' onSubmit={registerForm.handleSubmit}>
      <Stack spacing={3}>
        <TextField
          type='text'
          placeholder='Email'
          name='email'
          fullWidth
          value={registerForm.values.email}
          onChange={registerForm.handleChange}
          color='success'
          error={
            registerForm.touched.email &&
            registerForm.errors.email !== undefined
          }
          helperText={registerForm.touched.email && registerForm.errors.email}
        />
        <TextField
          type='password'
          placeholder='Password'
          name='password'
          fullWidth
          value={registerForm.values.password}
          onChange={registerForm.handleChange}
          color='success'
          error={
            registerForm.touched.password &&
            registerForm.errors.password !== undefined
          }
          helperText={
            registerForm.touched.password && registerForm.errors.password
          }
        />
        <TextField
          type='password'
          placeholder='Confirm password'
          name='confirmPassword'
          fullWidth
          value={registerForm.values.confirmPassword}
          onChange={registerForm.handleChange}
          color='success'
          error={
            registerForm.touched.confirmPassword &&
            registerForm.errors.confirmPassword !== undefined
          }
          helperText={
            registerForm.touched.confirmPassword &&
            registerForm.errors.confirmPassword
          }
        />
      </Stack>

      <LoadingButton
        type='submit'
        fullWidth
        size='large'
        variant='contained'
        sx={{ marginTop: 4 }}
        loading={isLoginRequest}>
        sign up
      </LoadingButton>

      <Button fullWidth sx={{ marginTop: 1 }} onClick={() => switchAuthState()}>
        sign in
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

export default RegisterForm;
