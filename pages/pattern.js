import Head from "next/head";
import Pattern from "../components/History/index";
import Result from "../components/Result/index";
import { Store, Context } from "../store/store";
import styled from "styled-components";

export default function Home() {
  const store = new Store();

  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 32px;
    gap: 32px;
  `;

  const Wrapper = styled.div`
    width: 250px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    @media (max-width: 600px) {
      width: 100%;
    }
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
            <Wrapper>
              <Pattern />
            </Wrapper>
            <Wrapper>
              <Result />
            </Wrapper>
          </Container>
        </Context.Provider>
      </main>
    </div>
  );
}
