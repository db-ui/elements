export default {
  title: 'Areas/Footer',
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
  const htmlTags = Array.from(document.getElementsByTagName('html'));
  htmlTags.forEach((tag) => {
    tag.style.overflow = 'inherit';
  });
  return `<div>
      ${getHeadlines()}
      <db-footer mobile copyright border />
    </div>`;
};
