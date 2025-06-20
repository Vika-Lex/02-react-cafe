import style from './CafeInfo.module.css'

const CafeInfo = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Sip Happens Café</h1>
            <p className={style.description}>
                Please rate our service by selecting one of the options below.
            </p>
        </div>
    );
};
export default CafeInfo