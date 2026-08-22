import { ImageWithFallback } from "../common/ImageWithFallback";

const DATE_FORMATTER = new Intl.DateTimeFormat("id-ID", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

export function CommentCard({ comment, isPinned = false }) {
  const dateValue = new Date(comment.created_at);

  const date = Number.isNaN(dateValue.getTime())
    ? ""
    : DATE_FORMATTER.format(dateValue);

  const initials = String(comment.user_name || "?").slice(0, 2);

  return (
    <article className={`comment-card ${isPinned ? "pinned" : ""}`}>
      <ImageWithFallback
        src={comment.profile_image}
        alt={comment.user_name}
        className="comment-avatar"
        initials={initials}
      />

      <div>
        <div className="comment-meta">
          <strong>{comment.user_name}</strong>

          {isPinned && <span>Admin</span>}

          {date && <time>{date}</time>}
        </div>

        <p>{comment.content}</p>
      </div>
    </article>
  );
}
