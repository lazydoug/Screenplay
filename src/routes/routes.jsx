import HomePage from '../pages/HomePage';
import ActorDetail from '../pages/ActorDetail';
import Favoritelist from '../pages/FavoriteList';
import MediaDetail from '../pages/MediaDetail';
import MediaList from '../pages/MediaList';
import MediaSearch from '../pages/MediaSearch';
import UpadtePassword from '../pages/UpdatePassword';
import ReviewList from '../pages/ReviewList';
import ProtectedPage from '../components/common/ProtectedPage';

export const routesGen = {
  home: '/',
  mediaList: (type) => `/${type}`,
  mediaDetail: (type, id) => `/${type}/${id}`,
  mediaSearch: '/search',
  person: (id) => `/person/${id}`,
  favoriteList: '/favorites',
  reviewList: '/reviews',
  updatePassword: '/update-password',
};

const routes = [
  {
    index: true,
    element: <HomePage />,
    state: 'home',
  },
  {
    path: '/actor/personId',
    element: <ActorDetail />,
    state: 'actor.detail',
  },
  {
    path: '/search',
    element: <MediaSearch />,
    state: 'search',
  },
  {
    path: '/update-password',
    element: (
      <ProtectedPage>
        <UpadtePassword />
      </ProtectedPage>
    ),
    state: 'update.password',
  },
  {
    path: '/favorites',
    element: (
      <ProtectedPage>
        <Favoritelist />
      </ProtectedPage>
    ),
    state: 'favorites',
  },
  {
    path: '/reviews',
    element: (
      <ProtectedPage>
        <ReviewList />
      </ProtectedPage>
    ),
    state: 'reviews',
  },
  {
    path: '/:mediaType',
    element: <MediaList />,
  },
  {
    path: '/:mediaType/:mediaId',
    element: <MediaDetail />,
  },
];

export default routes;
