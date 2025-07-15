const snippet1 = `
<db-button>
  Test-Button
</db-button>
`;

const snippet2 = `
<db-select label="Pick a option">
  <option>SUPER</option>
  <option selected>AWESOME</option>
  <option>SELECTION</option>
  <option>OPTIONS</option>
</db-select>
`;

const snippet3 = `
<db-pagination currentpage="8" pages="9" count="3"></db-pagination>
`;

const snippet4 = `
<db-mainnavigation>
  <db-link href="#" rel="index" aria-current="page">Startseite</db-link>
  <db-link href="#" rel="offers">Aufträge</db-link>
</db-mainnavigation>

<db-headline variant="1">Headline 1</db-headline>

<db-expander summary="I'm the summary">
  <p>I'm the content</p>
</db-expander>
<db-pagination currentpage="8" pages="9" count="3"></db-pagination>
`;

const Snippets = {
  'Simple button': snippet1,
  'Simple select': snippet2,
  'Simple pagination': snippet3,
  'Advanced page': snippet4
};

export default Snippets;
