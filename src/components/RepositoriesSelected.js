import React, { Component } from 'react';
import { Subject } from 'rxjs';

export const RepositorySelectedSubject = new Subject();

export default class RepositoriesSelected extends Component{
    constructor() {
        super();
        this.state = {
            repositoriesSelected: []
        }
        RepositorySelectedSubject.subscribe(repositorySelected => this.setState({
            repositoriesSelected: [...this.state.repositoriesSelected, repositorySelected]
        }));
    }

    render() {
        return (<div>
            <h1>Repositories Selected</h1>
            <ul>
                {
                    this.state.repositoriesSelected.map(({ name, url }, index) => <RepositorySelected name={name} url={url} key={index} />)
                }
            </ul>
        </div>);
    }
}

const RepositorySelected = ({name, url}) => <li>{name}</li>;
