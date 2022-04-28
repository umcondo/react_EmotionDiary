import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";

const getStringDate = (date) => {
  return date.toISOSting().slice(0, 10);
};

const New = () => {
  console.log(getStringDate(new Date()));

  const [date, setDate] = useState();

  const navigate = useNavigate();

  return (
    <div>
      <MyHeader
        headText={"새 일기쓰기"}
        leftChild={
          <MyButton
            onClick={() => {
              navigate(-1);
            }}
            text={"< 뒤로가기"}
          />
        }
      />
      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className="input-box">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default New;
