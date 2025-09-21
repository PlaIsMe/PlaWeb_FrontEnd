import React from "react";

export default function RightContents({ items, onJump }) {
  return (
    <aside className="toc">
      <div className="toc__title">Contents</div>
      <nav className="toc__list">
        {items.map((it) => (
          <button key={it.id} onClick={() => onJump(it.id)} className="toc__link">
            {it.name}
          </button>
        ))}
      </nav>
    </aside>
  );
}
