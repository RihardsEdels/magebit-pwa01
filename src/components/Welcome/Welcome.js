import React from 'react';
import classes from './Welcome.scss';
import { useParams } from 'react-router-dom';

export default function Welcome() {
    const { who = 'nobody' } = useParams();

    const [name, setName] = React.useState('');

    return (
        <>
            {name ? (
                <h1 className={classes.welcome}>Welcome to Magebit, {name}</h1>
            ) : (
                <h1 className={classes.input}>What is your name?</h1>
            )}

            <input
                onChange={e => {
                    setName(e.target.value);
                }}
                type="text"
                placeholder="Your name here"
            />
        </>
    );
}
