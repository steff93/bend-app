import React from "react";
import "./Member.scss";

function Member({ sku, defaultSku, status }) {
  return (
    <div className="member">
      {status && <div className={`member__status member__status--${status}`}></div>}
      <h3 className="member__sku">{sku}</h3>
      <h5 className="member__default-sku">{defaultSku}</h5>
    </div>
  );
}

export default Member;
