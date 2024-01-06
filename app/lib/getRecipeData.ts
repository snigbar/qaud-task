export default async function getRecipe() {
  const result = await fetch(
    `http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10`
  );
  return await result.json();
}
