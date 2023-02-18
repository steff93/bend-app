export async function getJsonObject(file) {
  const response = await fetch(file);
  const result = await response.json();

  return result;
}

export async function prepareGroups() {
  const groups = await getJsonObject("/assets/things.json");
  const areaIds = await getAreasIds();

  const sortedGroups = [];
  areaIds.forEach((id) => sortedGroups.push({ areaId: id, members: [] }));

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

  return sortedGroups;
}

async function getAreasIds() {
  const ids = [];
  const areas = await getJsonObject("/assets/areas.json");
  areas.forEach((area) => ids.push(area.areaId));

  return ids;
}
