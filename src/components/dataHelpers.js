export async function getAreas() {
  const response = await fetch("/assets/areas.json");
  const result = await response.json();

  return result;
}
