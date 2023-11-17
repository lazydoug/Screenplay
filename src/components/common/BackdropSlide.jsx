import { Box } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
import tmdbConfigs from '../../api/configs/tmdb.configs';
import NavigationSwiper from './NavigationSwiper';
import FullscreenRoundedIcon from '@mui/icons-material/FullscreenRounded';

const BackdropSlide = ({ backdrops }) => {
  return (
    <NavigationSwiper>
      {[...backdrops].splice(0, 10).map((item, index) => (
        <SwiperSlide key={index}>
          <div
            style={{
              position: 'relative',
            }}>
            <Box
              sx={{
                paddingTop: '60%',
                backgroundPosition: 'top',
                backgroundSize: 'cover',
                backgroundImage: `url(${tmdbConfigs.backdropPath(
                  item.file_path
                )})`,
              }}></Box>
            <a
              href={tmdbConfigs.backdropPath(item.file_path)}
              download={'Backdrop image'}
              style={{
                position: 'absolute',
                bottom: '5px',
                right: '5px',
              }}>
              <FullscreenRoundedIcon
                sx={{
                  backdropFilter: 'contrast(50%)',
                  color: '#000000',
                }}
              />
            </a>
          </div>
        </SwiperSlide>
      ))}
    </NavigationSwiper>
  );
};

export default BackdropSlide;
