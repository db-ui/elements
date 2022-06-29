import '../showcase/showcase.css';

export default {
  title: 'Development/Playground',
  parameters: {
    layout: 'fullscreen'
  }
};

export const Editor = () => {
  return `
    <div class="iframe-container">
      <iframe src="playground-showcase/index.html#/playground-showcase/editor" height="100%" width="100%" />
    </div>`;
};
