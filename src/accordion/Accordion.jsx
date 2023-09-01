import { useState } from "react";

export default function Accordion({ section }) {
  const [openSections, setOpenSections] = useState(new Set());

  return (
    <div className="accordion">
      {section.map(({ value, title, contents }) => {
        const isExpanded = openSections.has(value);

        return (
          <div className="accordion-item" key={value}>
            <button
              className="accordion-item"
              type="type"
              onClick={() => {
                const newOpenSections = new Set(openSections);
                const hasNewOpenSections = newOpenSections.has(value);

                hasNewOpenSections
                  ? newOpenSections.delete(value)
                  : newOpenSections.add(value);

                setOpenSections(newOpenSections);
              }}
            >
              {title}
              <span
                aria-hidden={true}
                className={[
                  "accordion-icon",
                  isExpanded && "accordion-icon--rotated",
                ]
                  .filter(Boolean)
                  .join(" ")}
              />
            </button>
            <div className="accordion-item-contents" hidden={!isExpanded}>
              {contents}
            </div>
          </div>
        );
      })}
    </div>
  );
}
