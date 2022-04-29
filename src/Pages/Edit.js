import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DiaryEditor from "../components/DiaryEditor";
import { DiaryStateContext } from "./../App";

const Edit = () => {
  const [originData, setOriginData] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  const diaryList = useContext(DiaryStateContext);
  console.log(diaryList);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      // console.log(targetDiary);
      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        alert("없는 일기입니다");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
  );
};

export default Edit;
