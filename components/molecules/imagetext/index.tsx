import React from 'react';
import styles from "../../../styles/Home.module.scss";

interface Props {
    children: React.ReactNode,
}

const ImageText: React.FC<Props> = ({ children }) => {
    return (
        <article className={styles.imageTextCard}>
            {children}
        </article>
    )
}

export default ImageText