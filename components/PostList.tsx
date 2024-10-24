import { parseDateString } from '@/libs/date';
import { ReducedPost } from '@/libs/types';

export default function PostList({ posts }: { posts: ReducedPost[] }) {
  const postsByYear = posts.reduce(
    (acc, post) => {
      const { year, formattedDate } = parseDateString(post.date);
      return {
        ...acc,
        [year]: [...(acc[year] ?? []), { ...post, date: formattedDate }],
      };
    },
    {} as Record<string, ReducedPost[]>,
  );

  return (
    <div data-animate>
      <div className="pb-3 text-lg font-extrabold">Posts ({posts.length})</div>
      <div className="group">
        {Object.keys(postsByYear)
          .sort((a, b) => +b - +a)
          .map((year) => (
            <div className="group/list" key={year}>
              <div className="border-b-[1px] border-solid border-gray-200 pb-1 text-sm">
                <div className="group-hover/list:selection w-fit p-0.5 transition-all group-hover/list:!opacity-100 group-hover:opacity-40">
                  {year}
                </div>
              </div>
              <ul className="flex flex-col py-4">
                {postsByYear[year].map((post) => (
                  <li key={post.slug} className="group/item text-gray-800">
                    <a
                      className="flex w-full items-center justify-between transition-opacity hover:!opacity-100 group-hover:opacity-40"
                      href={post.slug}
                    >
                      <div className="group-hover/item:selection p-0.5">{post.title}</div>
                      <div className="group-hover/item:selection p-0.5 text-sm">{post.date}</div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}
