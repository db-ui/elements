import './showcase.css';

export default {
  title: '00-Intro/Showcases',
  parameters: {
    layout: 'fullscreen'
  }
};

export const Angular_NG_lts_minus_1_build = () => {
  return `<div class="iframe-container">
      <iframe src="angular-lts-minus-1-showcase/index.html" height="100vh" width="100%" />
    </div>`;
};
