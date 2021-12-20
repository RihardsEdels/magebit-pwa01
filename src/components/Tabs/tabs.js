import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './tabs.module.css';

export default function Tabs({ tabs, handleTabs }) {
    return (
        <div className={classes.tabs}>
            <span
                onClick={handleTabs}
                onKeyDown={handleTabs}
                role="button"
                tabIndex={0}
                className={
                    tabs === 'tab1'
                        ? classes.descriptionTitleactive
                        : classes.descriptionTitle
                }
                id="tab1"
            >
                <FormattedMessage
                    id={'productFullDetail.productDescription'}
                    defaultMessage={'Description'}
                />
            </span>
            <span
                onClick={handleTabs}
                role="button"
                tabIndex={0}
                onKeyDown={handleTabs}
                className={
                    tabs === 'tab2'
                        ? classes.descriptionTitleactive
                        : classes.descriptionTitle
                }
                id="tab2"
            >
                <FormattedMessage
                    id={'productFullDetail.attributes'}
                    defaultMessage={'Attributes'}
                />
            </span>
        </div>
    );
}
