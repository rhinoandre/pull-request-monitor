import React, { Component } from 'react';
import { fetchOrganizations } from '../github.api.js';
import Repositories from './Repositories';

export default function OrganizationList(props) {
  return <ul className="organizations"><Organization onSelectRepository={props.onSelectRepository} /></ul>;
}

export class Organization extends Component {
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
          return (
            <li className="organizations" key={index}>
              <h1><a onClick={() => this.toggleRepositories(index)}>{organization.name}</a></h1>
              <Repositories onSelectRepository={this.state.onSelectRepository} isVisible={this.state.repositoryOpened === index} repositories={organization.repositories} />
            </li>
          )
        });
    }

    return returnedValue;
  }
}
