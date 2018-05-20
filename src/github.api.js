const token = localStorage.getItem('github_token');
const baseUrl = localStorage.getItem('github_url');
const login = localStorage.getItem('github_login');

export default function fetchOrganizations() {
  return fetch(`${baseUrl}/api/graphql`, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${token}`
    },
    body: JSON.stringify({"query": `query{user(login:"${login}"){name,organizations(first:100){edges{node{avatarUrl,name,url,repositories(first:100){edges{node{name,url}}}}}}}}`})
  })
    .then(response => response.json())
    .then(response => _transformData(response))
}

function _transformData({ data }) {
  let organizations = [];
  if (data.user) {
    organizations = data.user.organizations.edges
      .map(({ node }) => {
        node.repositories = node.repositories.edges.map((repo) => repo.node)
        return node;
      })
  }

  return organizations;
}