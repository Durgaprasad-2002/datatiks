import React, { useState, useEffect } from "react";

function HeaderSectionBackground({ title1, title2, desc, name, textLeft }) {
  //hooks
  const [posY, setposY] = useState(0);

  // handle the background-img scroll animation
  useEffect(() => {
    function Handle() {
      setposY(() => window.pageYOffset * 0.5);
    }
    window.addEventListener("scroll", Handle);

    return () => {
      window.removeEventListener("scroll", Handle);
    };
  }, []);

  return (
    <section
      className={`${name}-header`}
      style={{
        backgroundPositionY: `${posY}px`,
      }}
    >
      <div className="faculty-header-inner">
        <h1 style={{ textAlign: textLeft ? "left" : "center" }}>
          {title1} <span className="col-red">{title2}</span>{" "}
        </h1>
        <p style={{ textAlign: textLeft ? "left" : "center" }}>{desc}</p>
      </div>
    </section>
  );
}

export default HeaderSectionBackground;
