import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { createComment } from "../../lib/portfolio";
import { CommentCard } from "./CommentCard";

export function CommentSection({ initialComments }) {
  const [comments, setComments] = useState(initialComments);

  const [form, setForm] = useState({
    name: "",
    content: "",
  });

  const [status, setStatus] = useState({
    type: "",
    text: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const pinned = comments.find((comment) => comment.is_pinned);

  const regular = comments.filter((comment) => !comment.is_pinned);

  async function submit(event) {
    event.preventDefault();

    setSubmitting(true);

    setStatus({
      type: "",
      text: "",
    });

    try {
      const newComment = await createComment(form);

      setComments((current) => [newComment, ...current]);

      setForm({
        name: "",
        content: "",
      });

      setStatus({
        type: "success",
        text: "Komentar berhasil dikirim.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        text:
          error instanceof Error ? error.message : "Komentar gagal dikirim.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="comments-panel glass-card">
      <div className="comments-header">
        <div>
          <span className="section-kicker">Komentar ({comments.length})</span>

          <h3>Tinggalkan tanggapan</h3>
        </div>

        <MessageCircle size={24} />
      </div>

      <form className="comment-form" onSubmit={submit}>
        <input
          value={form.name}
          onChange={(event) =>
            setForm((current) => ({
              ...current,
              name: event.target.value,
            }))
          }
          placeholder="Masukkan nama Anda"
          maxLength={50}
        />

        <textarea
          value={form.content}
          onChange={(event) =>
            setForm((current) => ({
              ...current,
              content: event.target.value,
            }))
          }
          placeholder="Tulis komentar"
          rows={4}
          maxLength={500}
        />

        {status.text && (
          <p className={`form-status ${status.type}`}>{status.text}</p>
        )}

        <button className="primary-button" type="submit" disabled={submitting}>
          {submitting ? "Mengirim..." : "Kirim Komentar"}
        </button>
      </form>

      <div className="comment-list">
        {pinned && (
          <div className="pinned-wrap">
            <span className="pinned-label">Pinned Comment</span>

            <CommentCard comment={pinned} isPinned />
          </div>
        )}

        {regular.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}
