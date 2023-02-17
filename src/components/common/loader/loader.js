import s from './loader.module.css';

const Loader = () => {
    return (
        <div className={s.loader_wrapper}>
            <div className={s.lds_ellipsis}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Loader;
