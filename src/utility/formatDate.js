const formatDate = () => {
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "Asia/Kolkata",
  };

  const date = new Date();
  const formattedDate = date.toLocaleString("en-US", options);

  return formattedDate.replace(",", "");
};

export default formatDate;
