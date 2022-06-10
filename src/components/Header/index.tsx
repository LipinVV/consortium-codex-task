import { Navigation } from '../Navigation';
import './header.scss';

export const Header = () => (
  <header className="header">
    <h1 className="header__main-heading">Consortium Codex Test Task</h1>
    <Navigation />
    <hr className="header__underline" />
  </header>
);
