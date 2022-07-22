import { Component, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'github-version-switcher',
  styleUrl: 'github-version-switcher.scss',
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
  @State() cleanOwner;
  @State() cleanRepo;

  private stripString = (value: string): string => {
    return value.replace(/[^a-zA-Z0-9-]/g, '');
  };

  componentWillLoad() {
    const cOwner = this.stripString(this.owner);
    this.cleanOwner = cOwner;
    const cRepo = this.stripString(this.repo);
    this.cleanRepo = cRepo;
    fetch(`https://api.github.com/repos/${cOwner}/${cRepo}/branches`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
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
        }
      });
  }

  // eslint-disable-next-line @stencil/own-methods-must-be-private
  handleChange(branch: string, localOwner: string, localRepo: string) {
    if (localOwner && localRepo) {
      const currentUrl = top.location.href;
      const urlPaths = currentUrl.split('?');
      const lastPath = urlPaths[urlPaths.length - 1];
      top.location = `https://${localOwner}.github.io/${localRepo}${
        this.defaultBranch === branch ? '' : `/review/${branch}`
      }/?${lastPath}`;
    }
  }

  render() {
    return (
      <Host>
        {this.branches?.length > 0 && (
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
