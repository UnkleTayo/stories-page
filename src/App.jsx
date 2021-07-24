import Loadable from 'react-loadable';

import './app.scss';

const loader = () => <div>Loading.</div>;

const HomeLazy = Loadable({
  loader: () => import('./pages/Home'),
  loading: loader,
});
const App = () => {
  return (
    <>
      <HomeLazy />
    </>
  );
};

export default App;
