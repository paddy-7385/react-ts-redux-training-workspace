import React from "react";

export default function FilterButton(props) {
  return (
    <button
      type="button"
      className={
        props.filter === props.name
          ? "btn btn-primary btn-space"
          : "btn btn-secondary btn-space"
      }
      onClick={() => props.onClick(props.name)}
      style={{ margin: 10 }}
    >
      {props.value}
    </button>
  );
}
