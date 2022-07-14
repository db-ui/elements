import '../showcase/showcase.css';

export default {
  title: 'Development/Playground',
  parameters: {
    layout: 'fullscreen'
  }
};

export const Builder = () => {
  return `
    <div class="iframe-container">
      <iframe src="playground-showcase/index.html#/playground-showcase/dnd" height="100%" width="100%" />
    </div>`;
};
