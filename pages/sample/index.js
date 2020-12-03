import { useState } from "react";
import Top from "../../components/top";
import utilStyles from "../../styles/utils.module.css";

export default function About({ title }) {
  const [typeText, setTypeText] = useState("");

  const onChange = (e) => {
    setTypeText(e.target.value);
  };

  return (
    <>
      <Top title={title} />

      <div className={utilStyles.container}>
        <div className={utilStyles.center}>
          <div>ここでは、typeしたものがそのまま表示されることを確認する。</div>
          <input onChange={onChange} data-cy="input"></input>
          <div>
            output: <span data-cy="output">{typeText}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const title = "About";
  return { props: { title } };
}
