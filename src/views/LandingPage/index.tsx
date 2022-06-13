import './landingPage.scss';
import { ContentBlock } from '../ContentBlock';

export const LandingPage = () => (
  <>
    <section className="landing-page">
      <h2 className="landing-page__header">Welcome!</h2>
      <p className="landing-page__paragraph">This simple SPA was built by using React TypeScript Template + React Router v6 + SCSS.</p>
      <p className="landing-page__paragraph">On Tasks page there are my solutions to received tasks.</p>
      <p className="landing-page__paragraph">
        In case you need these functions to look at more closely, please proceed
        <a className="landing-page__link" href="https://github.com/LipinVV/consortium-codex-task/blob/main/src/service/index.tsx" target="_blank" rel="noreferrer">here</a>
        or
        <a className="landing-page__link" href="https://github.com/LipinVV/consortium-codex-task" target="_blank" rel="noreferrer">there</a>
        if you want to observe the whole project.
      </p>
      <p className="landing-page__paragraph">Through Contacts page you can reach me by Telegram in case of any further questions.</p>
    </section>
    <ContentBlock />
  </>
);
