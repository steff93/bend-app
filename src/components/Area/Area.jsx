import "./Area.scss";

function Area({ name }) {
  return (
    <div className="area">
      <h4 className="area__name">{name}</h4>

      <div className="area__groups"></div>
    </div>
  );
}

export default Area;
