function formatDate(dateString) {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "Europe/Copenhagen",
  });
}

export default formatDate;
