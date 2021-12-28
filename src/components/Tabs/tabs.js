import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './tabs.scss';

export default function Tabs({ defaultTabLabels, tabContent }) {
    const [tabs, setTabs] = React.useState(defaultTabLabels[1]);

    return (
        <div>
            <div className={classes.tabs}>
                {defaultTabLabels.map(tab => (
                    <span
                        onClick={e => setTabs(e.target.id)}
                        onKeyDown={e => setTabs(e.target.id)}
                        role="button"
                        Tabs
                        tabIndex={0}
                        className={
                            tabs === tab
                                ? classes.descriptionTitleactive
                                : classes.descriptionTitle
                        }
                        id={tab}
                    >
                        <FormattedMessage id={tab} defaultMessage={tab} />
                    </span>
                ))}
            </div>
            {defaultTabLabels.map((label, idx) =>
                label === tabs ? tabContent[idx] : null
            )}
        </div>
    );
}
