// src/pages/api/set-cookie.ts (Astro API)
export const get = ({ request }) => {
    const headers = new Headers();

    // Set the cookie
    headers.append('Set-Cookie', `username=JohnDoe; Path=/; HttpOnly; Max-Age=${60 * 60 * 24 * 7};`);

    return new Response(null, {
      headers,
      status: 302, // You can redirect after setting the cookie if you want
    });
  };