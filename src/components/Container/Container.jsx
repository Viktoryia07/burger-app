import s from './container.module.css'
import classNames from "classnames";

export const Container = ({children, className}) => {
    return <div className={classNames(s.container, className)}>
        {children}
    </div>
}