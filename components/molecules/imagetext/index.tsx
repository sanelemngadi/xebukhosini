import React from 'react';
import styles from "./styles/ImageText.module.scss";

interface Props {
    children: React.ReactNode,
}

const ImageText: React.FC<Props> = ({ children }) => {
    return (
        <article className={styles.card}>
            {children}
        </article>
    )
}

export default ImageText