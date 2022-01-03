import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './tabs.scss';

export default function Tabs({ tabContent }) {
    const [activeTab, setActiveTab] = React.useState(0);

    return (
        <div>
            <div className={classes.tabs}>
                {tabContent.map((tab, idx) => (
                    <span
                        key={tab.label}
                        className={
                            activeTab === idx
                                ? classes.descriptionTitleactive
                                : classes.descriptionTitle
                        }
                        onClick={() => setActiveTab(idx)}
                        onKeyDown={() => undefined}
                        role="button"
                        tabIndex={idx}
                    >
                        <FormattedMessage
                            id={tab.label}
                            defaultMessage={tab.label}
                        />
                    </span>
                ))}
            </div>
            {tabContent.map((tab, idx) =>
                idx === activeTab ? tab.content : null
            )}
        </div>
    );
}
