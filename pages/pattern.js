import Head from "next/head";
import Pattern from "../components/History/index";
import Result from "../components/Result/index";
import { Store, Context } from "../pages/store/store";
import styled from "styled-components";

export default function Home() {
  const store = new Store();

  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 32px;
    gap: 32px;
  `;

  return (
    <div>
      <Head>
        <title>MVVM w/ MobX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Context.Provider value={store}>
          <Container>
            <Pattern />
            <Result />
          </Container>
        </Context.Provider>
      </main>
    </div>
  );
}
