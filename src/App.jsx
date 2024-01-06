import themeConfigs from '../src/configs/theme.configs';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import routes from './routes/routes';
import MainLayout from './components/layout/MainLayout';
import PageWrapper from './components/common/PageWrapper';

import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Helmet from 'react-helmet';

const App = () => {
  const { themeMode } = useSelector((state) => state.themeMode);

  return (
    <>
      <Helmet>
        <title>Openplay</title>
        <meta
          name='description'
          content='Discover a world of cinematic wonders on Openplay. Stream the latest blockbuster films and timeless classics. Dive into an endless reel of entertainment, from action-packed adventures to heartwarming romances. Unlimited movies, one click away.'
        />
      </Helmet>

      <ThemeProvider theme={themeConfigs.custom({ mode: themeMode })}>
        {/* Configure Toastify */}
        <ToastContainer
          position='bottom-left'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          pauseOnHover
          theme={themeMode}
          style={{ width: 'auto' }}
        />

        <CssBaseline />

        {/* app routes */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainLayout />}>
              {routes.map((route, index) =>
                route.index ? (
                  <Route
                    index
                    key={index}
                    element={
                      route.state ? (
                        <PageWrapper state={route.state}>
                          {route.element}
                        </PageWrapper>
                      ) : (
                        route.element
                      )
                    }
                  />
                ) : (
                  <Route
                    path={route.path}
                    key={index}
                    element={
                      route.state ? (
                        <PageWrapper state={route.state}>
                          {route.element}
                        </PageWrapper>
                      ) : (
                        route.element
                      )
                    }
                  />
                )
              )}
            </Route>
          </Routes>
        </BrowserRouter>
        {/* app routes */}
      </ThemeProvider>
    </>
  );
};

export default App;
