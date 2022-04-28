import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const id = searchParams.get("id");
  // console.log("id:", id);
  const mode = searchParams.get("mode");
  // console.log("mode : ", mode);
  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기수정페이지 입니다</p>
      <button
        onClick={() =>
          setSearchParams({
            who: "강대국",
          })
        }
      >
        QS 바꾸기
      </button>

      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        홈으로가기
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;
