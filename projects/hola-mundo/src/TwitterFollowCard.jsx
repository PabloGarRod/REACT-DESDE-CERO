import { useState } from "react";

export function TwitterFollowCard({ children, initialIsFollowing, username }) {
  const [isFollowing, setIsfollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsfollowing(!isFollowing);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${username}`}
          alt="Avatar de Midudev"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{username}</span>
        </div>
      </header>
      <aside>
        <button onClick={handleClick} className={buttonClassName}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-unfollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
