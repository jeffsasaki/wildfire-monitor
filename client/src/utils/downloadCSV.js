export const convertToCSV = wildfireData => {
  if (wildfireData.length === 0) {
    return '';
  }

  const headers = Object.keys(wildfireData[0]).join(',');
  const data = wildfireData.map(obj => Object.values(obj).join(',')).join('\n');

  return `${headers}\n${data}`;
};

export const downloadCSV = (csvContent, fileName) => {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', fileName);
  document.body.appendChild(link); // Required for Firefox
  link.click();
  document.body.removeChild(link); // Clean up
};