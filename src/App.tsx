import { useEffect, useRef, useState } from "react";

import { Layout } from "./components";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { Container, Section } from "./styles/Home";

import fakeApi from "./utils/fakeApi.json";

function App() {
  const contentRef = useRef(null);
  const [columnCount, setColumnCount] = useState(7);

  const clamp = (num: number, min: number, max: number) =>
    Math.min(Math.max(num, min), max);

  useEffect(() => {
    const handleResize = () => {
      setColumnCount(
        clamp(Math.ceil(contentRef.current.clientWidth / 250), 2, 7)
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Layout>
      <Container ref={contentRef}>
        {fakeApi.featured.map((section) => {
          return (
            <Section columnCount={columnCount}>
              <div className="headings">
                <h2>
                  <a href="/" className="title">
                    {section.title}
                  </a>
                </h2>
                <a href="/" className="show-all">
                  Show all
                </a>
              </div>
              <div className="cards">
                {section.items.map((items) => {
                  return (
                    <Card
                      title={items.title}
                      description={items.description}
                      img={items.img}
                    />
                  );
                })}
              </div>
            </Section>
          );
        })}
      </Container>
      <Footer />
    </Layout>
  );
}

export default App;
