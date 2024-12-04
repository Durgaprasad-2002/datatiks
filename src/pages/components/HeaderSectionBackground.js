import React, { useState, useEffect } from "react";

function HeaderSectionBackground({ title1, title2, desc, name }) {
  //hooks
  const [posY, setposY] = useState(0);

  // handle the background-img scroll animation
  useEffect(() => {
    function Handle() {
      setposY(() => document.documentElement.scrollTop / 3);
    }
    window.addEventListener("scroll", Handle);

    return () => {
      window.removeEventListener("scroll", Handle);
    };
  }, []);

  return (
    <section
      className={`${name}-header`}
      style={{ backgroundPositionY: `${-posY}px` }}
    >
      <div className="faculty-header-inner">
        <h1>
          {title1} <span className="col-red">{title2}</span>{" "}
        </h1>
        <p>{desc}</p>
      </div>
    </section>
  );
}

export default HeaderSectionBackground;
