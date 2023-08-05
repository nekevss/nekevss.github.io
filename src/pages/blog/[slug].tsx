import { getBlogEntryBySlug, getAllBlogs, getAllBlogIds } from '@/lib/files';
import MarkdownDiplay from '@/components/MarkdownDisplay';
import MetaHeader from '@/components/MetaHeader';
import { Metadata } from '@/lib/utils';

type BlogEntry = {
  meta: Metadata,
  content: string,
}

export default function BlogEntry({ meta, content }: BlogEntry) {
  return (
    <div className='flex min-h-screen flex-col items-center'>
      <MetaHeader meta={meta} />
      <MarkdownDiplay content={content} />
    </div>
  );
}

export async function getStaticProps({params}: any) {
  console.log(params.slug)
  const { meta, content } = await getBlogEntryBySlug(params.slug)

  return {
    props: {
      meta,
      content,
    },
  };
}

export const getStaticPaths = async() => {
  const blogs = getAllBlogIds();

  return {
    paths: blogs.map((blog) => {
      return {
        params: {
          slug: blog,
        },
      };
    }),
    fallback: false,
  };
}
