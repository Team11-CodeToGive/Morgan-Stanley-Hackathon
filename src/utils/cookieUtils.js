
export const get = ({ request, redirect }) => {
  const headers = new Headers();

  // Set the cookie
  headers.append('Set-Cookie', `username=JohnDoe; Path=/; HttpOnly; Max-Age=${60 * 60 * 24 * 7};`);

  // Return a response, you can redirect or respond with JSON
  return new Response(null, {
    headers,
    status: 302, // Redirect status code
  });
};