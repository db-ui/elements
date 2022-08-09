import { DbLinkType } from '../components/db-link/db-link-type';
import { HTMLStencilElement } from '@stencil/core/internal';

export const format = (first: string, middle: string, last: string): string =>
  (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');

export const uuid = () => {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  } catch (_) {
    // this is only for jest tests
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
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
    | '20-filled'
    | '24-filled'
    | '32-filled'
    | '48-filled'
    | '64-filled'
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

/**
 * Adds a scroll listener to the document to check if there is a scroll.
 * @param onScrollChange a func with gives direction (0 - initial, 1 - up, 2 - down) and currentPxScrolled (current px scrolled)
 */
export const addScrollListener = (
  onScrollChange: (direction: number, currentPxScrolled: number) => void
) => {
  const doc = document.documentElement;
  const win = window;

  let previousScroll: number = win.scrollY || doc.scrollTop;
  let currentPxScrolled: number;
  let direction = 0;
  let previousDirection = 0;

  const throttle = (func: () => void, time = 100) => {
    const lastTime = 0;
    return () => {
      const now = new Date().getTime();
      if (now - lastTime >= time) {
        func();
        time = now;
      }
    };
  };

  const checkScroll = () => {
    // Only do this for screen smaller tablet
    if (win.screen.width < 768) {
      currentPxScrolled = win.scrollY || doc.scrollTop;
      if (currentPxScrolled > previousScroll) {
        //scrolled up
        direction = 2;
      } else if (currentPxScrolled < previousScroll) {
        //scrolled down
        direction = 1;
      }

      if (
        direction !== previousDirection ||
        previousScroll !== currentPxScrolled
      ) {
        onScrollChange(direction, currentPxScrolled);
      }
      previousDirection = direction;
      previousScroll = currentPxScrolled;
    }
  };

  window.addEventListener('scroll', throttle(checkScroll));
};

export const setMobileScroll = (host: HTMLStencilElement) => {
  host.setAttribute('mobile-scroll', 'true');
  addScrollListener((direction: number, currentPxScrolled: number) => {
    if (direction === 2 && currentPxScrolled > 64) {
      host.setAttribute('scroll-hide', 'true');
    } else if (direction === 1 && host.hasAttribute('scroll-hide')) {
      host.removeAttribute('scroll-hide');
    }
  });
};
