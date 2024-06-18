import "./Banner.css";

export default function Banner(prop) {
  return (
    <>
      <div className="container">
        <div className="scroll">
          <div className="RightToLeft">
            {Array.apply(0, Array(20)).map(function (x, i) {
              return <p key={i}>{prop.text}</p>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
