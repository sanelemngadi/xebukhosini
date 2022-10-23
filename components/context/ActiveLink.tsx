import React, { FC } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

interface Props {
    router: any,
    href: string,
    children?: React.ReactNode,
    link: string
}


const ActiveLink: FC<Props> = ({ router, href, link }) => {

    const isActive = router.pathname === href || router.asPath === href;
    return (
        <li>
            <Link
                href={href}
                passHref
                prefetch={false}
            >
                <a style={{ fontWeight: isActive ? 700 : 500 }}>{link}</a>
            </Link>
        </li>
    )
}

export default withRouter(ActiveLink)