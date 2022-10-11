import '../showcase/showcase.css';

export default {
  title: '99-Development/Playground',
  parameters: {
    layout: 'fullscreen'
  }
};

export const Editor = () => {
  const previewBody = document.getElementById('preview-body');
  previewBody.style.display = 'none';
  return `
    <div class="iframe-container">
      <iframe src="playground-showcase/index.html#/editor" height="100%" width="100%" />
    </div>`;
};
