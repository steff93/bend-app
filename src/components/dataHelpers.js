export async function getJsonObject(file) {
  const response = await fetch(file);
  const result = await response.json();

  return result;
}
