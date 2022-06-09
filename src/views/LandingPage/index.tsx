import './landingPage.scss';

export const LandingPage = () => {

    return (
        <section className='landing-page'>
            <h2 className='landing-page__header'>Welcome!</h2>
            <p className='landing-page__paragraph'>This simple SPA was built by using React library + React Router v6 + SCSS</p>
            <p className='landing-page__paragraph'>On "Tasks" page there are my solutions to received tasks</p>
            <p className='landing-page__paragraph'>Through "Contacts" page you can reach me by Telegram in case of any questions</p>
        </section>
    )
}