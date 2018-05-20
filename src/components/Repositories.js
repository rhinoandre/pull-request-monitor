import React from 'react';

export default function Repositories(props) {
    const repositories = props.repositories
        .map(({name, url}, index) => <Repository name={name} url={url} key={index} onSelectRepository={props.onSelectRepository} />);
    return <ul className={(props.isVisible ? 'visible' : 'hidden') + ' Respositories' }>{repositories}</ul>;
}

const Repository = ({ name, url, onSelectRepository }) =>(
    <li><a onClick={() => onSelectRepository(url)}>{name}</a></li>
);
