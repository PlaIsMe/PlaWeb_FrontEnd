import React from "react";

function ModPageHeader({ title, value, onChange }) {
  return (
    <header className="hdr">
      <div className="hdr__inner">
        <div className="hdr__title">{title}</div>
        <input
          className="hdr__search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search in category..."
        />
      </div>
    </header>
  );
}

export default ModPageHeader