import styles from './TabButton.module.css'

export default function TabButton({children, setAction, classNameAction}){
    let actionClass = styles[classNameAction] || styles.default;
    return <>
    <button className={`${actionClass}`}  onClick={setAction}>{children}</button>
    </>
}