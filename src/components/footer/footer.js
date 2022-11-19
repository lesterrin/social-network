import s from './footer.module.css';

const Footer = () => {
    return (
        <div className={s.footer_wrapper}>
            <div className={s.developed}>
                <div className={s.head}>Разработано c использованием React</div>
                <div className={s.source_link}><a href='https://github.com/lesterrin/social-network'>Ссылка на репозиторий</a></div>
                <div className={s.logo}><img height={50} src='https://lesterrin.vercel.app/static/media/react-logo.8a6fc0a24a800d1e0f4a.png'/></div>
            </div>
        </div>
    );
}

export default Footer;
