import { Component, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'github-version-switcher',
  shadow: true
})
export class GithubVersionSwitcher {
  /**
   * Provides the owner of the repo
   */
  @Prop({ reflect: false }) owner: string;

  /**
   * Provides the name of the repo
   */
  @Prop({ reflect: false }) repo: string;

  /**
   * Provides the defaultBranch of the repo
   */
  @Prop({ reflect: false }) defaultBranch: string = 'main';

  @State() branches = [];
  @State() currentBranch = this.defaultBranch;

  componentWillLoad() {
    fetch(`https://api.github.com/repos/${this.owner}/${this.repo}/branches`)
      .then((response) => response.json())
      .then((data) => {
        this.branches = data
          .map((branch) => branch.name)
          .filter((branch) => branch !== 'gh-pages');
        const currentUrl = window.location.href;
        const foundBranch = this.branches.find((branch) =>
          currentUrl.includes(branch)
        );
        if (foundBranch) {
          this.currentBranch = foundBranch;
        }
      });
  }

  // eslint-disable-next-line @stencil/own-methods-must-be-private
  handleChange(branch: string, localOwner: string, localRepo: string) {
    if (localOwner && localRepo) {
      top.location = `https://${localOwner}.github.io/${localRepo}${
        this.defaultBranch === branch ? '' : `/review/${branch}`
      }/index.html`;
    }
  }

  render() {
    return (
      <Host>
        {this.branches?.length > 0 && (
          <db-select
            label="Version"
            name="Theme"
            onDbChange={(event) =>
              this.handleChange(event.target.value, this.owner, this.repo)
            }
          >
            {this.branches.map((branch: string, index: number) => (
              <option
                key={`${branch}-${index}`}
                value={branch}
                selected={this.currentBranch === branch}
              >
                {branch}
              </option>
            ))}
          </db-select>
        )}
      </Host>
    );
  }
}
