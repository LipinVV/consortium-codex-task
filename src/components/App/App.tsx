import { Route, Routes } from 'react-router';
import { Header } from '../Header';
import { Tasks } from '../../views/Tasks';
import { LandingPage } from '../../views/LandingPage';
import { Contacts } from '../../views/Contacts';
import { NoMatchPage } from '../NoMatchPage';
import { routes } from '../../routes';
import './App.scss';

const App = () => (
  <div className="app">
    <Header />
    <Routes>
      <Route path={routes.landing} element={<LandingPage />} />
      <Route path={routes.tasks} element={<Tasks />} />
      <Route path={routes.contacts} element={<Contacts />} />
      <Route path={routes.noMatch} element={<NoMatchPage />} />
    </Routes>
  </div>
);

export default App;
