import { getAllPostIds, getPostData } from "../../utlis/posts";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import Top from "../../components/top";

export default function Post({ postData }) {
  return (
    <>
      <Top title={postData.title} />

      <div className={utilStyles.container}>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}