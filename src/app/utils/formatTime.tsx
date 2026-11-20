function formatTime(dateString) {
  const date = new Date(dateString);

  return date.toLocaleTimeString("en-US", {
    timeZone: "Europe/Copenhagen",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export default formatTime;
