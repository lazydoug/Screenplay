import { Container } from '@mui/material';

function MediaPlayer({ src }) {
  return (
    <div
      className='video_container'
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}>
      <Container maxWidth='100%' height='720' justify='center'>
        <div
          className='player__wrapper'
          style={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            paddingTop: '56.25%',
          }}>
          <iframe
            title='Title'
            src={src}
            width='100%'
            height='100%'
            allowfullscreen='true'
            allowtransparency='true'
            allow='autoplay'
            frameborder='0'
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              bottom: '0',
              right: '0',
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </Container>
    </div>
  );
}

export default MediaPlayer;
