import React from "react";

export default function Sidebar({ categories, activeId, onPick }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__sectionTitle">Categories</div>
      <div className="sidebar__list">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => onPick(c.id)}
            className={"sidebar__btn" + (c.id === activeId ? " is-active" : "")}
          >
            <div className="sidebar__btnTitle">{c.name}</div>
            {/* <div className="sidebar__btnMeta">{c.items.size} entries</div> */}
          </button>
        ))}
      </div>
    </aside>
  );
}
