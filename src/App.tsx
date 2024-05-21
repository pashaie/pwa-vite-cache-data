import { useState } from "react";
import "./App.css";
import { SvgSpinnersPulse3 } from "./SvgSpinnersPulse3";

function App() {
  const [loading, setLoading] = useState(false);
  const [cnt, setCnt] = useState(0);
  const loadData = async (uri: string) => {
    setLoading(true);
    const resp = await fetch("https://jsonplaceholder.typicode.com/" + uri);
    const data = await resp.json();
    setCnt(data.length || 1);
    setLoading(false);
  };

  return (
    <>
      <div className="card">
        <div>
          <div>
            <button onClick={() => loadData("posts")}>posts</button>&nbsp;
            {new Array(20).fill(0).map((_, i) => (
              <>
                <button key={i} onClick={() => loadData(`posts/${i + 1}`)}>
                  posts {i + 1}
                </button>
                &nbsp;
              </>
            ))}
          </div>
          <br />
          <div>
            <button onClick={() => loadData("users")}>users</button>&nbsp;
            {new Array(10).fill(0).map((_, i) => (
              <>
                <button key={i} onClick={() => loadData(`users/${i + 1}`)}>
                  users {i + 1}
                </button>
                &nbsp;
              </>
            ))}
          </div>
          <br />
          <div>
            <button onClick={() => loadData("comments")}>comments</button>&nbsp;
            <button onClick={() => loadData("comments/1")}>comment 1</button>
            &nbsp;
            <button onClick={() => loadData("comments/2")}>comment 2</button>
            &nbsp;
          </div>
          <br />
          <div>
            <button onClick={() => loadData("photos")}>photos</button>&nbsp;
            <button onClick={() => loadData("photos/1")}>photos 1</button>&nbsp;
            <button onClick={() => loadData("photos/2")}>photos 2</button>&nbsp;
            <button onClick={() => loadData("photos/3")}>photos 3</button>&nbsp;
            <button onClick={() => loadData("photos/4")}>photos 4</button>&nbsp;
            <button onClick={() => loadData("photos/5")}>photos 5</button>&nbsp;
          </div>
          <h2>
            {loading && <SvgSpinnersPulse3></SvgSpinnersPulse3>}
            {cnt}
          </h2>
        </div>
      </div>
    </>
  );
}

export default App;
