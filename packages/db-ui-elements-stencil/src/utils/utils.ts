import { DbLinkType } from '../components/db-link/db-link-type';

export const format = (first: string, middle: string, last: string): string =>
  (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');

export const uuid = () => {
  return window.crypto?.randomUUID() || Math.random().toString();
};

/**
 *
 * @param doc calculates all css custom properties in root: scope
 * @return list of keys
 */
export const calcCustomProperties = (doc: Document) =>
  [].slice
    .call(doc.styleSheets)
    .map((styleSheet) => [].slice.call(styleSheet.cssRules))
    .flat()
    .filter((cssRule) => cssRule.selectorText === ':root')
    .map((cssStyleRule) => cssStyleRule.style)
    .map((cssStyleDeclaration) => [].slice.call(cssStyleDeclaration))
    .flat();

/**
 * @return - Promise with all css custom properties in the root: scope,
 * that is resoved when document load is complete
 */
export const listCustomProperties = async () =>
  domReady().then(
    (doc: Document) => {
      return calcCustomProperties(doc);
    },
    (err) => {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  );

/**
 * @return: Promisse, that resolve when document load is complete
 */
export const domReady = () => {
  return new Promise((resolve, reject) => {
    document.readyState || reject("Can't resolve document readystate");
    if (document.readyState === 'complete') {
      resolve(document);
    } else {
      window.addEventListener('load', function () {
        resolve(document);
      });
    }
  });
};

/**
 * Adds the class "elm-link" to a element which are not db-link
 * @param child the stencil element
 */
export const addElmLinkToElement = (child: Element) => {
  const currentClass = child.getAttribute('class');
  if (child.tagName.toLowerCase() !== 'db-link') {
    if (!currentClass) {
      child.setAttribute('class', `elm-link`);
    } else if (!currentClass.includes('elm-link')) {
      child.setAttribute('class', `${currentClass} elm-link`);
    }
  }
};

export const getDefaultLinkData = (compData: DbLinkType[]) => {
  if (!compData) return '';
  return compData
    .map(
      (data) =>
        `<li><db-link href="${data.href}" target="${data.target}">${data.label}</db-link></li>`
    )
    .join('\n');
};

/**
 * Adds the given variant as attribute for all db-links
 * @param host the stencil host element
 * @param variant icon variant
 */
export const addIconVariantToAllDbLinksRecursive = (
  host: Element,
  variant:
    | '16-filled'
    | '20-filled'
    | '24-filled'
    | '32-filled'
    | '48-filled'
    | '64-filled'
    | '16-outline'
    | '20-outline'
    | '24-outline'
    | '32-outline'
    | '48-outline'
    | '64-outline'
) => {
  if (host.children) {
    Array.from(host.children).forEach((child) => {
      if (child.tagName.toLowerCase() === 'db-link') {
        child.setAttribute('icon-variant', variant);
      }
      if (child.children) {
        addIconVariantToAllDbLinksRecursive(child, variant);
      }
    });
  }
};

/**
 * Without framework (Angular, React, Vue) we will need to pass a data as
 * string.
 */
export const parseData = (item: string | object | unknown) => {
  try {
    if (typeof item === 'string') {
      return JSON.parse(item);
    }
    if (typeof item === 'object') return item;
    if (item instanceof Array) return item;
  } catch (error) {
    return false;
  }
};
