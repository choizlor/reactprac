import "./App.css";

function AppJSX() {
  const name = "엘리";
  const list = ["우유", "딸기", "바나나", "요거트"];
  return (
    <div>
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        style={{ width: "200px", height: "200px" }}
        src="https://product.cdn.cevaws.com/var/storage/images/_aliases/reference/media/feliway-2017/images/kor-kr/1_gnetb-7sfmbx49emluey4a/6341829-1-kor-KR/1_gNETb-7SfMBX49EMLUeY4A.jpg"
        alt="nature"
      ></img>
    </div>
  );
}

export default AppJSX;
