import React, { Component } from 'react';
import { fetchOrganizations } from '../github.api.js';
import Repositories from './Repositories';

export function Organization(props) {
  return (
    <li className="organizations">
      <h1><a onClick={() => props.onToggleRepositories(props.organizationIndex)}>{props.data.name}</a></h1>
      <Repositories
        isVisible={props.showRepository}
        repositories={props.data.repositories}
        onSelectRepository={props.onSelectRepository} />
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
                    onToggleRepositories={this.toggleRepositories}
                    onSelectRepository={this.state.onSelectRepository} />;
        });
    }

    return <ul className="organizations">{returnedValue}</ul>;
  }
}
