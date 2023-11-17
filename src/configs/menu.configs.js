import { Home } from 'iconsax-react';
import { VideoPlay } from 'iconsax-react';
import { VideoHorizontal } from 'iconsax-react';
import { Lovely } from 'iconsax-react';
import { SearchNormal } from 'iconsax-react';
import { EmojiNormal } from 'iconsax-react';
import { PasswordCheck } from 'iconsax-react';

const main = [
  {
    display: 'home',
    path: '/',
    icon: <Home size='32' color='#ffffff' variant='Broken' />,
    state: 'home',
  },
  {
    display: 'movies',
    path: '/movie',
    icon: <VideoPlay size='32' color='#ffffff' variant='Broken' />,
    state: 'movies',
  },
  {
    display: 'series',
    path: '/tv',
    icon: <VideoHorizontal size='32' color='#ffffff' variant='Broken' />,
    state: 'series',
  },
  {
    display: 'search',
    path: '/search',
    icon: <SearchNormal size='32' color='#ffffff' variant='Broken' />,
    state: 'search',
  },
];

const user = [
  {
    display: 'favorites',
    path: '/favorites',
    icon: <Lovely size='32' color='#ffffff' variant='Broken' />,
    state: 'favorites',
  },
  {
    display: 'reviews',
    path: '/reviews',
    icon: <EmojiNormal size='32' color='#ffffff' variant='Broken' />,
    state: 'reviews',
  },
  {
    display: 'update password',
    path: '/update-password',
    icon: <PasswordCheck size='32' color='#ffffff' variant='Broken' />,
    state: 'update.password',
  },
];

const menuConfigs = { main, user };

export default menuConfigs;
