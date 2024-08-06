const unixToDate = (unix: number) => {
  const date = new Date(unix);

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return day + "/" + (month + 1) + "/" + year;
};

export default unixToDate;
