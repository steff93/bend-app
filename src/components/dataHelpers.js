export async function prepareGroups() {
  const groups = await getJsonObject("/assets/things.json");
  const areas = await getAreas();

  const sortedGroups = [];

  areas.forEach((area) =>
    sortedGroups.push({ areaId: area.areaId, name: area.name, members: [] })
  );

  //create an array with groups made of joined members
  const groupsArray = [];

  groups.forEach((group) => {
    const { id, joinedWith } = group;

    if (!joinedWith) {
      const joinedGroup = [group];

      groups.forEach((group) => {
        if (group.joinedWith === id) {
          joinedGroup.push(group);
        }
      });

      groupsArray.push(joinedGroup);
    }
  });

  sortedGroups.forEach((sortedGroup, index) => {
    const { areaId } = sortedGroup;

    groupsArray.forEach((group) => {
      if (group[0].areaId === areaId) {
        sortedGroups[index].members.push(group);
      }
    });
  });

  //sort single-item groups to be at the end
  sortedGroups.forEach((group) => {
    const sortedMembers = group.members.map((member) => {
      return member;
    });

    const singleItems = sortedMembers.filter((member) => member.length === 1);
    const multipleItems = sortedMembers.filter((member) => member.length > 1);

    group.members = [...multipleItems, ...singleItems];
  });

  return sortedGroups;
}

async function getJsonObject(file) {
  const response = await fetch(file);
  const result = await response.json();

  return result;
}

async function getAreas() {
  const areas = await getJsonObject("/assets/areas.json");

  return areas;
}

export function checkIfGroupHasActiveMember(group) {
  return group.some((member) => member.countActive);
}
