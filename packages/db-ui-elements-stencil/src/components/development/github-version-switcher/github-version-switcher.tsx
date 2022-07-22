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
    { name: 'Versions', branches: [] },
    { name: 'Features', branches: [] },
    { name: 'Bugfixes', branches: [] },
    { name: 'Other', branches: [] }
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

  private setBranches = (data: any[]) => {
    const branchNames = data
      .map((branch) => branch.name)
      .filter(
        (branch) => branch !== 'gh-pages' && !branch.includes('dependabot')
      );
    branchNames.forEach((branch) => {
      if (branch.startsWith('feat') || branch.startsWith('feature')) {
        this.groups[1].branches.push(branch);
      } else if (branch.startsWith('fix') || branch.startsWith('bugfix')) {
        this.groups[2].branches.push(branch);
      } else {
        this.groups[3].branches.push(branch);
      }
    });
    this.setCurrentBranch(branchNames);
  };

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

  // eslint-disable-next-line @stencil/own-methods-must-be-private
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
              .filter((group: any) => group.branches?.length > 0)
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
