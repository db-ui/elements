import {
  Component,
  Element,
  Event,
  Fragment,
  h,
  Prop,
  Watch
} from '@stencil/core';
import { uuid } from '../../utils/utils';

@Component({
  tag: 'db-pagination',
  styleUrl: 'db-pagination.scss'
})
export class DbPagination {
  private pagesFull: number[];

  /**
   * The ellipsisstart attribute only needs to be passed when working with slots.
   * Should to be set to true if an ellipsis needs to be shown at the start of
   * the pagination.
   */
  @Prop({ reflect: true }) ellipsisstart: boolean;

  /**
   * The ellipsisend attribute only needs to be passed when working with slots.
   * Should to be set to true if an ellipsis needs to be shown at the end of
   * the pagination.
   */
  @Prop({ reflect: true }) ellipsisend: boolean;

  /**
   * The currentpage attribute is a obligatory number attribute and indicates which
   * page number is highlighted in the pagination.
   */
  @Prop({ reflect: true }) currentpage: number = 1;

  /**
   * The pages attribute is a obligatory number attribute and indicates how many
   * pages the pagination knows about.
   */
  @Prop({ reflect: true }) pages: number = 2;

  /**
   * The count attribute is a number attribute and defines the number of pages
   * displayed apart from the first and last page (except if currentpage is the
   * first or last page, then these pages are included in the count).
   */
  @Prop({ reflect: true }) count: number = 2;

  /**
   * The titleprevious attribute is a string attribute and defines the title of
   * the left arrow in the pagination.
   */
  @Prop({ reflect: true }) titleprevious: string = 'Goto previous page';

  /**
   * The titlenext attribute is a string attribute and defines the title of
   * the right arrow in the pagination.
   */
  @Prop({ reflect: true }) titlenext: string = 'Goto next page';

  /**
   * The titlepagination attribute is a string attribute and defines the title of
   * each page number (except first and last) displayed in the pagination.
   */
  @Prop({ reflect: true }) titlepagination: string = 'Page Number';

  /**
   * The textprevious attribute is a string attribute and defines the text
   * content of the left arrow in the pagination.
   */
  @Prop({ reflect: true }) textprevious: string = 'Previous';

  /**
   * The textnext attribute is a string attribute and defines the text
   * content of the right arrow in the pagination.
   */
  @Prop({ reflect: true }) textnext: string = 'Next';

  /**
   * The arialabel attribute is a string attribute and defines the text
   * content of the aria-label in the pagination.
   */
  @Prop({ reflect: true }) arialabel: string = 'Pagination';

  /**
   * Optional id for the caption aria label - otherwise random id will be set
   */
  @Prop({ reflect: false }) ariaid: string = 'pagination-' + uuid();

  /**
   * Mapping for default change Event
   */
  @Event() dbChange;

  private handleChange(event) {
    this.dbChange.emit(event);
  }

  /*
   * Watch for outside changes on relevant attributes
   */
  @Watch('pages')
  @Watch('currentpage')
  @Watch('count')
  watchHandler() {
    this.sliceAndSetDefaults();
  }

  @Element() hostElement: HTMLDbPaginationElement;
  /*
   * Sets the initial values on components first load
   */
  componentWillLoad() {
    this.sliceAndSetDefaults();
  }

  private sliceAndSetDefaults() {
    const pagesFullOverload = Array.from(Array(this.pages + 1).keys());
    const [, ...pagesFull] = pagesFullOverload;
    this.pagesFull = pagesFull;
  }

  private decorateChild(child) {
    child.setAttribute('class', 'elm-link');
    if (child.getAttribute('data-currentpage')) {
      child.setAttribute('aria-current', 'page');
      child.setAttribute('aria-disabled', 'true');
    }
    return <li innerHTML={child.outerHTML} />;
  }

  private paginationButtonFragment({
    page,
    curr,
    ariaCurrent,
    ariaDisabled,
    title,
    rel,
    tabindex,
    disabled,
    index
  }) {
    return (
      <li key={index}>
        <button
          class="elm-link"
          data-rel={rel === 'none' ? false : `${rel}`}
          tabindex={tabindex ? '-1' : false}
          title={title + ` ${page ? page : ''}`}
          type="button"
          {...((page === curr || disabled) && ariaCurrent)}
          {...((page === curr || disabled) && ariaDisabled)}
          onClick={(event) => this.handleChange(event)}
        >
          {page}
        </button>
      </li>
    );
  }

  private navElement(children) {
    return (
      <nav
        class="cmp-pagination"
        role="navigation"
        aria-labelledby={this.ariaid}
      >
        <h2 class="elm-headline " id={this.ariaid}>
          {this.arialabel.charAt(0).toUpperCase() + this.arialabel.slice(1)}
        </h2>
        <ol>{children}</ol>
      </nav>
    );
  }

  private slotChildren() {
    const _children = Array.from(this.hostElement.children);

    // Don't render the children provided via slot
    this.hostElement.innerHTML = '';

    const [firstChild, ...withoutFirst] = _children;
    const [lastChild, ...withoutTips] = [...withoutFirst].reverse();
    const tiplessChildren = withoutTips.reverse();

    const currentPage = tiplessChildren.findIndex((child) =>
      child.getAttribute('data-currentpage')
    );

    const prevPage = (
      currentPage >= 0
        ? tiplessChildren[currentPage - 1].cloneNode(true)
        : firstChild.cloneNode(true)
    ) as HTMLAnchorElement;

    prevPage.setAttribute('rel', 'prev');
    prevPage.setAttribute('tabindex', '-1');

    const nextPage = (
      currentPage >= 0 && tiplessChildren.length <= currentPage
        ? tiplessChildren[currentPage + 1].cloneNode(true)
        : lastChild.cloneNode(true)
    ) as HTMLAnchorElement;
    nextPage.setAttribute('rel', 'next');

    return this.navElement(
      <Fragment>
        {this.decorateChild(prevPage)}
        {this.decorateChild(firstChild)}
        {this.ellipsisstart && <li>&hellip;</li>}
        {tiplessChildren.map(this.decorateChild)}
        {this.ellipsisend && <li>&hellip;</li>}
        {this.decorateChild(lastChild)}
        {this.decorateChild(nextPage)}
      </Fragment>
    );
  }

  private goToPreviousPage() {
    return this.paginationButtonFragment({
      page: this.currentpage === 1 ? this.currentpage : this.currentpage - 1,
      curr: this.currentpage,
      ariaCurrent: { 'aria-current': 'page' },
      ariaDisabled: { 'aria-disabled': 'true' },
      title: this.titlepagination,
      rel: 'prev',
      tabindex: true,
      disabled: this.currentpage === 1,
      index: 'A'
    });
  }

  private goToNextPage() {
    return this.paginationButtonFragment({
      page:
        this.currentpage === this.pages + 1
          ? this.currentpage
          : this.currentpage + 1,
      curr: this.currentpage,
      ariaCurrent: { 'aria-current': 'page' },
      ariaDisabled: { 'aria-disabled': 'true' },
      title: this.titlenext,
      rel: 'next',
      tabindex: true,
      disabled: this.currentpage === this.pages ? true : false,
      index: 'E'
    });
  }

  private goToFirstPage() {
    return this.paginationButtonFragment({
      page: this.pagesFull[0],
      curr: this.currentpage,
      ariaCurrent: { 'aria-current': 'page' },
      ariaDisabled: { 'aria-disabled': 'true' },
      title: this.titlepagination,
      rel: 'none',
      tabindex: false,
      disabled: false,
      index: 'B'
    });
  }

  private goToLastPage() {
    return this.paginationButtonFragment({
      page: this.pagesFull.slice(-1),
      curr: this.currentpage,
      ariaCurrent: { 'aria-current': 'page' },
      ariaDisabled: { 'aria-disabled': 'true' },
      title: this.titlepagination,
      rel: 'none',
      tabindex: false,
      disabled: this.currentpage === this.pages,
      index: 'C'
    });
  }

  private showMiddlePage(num: number) {
    return this.paginationButtonFragment({
      page: num,
      curr: this.currentpage,
      ariaCurrent: { 'aria-current': 'page' },
      ariaDisabled: { 'aria-disabled': 'true' },
      title: this.titlepagination,
      rel: 'none',
      tabindex: false,
      disabled: false,
      index: num
    });
  }

  private showEllipsis(place: string) {
    if (this.pagesFull.length < 8) {
      return null;
    }
    if (this.currentpage < 4 && place === 'front') {
      return null;
    }
    if (this.currentpage > this.pagesFull.length - 5 && place === 'back') {
      return null;
    }
    return <li key={place}>&hellip;</li>;
  }

  private sliceCenterPages() {
    // Decide how to cut the pages for the middle of the pagination
    if (this.pagesFull.length < 8) {
      return this.pagesFull.slice(1, -1);
    }

    const localCount =
      this.currentpage <= 3 || this.currentpage >= this.pagesFull.length - 3
        ? this.count + 1
        : this.count;

    if (this.currentpage + this.count >= this.pagesFull.length) {
      return this.pagesFull.slice(-localCount - 1, -1);
    }
    if (this.pagesFull.length - 2 <= localCount) {
      return this.pagesFull.slice(1, 1 + this.pagesFull.length - 2);
    }
    if (this.pagesFull.length - 2 > localCount && this.currentpage <= 3) {
      return this.pagesFull.slice(1, 1 + localCount);
    }
    if (
      this.pagesFull.length - 2 > this.count &&
      this.currentpage > 3 &&
      this.currentpage + this.count < this.pagesFull.length
    ) {
      const finalSlice = this.pagesFull.slice(
        this.currentpage - 1,
        this.currentpage + localCount
      );

      const isAtTheEnd = finalSlice.includes(this.pagesFull.length - 1);
      return isAtTheEnd ? finalSlice : finalSlice.slice(0, -1);
    }
    return [];
  }

  private centerPages() {
    return this.sliceCenterPages().map((num) => this.showMiddlePage(num));
  }

  render() {
    const _children = Array.from(this.hostElement.children);
    const hasChildren = _children.find(
      (child) => child.tagName.toLowerCase() === 'a'
    );

    if (hasChildren) {
      return this.slotChildren();
    }

    return this.navElement(
      <Fragment>
        {this.goToPreviousPage()}
        {this.goToFirstPage()}
        {this.showEllipsis('front')}
        {this.pagesFull.length >= 3 ? this.centerPages() : null}
        {this.showEllipsis('back')}
        {this.goToLastPage()}
        {this.goToNextPage()}
      </Fragment>
    );
  }
}
