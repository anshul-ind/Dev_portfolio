export async function GET() {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${process.env.GITHUB_USERNAME}`,
    { next: { revalidate: 86400 } } // cache 1 day
  );

  const data = await res.json();

  return Response.json(data);
}
