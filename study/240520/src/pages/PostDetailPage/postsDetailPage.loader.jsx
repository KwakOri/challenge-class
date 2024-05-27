export default async function postsDetailPageLoader({ params }) {
  const { postId } = params;
  console.log(postId);
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
  return json;
}
