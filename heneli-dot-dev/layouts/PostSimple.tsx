import { useState, ReactNode } from 'react'
import { Comments } from 'pliny/comments'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

interface LayoutProps {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

const editUrl = (path) => `${siteMetadata.siteRepo}/blob/master/heneli-dot-dev/data/${path}`
const twitterUrl = (path) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/${path}`)}`
const issueUrl = `https://github.com/hkailahi/heneli.dev/issues`
const discussUrl = `https://github.com/hkailahi/heneli.dev/discussions`
const trashUrl = `https://news.ycombinator.com/`

export default function PostLayout({ content, next, prev, children }: LayoutProps) {
  const [loadComments, setLoadComments] = useState(false)

  const { filePath, path, slug, date, title, version, readingTime } = content

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/${path}`} {...content} />
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
                <div className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  v{version}
                </div>
                <br />
                <div className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  {readingTime.text} ({readingTime.words} words)
                </div>
              </div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0">
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose prose-lg sm:prose-base max-w-none pb-8 pt-10 dark:prose-dark">{children}</div>
              <div className="pb-6 pt-6 text-sm text-gray-700 dark:text-gray-300">
                <Link href={twitterUrl(path)} rel="nofollow">
                  Discuss on Twitter
                </Link>
                {` • `}
                <Link href={editUrl(filePath)}>View on GitHub</Link>
              </div>
              <div className="pb-6 pt-6 text-xs text-gray-700 dark:text-gray-300">
                <text>
                  Something incorrect? Addition to propose? Please file an{' '}
                  <Link href={issueUrl} className="text-cyan-400 underline" rel="nofollow">
                    issue
                  </Link>
                  . Comment to add? Join the discussion below by authorizing Giscus or commenting
                  directly on the{' '}
                  <Link href={discussUrl} className="text-cyan-400 underline" rel="nofollow">
                    Github Discussion
                  </Link>
                  . Off-topic remarks, unfunny jokes, weirdly overfamiliar internet-speak, and
                  bootlicking will be moved{' '}
                  <Link href={trashUrl} className="text-cyan-400 underline" rel="nofollow">
                    here
                  </Link>
                  .
                </text>
              </div>
            </div>
            {siteMetadata.comments && (
              <div className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300" id="comment">
                {!loadComments && (
                  <button onClick={() => setLoadComments(true)}>Load Comments</button>
                )}
                {loadComments && <Comments commentsConfig={siteMetadata.comments} slug={slug} />}
              </div>
            )}
            <footer>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/${prev.path}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label={`Previous post: ${prev.title}`}
                    >
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                {next && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/${next.path}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label={`Next post: ${next.title}`}
                    >
                      {next.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
