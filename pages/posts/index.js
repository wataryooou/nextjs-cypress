import Top from "../../components/top";
import utilStyles from "../../styles/utils.module.css";
import { getSortedPostsData } from "../../utlis/posts";
import Link from "next/link";
import Date from "../../components/date";

export default function Posts({ title, allPostsData }) {
  return (
    <>
      <Top title={title} />

      <div className={utilStyles.container}>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a data-cy="blog">{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const title = "Posts";
  const allPostsData = getSortedPostsData();
  return {
    props: {
      title,
      allPostsData,
    },
  };
}
