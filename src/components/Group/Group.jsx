import Member from "../Member/Member";
import { checkIfGroupHasActiveMember } from "../dataHelpers";
import "./Group.scss";

function Group({ member }) {
  const hasActiveMember = checkIfGroupHasActiveMember(member);

  return (
    <div className="group">
      {member.map((group, index) => {
        const status = hasActiveMember ? "active" : group.status;

        return (
          <Member
            key={group.id}
            sku={group.sku}
            defaultSku={group.defaultSku}
            status={index === 0 ? status : null}
          />
        );
      })}
    </div>
  );
}

export default Group;
