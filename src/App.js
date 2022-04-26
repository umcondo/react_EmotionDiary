import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Diary from "./Pages/Diary";
import Edit from "./Pages/Edit";
import New from "./Pages/New";

// components
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";

function App() {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          leftChild={
            <MyButton
              text={"왼쪽버튼"}
              onClick={() => {
                alert("왼쪽클릭");
              }}
            />
          }
          rightChild={
            <MyButton
              text={"오른쪽버튼"}
              onClick={() => {
                alert("오른쪽클릭");
              }}
            />
          }
          headText={"App"}
        />

        <h2>감정일기</h2>

        <MyButton
          text={"버튼"}
          onClick={() => {
            alert("클릭");
          }}
          type={"positive"}
        />

        <MyButton
          text={"버튼"}
          onClick={() => {
            alert("클릭");
          }}
          type={"negative"}
        />

        <MyButton
          text={"버튼"}
          onClick={() => {
            alert("클릭");
          }}
          type={"default"}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
