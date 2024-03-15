const ShamsiDate = (data) => {
  let options = { year: "numeric", month: "long", day: "numeric" };
  let today = new Date(data).toLocaleDateString("fa-IR", options);
  return today;
};

export default ShamsiDate;
