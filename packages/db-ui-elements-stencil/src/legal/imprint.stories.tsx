import '../stories/showcase/showcase.css';

export default {
  title: '20-Legal/Imprint',
  parameters: {
    layout: 'fullscreen'
  }
};

export const imprint = () => {
  return `<a href="https://www.dbsystel.de/dbsystel-en/legal-3715942" target="_blank" rel="noopener noreferrer">Imprint</a><script type="text/javascript">
    top.location.href = 'https://www.dbsystel.de/dbsystel-en/legal-3715942';
</script>`;
};
