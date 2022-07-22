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

  @State() groups = [];
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
          const branchNames = data
            .map((branch) => branch.name)
            .filter(
              (branch) =>
                branch !== 'gh-pages' && !branch.includes('dependabot')
            );
          const tmpGroups = [
            { name: 'Versions', branches: [] },
            { name: 'Features', branches: [] },
            { name: 'Bugfixes', branches: [] }
          ];
          branchNames.forEach((branch) => {
            if (branch.startsWith('feat') || branch.startsWith('feature')) {
              tmpGroups[1].branches.push(branch);
            } else if (
              branch.startsWith('fix') ||
              branch.startsWith('bugfix')
            ) {
              tmpGroups[2].branches.push(branch);
            } else {
              tmpGroups[0].branches.push(branch);
            }
          });
          // eslint-disable-next-line no-console
          console.log(tmpGroups);
          this.groups = tmpGroups;
          const currentUrl = window.location.href;
          const foundBranch = branchNames.find((branch) =>
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
