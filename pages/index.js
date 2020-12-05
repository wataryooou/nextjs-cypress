import Top from "../components/top";
import utilStyles from "../styles/utils.module.css";

export default function Home({ title }) {
  return (
    <>
      <Top title={title} />

      <div className={utilStyles.container}>
        <p className={utilStyles.center} data-cy="welcome">Welcome to page!</p>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const title = "Home";
  return { props: { title } };
}
