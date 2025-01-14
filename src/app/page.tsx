import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://ewpy7eni1f.ufs.sh/f/2Xwpxzi4mQ5K0KYKN1PJcG4DU86pS9xQEbzjeBoL3ryXA1t2",
  "https://ewpy7eni1f.ufs.sh/f/2Xwpxzi4mQ5KDvPZZXEO4n7FURTqJQ9rCWjdEODlyZ0SohHs",
  "https://ewpy7eni1f.ufs.sh/f/2Xwpxzi4mQ5KJP2ywMppd5vo3q0RzmaFEKuwCO6sblNPgVf9",
  "https://ewpy7eni1f.ufs.sh/f/2Xwpxzi4mQ5KqDUfLnHmVpJFwUSrf3Om4YabICTW6coixQPN"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>
            {post.name}
          </div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      <h1>Hello (T3 Gallery in progress)</h1>
    </main>
  );
}
