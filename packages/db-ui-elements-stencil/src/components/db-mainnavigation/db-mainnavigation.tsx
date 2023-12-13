import { Component, Element, h, Prop } from '@stencil/core';
import {
  DbMainnavigationDataType,
  DbMainnavigationItemType
} from './db-mainnavigation-type';
import { parseData } from '../../utils/utils';

const getJsxLinks = (items: DbMainnavigationItemType[]) => {
  return items.map((item, index) => (
    <li key={`mainnavigation-item-${index}`} innerHTML={item.html}>
      {item.children && <ul>{getJsxLinks(item.children)}</ul>}
    </li>
  ));
};

const setupItemsRecursive = (
  children: Element[]
): DbMainnavigationItemType[] => {
  const items: DbMainnavigationItemType[] = [];
  children.forEach((child) => {
    const singleAnchor = child.children.length === 1;

    items.push({
      html: child.outerHTML,
      children:
        !singleAnchor && child.children
          ? setupItemsRecursive(Array.from(child.children))
          : []
    });
  });
  return items;
};
const cleanUpItem = (item: DbMainnavigationItemType) => {
  item.children.forEach((child) => {
    item.html = item.html.replace(child.html, '');
    cleanUpItem(child);
  });
};

const setupOnlyDbLinkNavigation = (
  children: Element[]
): DbMainnavigationItemType[] => {
  const nonDbLinkChildren = children.filter(
    (child) =>
      child.tagName.toLowerCase() !== 'db-link' &&
      child.tagName.toLowerCase() !== 'a'
  );
  if (nonDbLinkChildren.length === 0) {
    const items = setupItemsRecursive(children);
    items.forEach((item) => {
      cleanUpItem(item);
    });
    return items;
  }
  return [];
};

const getCompDataHtml = (compData: DbMainnavigationDataType[]) => {
  let html = '';

  compData.forEach((data) => {
    let listTag = '<li>\n';
    let hasChildren = false;
    if (data.children && data.children.length > 0) {
      listTag = '<li aria-haspopup="true">\n';
      hasChildren = true;
    }

    listTag += `<db-link href="${data.link}" current="${
      data.current ? 'page' : false
    }">${data.label}</db-link>\n`;
    html += listTag;
    if (hasChildren) {
      html += `<ul>\n${getCompDataHtml(data.children)}</ul>\n`;
    }
    html += '</li>';
  });
  return html;
};

const addAreaPopupsRecursive = (children: Element[]) => {
  if (children && children.length > 0) {
    children.forEach((child) => {
      if (child.tagName.toLowerCase() === 'li' && child.children) {
        const subChildren = Array.from(child.children);
        if (
          subChildren.find((sChild) => sChild.tagName.toLowerCase() === 'ul')
        ) {
          child.setAttribute('aria-haspopup', 'true');
        }
        addAreaPopupsRecursive(subChildren);
      }
    });
  }
};

@Component({
  tag: 'db-mainnavigation',
  styleUrl: 'db-mainnavigation.scss'
})
export class DbMainnavigation {
  /**
   * The site-name attribute can be set to have the site name for small screens.
   */
  @Prop({ reflect: true, attribute: 'site-name' }) siteName?: string;

  /**
   * The data attribute can be used to generate main navigation by data.
   */
  @Prop({ reflect: true }) data?: string;

  private hasItemsWrapper: boolean;

  private compData: DbMainnavigationDataType[];

  private children: Element[];
  private onlyLinks: DbMainnavigationItemType[];

  @Element() host: HTMLDbMainnavigationElement;

  componentWillLoad() {
    if (this.data) {
      this.compData = parseData(this.data);
    } else {
      this.children = Array.from(this.host.children);
      this.onlyLinks = setupOnlyDbLinkNavigation(this.children);
      if (this.children.find((child) => child.tagName.toLowerCase() === 'li')) {
        this.hasItemsWrapper = true;
        addAreaPopupsRecursive(this.children);
      } else {
        this.host.innerHTML = '';
      }
    }
  }

  render() {
    return (
      <nav class="cmp-mainnavigation" id="mainnavigation">
        <input type="checkbox" id="toggle_mainnavigation" />
        <label
          htmlFor="toggle_mainnavigation"
          title="Toggle main navigation"
          class="is-site-name"
        >
          {this.siteName}
        </label>
        {this.compData && <ul innerHTML={getCompDataHtml(this.compData)} />}
        {!this.compData && (
          <ul>
            {this.onlyLinks && getJsxLinks(this.onlyLinks)}
            {!this.hasItemsWrapper &&
              !this.onlyLinks &&
              this.children.map((child, index) => (
                <li
                  key={`cmp-mainnavigation-item-${index}`}
                  innerHTML={child.outerHTML}
                />
              ))}
            {this.hasItemsWrapper && <slot />}
          </ul>
        )}
      </nav>
    );
  }
}
