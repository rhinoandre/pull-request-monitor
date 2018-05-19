import React, { Component } from 'react';
import { fetchOrganizations } from './github.api.js';
import Repositories from './Repositories';

export default function OrganizationList() {
  return <ul className="organizations"><Organization /></ul>;
}

export class Organization extends Component {
  constructor(props) {
    super();
    this.state = {
      organizations: [],
      repositoryOpen: -1
    };
    fetchOrganizations()
        .then((organizations) => this.setState({ organizations }))
        .catch(console.error);
  }

  toggleRepositories = (organizationIndex) => {
    this.setState({
      repositoryOpen: this.state.repositoryOpen === organizationIndex ? -1 : organizationIndex
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
              <Repositories isVisible={this.state.repositoryOpen === index} repositories={organization.repositories} />
            </li>
          )
        });
    }

    return returnedValue;
  }
}
