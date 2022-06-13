import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import './navigation.scss';

export const Navigation = () => (
  <nav className="navigation">
    <Link className="navigation__link" to={routes.landing}>HomePage</Link>
    <Link className="navigation__link" to={routes.tasks}>Tasks</Link>
    <Link className="navigation__link" to={routes.contacts}>Contacts</Link>
    <Link className="navigation__link" to={routes.noMatchTestExample}>No Match</Link>
  </nav>
);
