import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import './contentBlock.scss';

export const ContentBlock = () => (
  <section className="content-block">
    <article className="content-block__article">
      <h3 className="content-block__article-header">High-Tech</h3>
      <p className="content-block__article-paragraph">Some statements about the high-tech and so on</p>
      <Link className="content-block__article-link" to={routes.landing}>Learn More</Link>
    </article>
    <article className="content-block__article">
      <h3 className="content-block__article-header">IT solutions</h3>
      <p className="content-block__article-paragraph">Some news about the IT solutions for clients</p>
      <Link className="content-block__article-link" to={routes.landing}>Learn More</Link>
    </article>
    <article className="content-block__article">
      <h3 className="content-block__article-header">News</h3>
      <p className="content-block__article-paragraph">A few news about IT sector and forecast for companies</p>
      <Link className="content-block__article-link" to={routes.landing}>Learn More</Link>
    </article>
    <article className="content-block__article">
      <h3 className="content-block__article-header">VIP content</h3>
      <p className="content-block__article-paragraph">Special section for our gorgeous clients where they can find limited content</p>
      <Link className="content-block__article-link" to={routes.landing}>Learn More</Link>
    </article>
  </section>
);
