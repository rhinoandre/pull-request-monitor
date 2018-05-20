import React, { Component } from 'react';
import fetchOrganizations from '../github.api.js';
import Repositories from './Repositories';

export function Organization(props) {
  return (
    <li className="organization">
      <h3><a onClick={() => props.onToggleRepositories(props.organizationIndex)}>{props.data.name}</a></h3>
      <Repositories
        isVisible={props.showRepository}
        repositories={props.data.repositories} />
    </li>
  );
}

export default class OrganizationList extends Component {
  constructor(props) {
    super();
    this.state = props;

    fetchOrganizations()
        .then((organizations) => this.setState({ organizations }))
        .catch(console.error);
  }

  toggleRepositories = (organizationIndex) => {
    this.setState({
      repositoryOpened: this.state.repositoryOpened === organizationIndex ? -1 : organizationIndex
    });
  }

  render() {
    let returnedValue = (<li>You must provide: github_token, github_url, github_login</li>);
    if (this.state.organizations) {
      returnedValue = this.state.organizations
        .map((organization, index) => {
          return <Organization
                    data={organization}
                    showRepository={this.state.repositoryOpened === index}
                    organizationIndex={index}
                    key={index}
                    onToggleRepositories={this.toggleRepositories} />;
        });
    }

    return (
      <div>
        <h1>Repositories</h1>
        <ul>{returnedValue}</ul>
      </div>
    );
  }
}
