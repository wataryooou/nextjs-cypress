import Top from "../../components/top";
import utilStyles from "../../styles/utils.module.css";

export default function About({ title }) {
  return (
    <>
      <Top title={title} />

      <div className={utilStyles.container}>
        <div className={utilStyles.center}>
          <p>
            <strong>わたりょー</strong>です。
          </p>
          <p>ここはNext.jsとCypressを使ったサンプルサイトです。</p>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const title = "About";
  return { props: { title } };
}
