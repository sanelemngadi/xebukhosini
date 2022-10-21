import React, { HTMLAttributes } from 'react';
import styles from "./styles/Button.module.scss";

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
    children: React.ReactNode,
}

const Button: React.FC<Props> = (props) => {
    return (
        <button className={styles.button} {...props}>
            {props.children}
        </button>
    )
}

export default Button