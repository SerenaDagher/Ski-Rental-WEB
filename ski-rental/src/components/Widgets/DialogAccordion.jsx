import React from 'react';

const Accordion = ({ items }) => {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#flush-collapse${index}`}
              aria-expanded="false"
              aria-controls={`flush-collapse${index}`}
            >
              {item.title}
            </button>
          </h2>
          <div
            id={`flush-collapse${index}`}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
