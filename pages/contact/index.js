import Top from "../../components/top";
import utilStyles from "../../styles/utils.module.css";

export default function Contact({ title }) {
  return (
    <>
      <Top title={title} />

      <div className={utilStyles.container}>
        <div className={utilStyles.center}>
          <p>
            <a href="https://twitter.com/wataryooou">Twitter</a>
          </p>
          <p>
            <a href="https://github.com/wataryooou">Github</a>
          </p>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const title = "Contact";
  return { props: { title } };
}
