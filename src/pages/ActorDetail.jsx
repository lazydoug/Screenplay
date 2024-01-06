import { Box, Toolbar, Typography, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ActorMediaGrid from '../components/common/ActorMediaGrid';
import tmdbConfigs from '../api/configs/tmdb.configs';
import uiConfigs from '../configs/ui.configs';
import Container from '../components/common/Container';
import actorApi from '../api/modules/actor.api';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setGlobalLoading } from '../redux/features/globalLoadingSlice';
import Helmet from 'react-helmet';

const ActorDetail = () => {
  const { personId } = useParams();
  const [person, setPerson] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const getPerson = async () => {
      dispatch(setGlobalLoading(true));
      const { response, err } = await actorApi.detail({ personId });
      dispatch(setGlobalLoading(false));

      if (err) toast.error(err.message);
      if (response) setPerson(response);
    };

    getPerson();
  }, [personId]);

  return (
    <>
      <Helmet>
        <title>Open Play | {person.name}</title>
        <meta name='description' content='App Description' />
      </Helmet>

      <Toolbar />
      {person && (
        <>
          <Box sx={{ ...uiConfigs.style.mainContent }}>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
              }}>
              <Box
                sx={{
                  width: { xs: '50%', md: '20%' },
                }}>
                <Box
                  sx={{
                    paddingTop: '160%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: 'darkgrey',
                    backgroundImage: `url(${tmdbConfigs.posterPath(
                      person.profile_path
                    )})`,
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: { xs: '100%', md: '80%' },
                  padding: { xs: '1rem 0', md: '1rem 2rem' },
                }}>
                <Stack spacing={2}>
                  <Typography variant='h5' fontWeight='700'>
                    {`${person.name} (${
                      person.birthday && person.birthday.split('-')[0]
                    }`}
                    {person.deathday &&
                      ` - ${person.deathday && person.deathday.split('-')[0]}`}
                    {')'}
                  </Typography>
                  <Typography sx={{ ...uiConfigs.style.typoLines(10) }}>
                    {person.biography}
                  </Typography>
                </Stack>
              </Box>
            </Box>
            <Container header='medias'>
              <ActorMediaGrid personId={personId} />
            </Container>
          </Box>
        </>
      )}
    </>
  );
};

export default ActorDetail;
