import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import SkeltonElement from "./components/SkeltonElement";
import Shimmer from "./components/Shimmer";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setTimeout(async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const { data } = res;
      console.log(data);
      setArticles(data);
    }, 1000);
  }, []);

  return (
    <>
      <header className="header">
        <h3 className="header__primary">React Skelton</h3>
      </header>

      <main className="container">
        <div className="content">
          <div className="main">
            <h3 className="main__title">Welcome to React Skelton</h3>
            <p className="main__description">
              We will be fetching data from the API and displaying it here.
            </p>

            <div className="main__list">
              {/* <SkeltonElement /> */}
              {/* <SkeltonElement /> */}
              {!(articles.length > 0) && (
                <div className="">
                  {Array(10)
                    .fill()
                    .map((_, index) => (
                      <Shimmer key={index} />
                    ))}
                </div>
              )}
              {articles.map((articles) => (
                <div className="main__item" key={articles.id}>
                  <h4 className="main__item-title">{articles.title}</h4>
                  <p className="main__item-description">{articles.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="aside">
            <h3 className="content__title">User Profiles</h3>
            <p className="content__description">
              Here we will show different user profiles.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
