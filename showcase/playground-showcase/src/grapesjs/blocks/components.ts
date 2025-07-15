const category = 'Components';
const media = `<db-icon icon='logo' variant='24-outline'/>`;

export const DB_META_NAVIGATION = {
  key: 'db-metanavigation',
  value: {
    label: 'Metanavigation',
    media,
    category,
    content: {
      type: 'db-metanavigation',
      tagName: 'db-metanavigation',
      content: `<db-link icon="settings" href="#">Einstellungen</db-link>
    <db-link icon="chat" icononly href="#">Nachrichten</db-link>`
    }
  }
};

export const DB_LINK_LIST = {
  key: 'db-linklist',
  value: {
    label: 'Linklist',
    media,
    category,
    content: {
      type: 'db-linklist',
      tagName: 'db-linklist',
      content: ` <li>
    <db-link href="https://www.bahn.de/">www.bahn.de</db-link>
  </li>
  <li>
    <db-link href="https://www.dbsystel.de/">www.dbsystel.de</db-link>
  </li>`
    }
  }
};
