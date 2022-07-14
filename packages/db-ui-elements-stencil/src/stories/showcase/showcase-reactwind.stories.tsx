import './showcase.css';

export default {
  title: 'Intro/Showcases',
  parameters: {
    layout: 'fullscreen'
  }
};

export const React_and_Tailwind = () => {
  return `
    <div class="iframe-container">
      <iframe src="reactwind-showcase/index.html" height="100%" width="100%" />
    </div>`;
};
