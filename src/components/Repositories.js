import React from 'react';
import { RepositorySelectedSubject } from './RepositoriesSelected';

export default function Repositories(props) {
    const repositories = props.repositories
        .map(({name, url}, index) => <Repository name={name} url={url} key={index} />);
    return <ul className={(props.isVisible ? 'visible' : 'hidden') + ' Respositories' }>{repositories}</ul>;
}

const Repository = ({ name, url }) =>(
    <li><a onClick={() => RepositorySelectedSubject.next({ name, url })}>{name}</a></li>
);
