export default {
  title: 'Areas/Page',
  parameters: {
    layout: 'fullscreen',
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true
      }
    }
  }
};

const getHeadlines = () => {
  return Array.from(Array(20).keys())
    .map((key) => `<db-headline>Test ${key}</db-headline>`)
    .toString()
    .replace(/,/g, '');
};

export const MobileScroll = () => {
  return `
      <db-page>
        <db-header slot="header" mobile>
          <db-brand>DB-UI Elements</db-brand>
        </db-header>
        <div>
          ${getHeadlines()}
        </div>
        <db-footer slot="footer" mobile copyright border />
      </db-page>
    `;
};
