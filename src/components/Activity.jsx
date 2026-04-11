import "./components.css";

function Activity({ activity }) {
  const username = activity?.user?.username || "Someone";
  const movieTitle = activity?.title?.title || "a movie";
  const activityType = activity?.activityType || "";

  let formattedText = `${username} added ${movieTitle}`;

  if (activityType === "favorite") {
    formattedText += " to favorites";
  } else if (
    activityType === "watchlater" ||
    activityType === "watchLater"
  ) {
    formattedText += " to watch later";
  }

  return (
    <li className="activity-item">
      <p>{formattedText}</p>
    </li>
  );
}

export default Activity;