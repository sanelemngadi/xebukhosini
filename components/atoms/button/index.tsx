import React, { HTMLAttributes } from 'react';
import styles from "./styles/Button.module.scss";
import { useRouter } from 'next/router';

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
    children: React.ReactNode,
    push?: string
}

const Button: React.FC<Props> = (props) => {
    const router = useRouter();

    return (
        <button className={styles.button} {...props} onClick={() => props.push && router.push(props.push)}>
            {props.children}
        </button>
    )
}

export default Button