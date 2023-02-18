import Member from "../Member/Member";
import "./Group.scss";

function Group({ member }) {
  return (
    <div className="group">
      {member.map((group, index) => {
        return (
          <Member
            key={group.id}
            sku={group.sku}
            defaultSku={group.defaultSku}
            status={index === 0 ? group.status : null}
          />
        );
      })}
    </div>
  );
}

export default Group;
