import Group from "../Group/Group";
import "./Area.scss";

function Area({ name, members }) {
  return (
    <div className="area">
      <h4 className="area__name">{name}</h4>

      <div className="area__groups">
        {members.map((member, index) => {
          return <Group member={member} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Area;
