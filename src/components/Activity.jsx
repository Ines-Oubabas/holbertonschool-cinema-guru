import "./components.css";

function Activity({ activity }) {
  const formattedText = activity?.title
    ? `${activity.username || "Someone"} added ${activity.title} ${
        activity.type ? `to ${activity.type}` : ""
      }`
    : "Recent activity";

  return (
    <li className="activity-item">
      <p>{formattedText}</p>
    </li>
  );
}

export default Activity;