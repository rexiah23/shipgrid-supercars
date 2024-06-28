import React from 'react';
import cssStyles from './ViewInventoryCTA.module.css';
import clsx from 'clsx'; // Import clsx to conditionally apply classes
import Link from 'next/link';

const ViewInventoryCTA = ({ text, style, position = 'center', size = 'md' }) => {
    return (
        <div className={cssStyles.buttonContainer} style={{ justifyContent: position }}>
            <Link href="/inventory" passHref legacyBehavior>
                <a className={clsx(cssStyles.button, cssStyles[size])} style={style}>
                    {text || 'VIEW INVENTORY'}
                </a>
            </Link>
        </div>
    );
};

export default ViewInventoryCTA;
