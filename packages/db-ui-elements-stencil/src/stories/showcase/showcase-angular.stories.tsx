import './showcase.css';

export default {
  title: '00-Intro/Showcases',
  parameters: {
    layout: 'fullscreen'
  }
};

export const Angular_NG_build = () => {
  return `<div class="iframe-container">
      <iframe src="angular-lts-showcase/index.html" height="100vh" width="100%" />
    </div>`;
};
