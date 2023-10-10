import { useState } from "react";

export default function Tabs({ items }) {
  const [itemValue, setItemValue] = useState(items[0].value);

  return (
    <div className="tabs">
      <div className="tabs-list">
        {items.map(({ value, label }) => {
          const isActiveValue = itemValue === value;

          return (
            <button
              className={["tabs-list-item", isActiveValue && "tabs-list-item--active"]
                .filter(Boolean)
                .join(" ")}
              key={value}
              type="button"
              onClick={() => setItemValue(value)}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div>
        {items.map(({ value, panel }) => (
          <div key={value} hidden={itemValue !== value}>
            {panel}
          </div>
        ))}
      </div>
    </div>
  );
}
