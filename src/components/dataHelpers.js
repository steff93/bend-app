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
