import '../stories/showcase/showcase.css';

export default {
  title: '20-Legal/Datenschutzerklaerung',
  parameters: {
    layout: 'fullscreen'
  }
};

export const datenschutzerklaerung = () => {
  return `<div class="iframe-container">
      <iframe src="https://db-ui.github.io/datenschutzerklaerung.html" height="100%" width="100%" />
    </div>`;
};
