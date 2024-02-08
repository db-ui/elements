import './showcase.css';

export default {
  title: '00-Intro/Showcases',
  parameters: {
    layout: 'fullscreen'
  }
};

export const React_Vite_build = () => {
  return `<div class="iframe-container">
      <iframe src="react-showcase/index.html" height="100%" width="100%" />
    </div>`;
};
