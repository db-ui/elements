import { Component, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'github-version-switcher',
  styleUrl: 'github-version-switcher.scss',
  shadow: true
})
export class GithubVersionSwitcher {
  private _defaultBranch = 'latest';
  get defaultBranch(): string {
    return this._defaultBranch;
  }

  set defaultBranch(value: string) {
    this._defaultBranch = value;
  }
  /**
   * Provides the owner of the repo
   */
  @Prop({ reflect: false }) owner: string;

  /**
   * Provides the name of the repo
   */
  @Prop({ reflect: false }) repo: string;
  @State() groups = [
    { prefix: 'v', name: 'Versions', branches: [] },
    { prefix: 'test', name: 'Tests', branches: [] },
    { prefix: 'feat', name: 'Features', branches: [] },
    { prefix: 'fix', name: 'Bugfixes', branches: [] },
    { prefix: 'chore', name: 'Chore', branches: [] },
    { prefix: 'docs', name: 'Docs', branches: [] },
    { prefix: 'refactor', name: 'Refactors', branches: [] },
    { prefix: 'style', name: 'Styles', branches: [] },
    { prefix: 'ci', name: 'CI', branches: [] },
    { prefix: 'perf', name: 'Perf', branches: [] },
    { prefix: '', name: 'Other', branches: [] }
  ];
  @State() currentBranch = this._defaultBranch;
  @State() cleanOwner;
  @State() cleanRepo;

  private stripString = (value: string): string => {
    return value.replace(/[^a-zA-Z0-9-]/g, '');
  };

  private fetchFromGitHubApi = async (url: string) => {
    const response = await fetch(url);
    return await response.json();
  };

  private setCurrentBranch = (branchNames: string[]) => {
    const currentUrl = window.location.href;
    const foundBranch = branchNames.find((branch) =>
      currentUrl.includes(branch)
    );
    if (foundBranch) {
      this.currentBranch = foundBranch;
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private setBranches = (data: any[]) => {
    const branchNames = data
      .map((branch) => branch.name)
      .filter(
        (branch) => branch !== 'gh-pages' && !branch.includes('dependabot')
      );
    branchNames.forEach((branch) => {
      const foundGroup = this.groups.find((grp) =>
        branch.startsWith(grp.prefix)
      );
      if (foundGroup) {
        foundGroup.branches.push(branch);
      } else {
        this.groups[3].branches.push(branch);
      }
    });
    this.setCurrentBranch(branchNames);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private setTags = (data: any[]) => {
    const tagNames = data.map((tag) => tag.name);
    tagNames.forEach((tag: string) => {
      this.groups[0].branches.push(tag);
    });
    this.setCurrentBranch(tagNames);
  };

  async componentWillLoad() {
    const cOwner = this.stripString(this.owner);
    this.cleanOwner = cOwner;
    const cRepo = this.stripString(this.repo);
    this.cleanRepo = cRepo;
    const branchesData = await this.fetchFromGitHubApi(
      `https://api.github.com/repos/${cOwner}/${cRepo}/branches`
    );
    this.setBranches(branchesData);
    const tagsData = await this.fetchFromGitHubApi(
      `https://api.github.com/repos/${cOwner}/${cRepo}/tags`
    );
    this.setTags(tagsData);
  }

  // eslint-disable-next-line @stencil-community/own-methods-must-be-private
  handleChange(branch: string, localOwner: string, localRepo: string) {
    if (localOwner && localRepo) {
      const currentUrl = top.location.href;
      const urlPaths = currentUrl.split('?');
      const lastPath = urlPaths[urlPaths.length - 1];
      const isTag = branch.split('.').length === 3 && branch.startsWith('v');
      top.location = `https://${localOwner}.github.io/${localRepo}${
        this._defaultBranch === branch
          ? ''
          : `${isTag ? '/version' : '/review'}/${branch}`
      }/?${lastPath}`;
    }
  }

  render() {
    return (
      <Host>
        {this.groups?.length > 0 && (
          <db-select
            class="gh-version-switcher"
            label="Version"
            name="Theme"
            onDbChange={(event) =>
              this.handleChange(
                event.target.value,
                this.cleanOwner,
                this.cleanRepo
              )
            }
          >
            <option
              value={this._defaultBranch}
              selected={this.currentBranch === this._defaultBranch}
            >
              {this._defaultBranch}
            </option>
            {this.groups
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              .filter((group: any) => group.branches?.length > 0)
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              .map((group: any) => (
                <optgroup key={group.name} label={group.name}>
                  {group.branches.map((branch: string, index: number) => (
                    <option
                      key={`${group.name}-${branch}-${index}`}
                      value={branch}
                      selected={this.currentBranch === branch}
                    >
                      {branch}
                    </option>
                  ))}
                </optgroup>
              ))}
          </db-select>
        )}
      </Host>
    );
  }
}
