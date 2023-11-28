const getDate = style => {
  const date = new Date();
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: `${style}`,
    timeStyle: `${style}`,
  }).format(date);
};

module.exports = getDate;
