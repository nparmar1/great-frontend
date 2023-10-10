import { useState } from "react";

export default function Accordion({ section }) {
  const [openSection, setOpenSection] = useState(new Set());

  return (
    <div className="accordion">
      {section.map(({ value, title, contents }) => {
        const isExpanded = openSection.has(value);

        return (
          <div className="accordion-item" key={value}>
            <button
              className="accordion-item-title"
              type="button"
              onClick={() => {
                const newOpenSection = new Set(openSection);
                const hasNewOpenSection = newOpenSection.has(value);

                hasNewOpenSection
                  ? newOpenSection.delete(value)
                  : newOpenSection.add(value);
                setOpenSection(newOpenSection);
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
            <div className="accordion-contents" hidden={!isExpanded}>
              {contents}
            </div>
          </div>
        );
      })}
    </div>
  );
}
