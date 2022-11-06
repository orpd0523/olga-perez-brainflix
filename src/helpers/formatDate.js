function formatDate(date) {
  const d = new Date(date);
  const day = twoDigit(d.getUTCDate());
  const month = twoDigit(d.getUTCMonth() + 1);
  const year = d.getUTCFullYear();
  return `${month}/${day}/${year}`;
}

function twoDigit(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}

export default formatDate;