import './showcase.css';

export default {
  title: '00-Intro/Showcases',
  parameters: {
    layout: 'fullscreen'
  }
};

export const Vue_Vite_build = () => {
  return `<div class="iframe-container">
      <iframe src="vue-showcase/index.html" height="100%" width="100%" />
    </div>`;
};
