# Pull Request Control

Show all Pull Requests opened in the repositories you have interesting on whether you are a reviewer/assigner.

## Requirements

(Temporarily) You must create 3 keys on the localStorage
- github_token: GitHub access token that you can create in [settings page](https://github.com/settings/tokens). 
  - Permissions required:
    - Repo:
      - public_repo
    - Admin:
      - read:org
- github_login: Login from you GitHub
- github_url: Base URL from the GitHub you want to retrieve the information (eg.: https://github.com)

# Running

1. Clone the repository and get into the folder created
2. `npm i`
3. `npm start`
4. The browser should be opened automatically

# TODOS

### Required

System should be able to:
- [x] Retrieve and show Organizations and Repositories
- [ ] Retrieve and show pull requests for selected repositories
- [ ] Store repositories selected into localStorage

User should be able to:
- [ ] Select repositories to monitor the pull request
- [ ] Change the repositories selected
- [ ] Filter

**All feedbacks are welcome**
