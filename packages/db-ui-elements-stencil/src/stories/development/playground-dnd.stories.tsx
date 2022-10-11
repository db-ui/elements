import '../showcase/showcase.css';

export default {
  title: '99-Development/Playground',
  parameters: {
    layout: 'fullscreen',
    options: {
      showToolbar: false
    }
  }
};

export const Builder = () => {
  const previewBody = document.getElementById('preview-body');
  previewBody.style.display = 'none';
  return `
    <div class="iframe-container">
      <iframe src="playground-showcase/index.html#/dnd" height="100%" width="100%" />
    </div>`;
};
