import { Component, h, Prop, Watch } from '@stencil/core';
import { TableDataType } from './type';

@Component({
  tag: 'db-table',
  styleUrl: 'db-table.scss',
  scoped: true
})
export class DbTable {
  private errorTableData: TableDataType = {
    caption: 'No valid table data provided',
    headers: ['Error parsing data'],
    columns: {
      'Error parsing data': ['please check data']
    },
    rows: [
      {
        error: [undefined, 'Error parsing data']
      }
    ]
  };

  /**
   * The tabledata prop receives a stringified object of the type
   * "TableDataType" and sets the initial value of the table.
   * It can also be set as a property from the outside via JavaScript
   */
  @Prop({ reflect: false }) tabledata: string | object;

  /**
   * Either holds the value of the validated tabledata prop or "errorTableData"
   */
  private validTableData: TableDataType;

  /**
   * Validates and sets the value of validTableData upon modification of the
   * tabledata attribute/property.
   */
  @Watch('tabledata')
  validateTableData(newTableData: TableDataType) {
    const { caption, headers, columns, rows } = newTableData;
    const columnKeys =
      typeof columns === 'object' && columns !== null
        ? Object.keys(columns)
        : [];
    const isHeader = headers?.length > 0;
    const isRowAndColumn = Array.isArray(rows) && columnKeys.length > 0;

    if (!caption || isRowAndColumn || !isHeader) {
      // eslint-disable-next-line no-console
      console.error(
        'Table data invalid: check caption or headers/columns mismatch'
      );
      this.validTableData = this.errorTableData;
      return;
    }
    this.validTableData = newTableData;
  }

  /**
   * Validate incoming table data props once on creation because they do not fire @watch
   */
  componentWillLoad() {
    this.validateTableData(this.parseTabularData(this.tabledata));
  }

  /**
   * The align prop sets the data-align attribute on the thead
   * element of the rendered table. Valid values are "left" (default), "center",
   * "bottom"
   */
  @Prop({ reflect: true }) align?: string = '';

  /**
   * The verticalalign prop sets the data-vertical-align attribute on
   * the thead element of the rendered table. Valid values are "top"
   * (default), "middle", "bottom"
   */
  @Prop({ reflect: true }) verticalalign?: string = '';

  /**
   * The bodyalign prop sets the data-align attribute on
   * the tbody element of the rendered table. Valid values are "left"
   * (default), "center", "bottom"
   */
  @Prop({ reflect: true }) bodyalign?: string = '';

  /**
   * The bodyverticalalign prop sets the data-vertical-align attribute
   * on the tbody element of the rendered table. Valid values are "top"
   * (default), "middle", "bottom"
   */
  @Prop({ reflect: true }) bodyverticalalign?: string = '';

  /**
   * The border prop sets the data-border attribute
   * on the table element of the rendered table. Valid values are "around",
   * "horizontal"
   */
  @Prop({ reflect: true }) border?: string = '';

  /**
   * The density prop sets the data-density attribute
   * on the table element of the rendered table. Valid values are "small",
   * "regular", "large"
   */
  @Prop({ reflect: true }) density?: string = '';

  /**
   * The fontsize prop sets the the font size of the style attribute
   * on the table element of the rendered table.
   */
  @Prop({ reflect: true }) fontsize?: string = '1rem';

  /**
   * The stripes prop sets the the zebra stripes coloring of the rendered table.
   */
  @Prop({ reflect: true }) stripes?: string = '';

  /**
   * The sticky prop sets the table header stickyness of the rendered table.
   */
  @Prop({ reflect: true }) sticky?: string = '';

  /**
   * Without framework (Angular, React, Vue) we will need to pass a tabledata as
   * string. parseTabularData() will return a fallback so the renderd table can
   * inform the user about a mismatching value if the string cannot be parsed.
   */
  private parseTabularData(item: string | object) {
    try {
      if (typeof item === 'string') {
        return JSON.parse(item);
      }
      if (typeof item === 'object') return item;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return this.errorTableData;
    }
  }

  /**
   * We need to know which column of the table is the longest so we can fill
   * shorter columns with empty cells
   */
  private calcColumnLength(
    tableHeaders: TableDataType['headers'],
    tableColumns: TableDataType['columns']
  ) {
    return tableColumns === undefined
      ? []
      : tableHeaders.reduce((prevCol, currentCol) => {
          return prevCol < tableColumns[currentCol].length
            ? tableColumns[currentCol].length
            : prevCol;
        }, 0);
  }

  private isRowData(tableData) {
    return !!Array.isArray(tableData.rows);
  }

  render() {
    const isRowData = this.isRowData(this.validTableData);
    const { caption, headers, columns, rows, rowTitles, rowTitle } =
      this.validTableData;
    const maxColumnLength = this.calcColumnLength(headers, columns);
    const columnIter = [...Array(maxColumnLength).keys()];
    const showRowTitles = rowTitles?.length > 0;

    return (
      <div>
        <table
          class="cmp-table"
          data-border={this.border ? this.border : null}
          data-density={this.density ? this.density : null}
          style={{ '--table---fontSize': this.fontsize }}
          data-rows={this.stripes ? this.stripes : null}
          data-sticky={this.sticky ? this.sticky : null}
        >
          <caption>{caption}</caption>
          <thead
            data-align={this.align ? this.align : null}
            data-vertical-align={this.verticalalign ? this.verticalalign : null}
          >
            <tr>
              {rowTitle && <th scope="col">{rowTitle}</th>}
              {headers.map((head, index) => (
                <th key={`table-header-${index}`} scope="col">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody
            data-align={this.bodyalign ? this.bodyalign : null}
            data-vertical-align={
              this.bodyverticalalign ? this.bodyverticalalign : null
            }
          >
            {isRowData &&
              rows.map((obj, idx) => {
                return (
                  <tr key={`row-${idx}`} class={`row-${idx}`}>
                    {showRowTitles && <th scope="row">{rowTitles[idx]}</th>}
                    {headers.map((table, index) => {
                      // If no row is provided, return empty cell [null, null]
                      const [icon, cellText] = obj[table] ?? [null, null];
                      return (
                        <td key={`cell-${idx}-${index}`}>
                          {icon && <db-icon icon={icon} />}
                          {cellText}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            {!isRowData &&
              columnIter.map((num, idx) => (
                <tr key={`row-${idx}`} class={`row-${num}`}>
                  {showRowTitles && <th scope="row">{rowTitles[idx]}</th>}
                  {headers.map((table, index) => {
                    const [icon, cellText] = columns[table][idx] ?? [
                      null,
                      null
                    ];
                    return (
                      <td key={`cell-${idx}-${index}`}>
                        {icon && <db-icon icon={icon} />}
                        {cellText}
                      </td>
                    );
                  })}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}
