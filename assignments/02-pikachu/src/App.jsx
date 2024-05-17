import { useEffect, useRef, useState } from "react";

const Character = ({ pos: { dir, key, posX, posY } }) => {
  console.log(key, posX, posY);
  return (
    <>
      <img
        style={{
          transition: "all 0.2s ease-in-out",
          width: "50px",
          height: "50px",
          position: "absolute",
          transform: `rotateY(${dir === "right" ? 0 : 180}deg)`,
          top: `${posY}px`,
          left: `${posX}px`,
        }}
        src="/pikachu.png"
        alt=""
      />
    </>
  );
};

const Tile = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/grass.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "50px",
        height: "50px",
      }}
    ></div>
  );
};

const Ground = () => {
  console.log("render!");
  const render = () => {
    const tiles = [];
    for (let i = 0; i < 100; i++) {
      tiles.push(<Tile key={i} />);
    }
    return tiles;
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {render()}
    </div>
  );
};

function App() {
  const [pos, setPos] = useState({ dir: "right", key: null, posX: 0, posY: 0 });
  const ref = useRef(null);
  const checkCrossLine = (prev, next) => {
    if (next.posX < 0 || next.posX > 450 || next.posY < 0 || next.posY > 450) {
      return prev;
    }
    return next;
  };

  const keyDown = (event) => {
    const pressedKey = event.key;
    console.log(pressedKey);
    switch (pressedKey) {
      case "ArrowUp":
        setPos((prev) => {
          const next = { ...prev };
          next.key = "ArrowUp";
          next.posY = next.posY - 50;
          return checkCrossLine(prev, next);
        });
        break;
      case "ArrowDown":
        setPos((prev) => {
          const next = { ...prev };
          next.key = "ArrowDown";
          next.posY = next.posY + 50;
          return checkCrossLine(prev, next);
        });
        break;
      case "ArrowLeft":
        setPos((prev) => {
          const next = { ...prev };
          next.key = "ArrowLeft";
          next.posX = next.posX - 50;
          next.dir = "left";
          return checkCrossLine(prev, next);
        });
        break;
      case "ArrowRight":
        setPos((prev) => {
          const next = { ...prev };
          next.key = "ArrowRight";
          next.posX = next.posX + 50;
          next.dir = "right";
          return checkCrossLine(prev, next);
        });
        break;
      case " ":
        setPos((prev) => {
          const next = { ...prev };
          next.key = " ";
          next.posY -= 30;
          return next;
        });
        setTimeout(() => {
          setPos((prev) => {
            const next = { ...prev };
            next.posY += 30;
            return next;
          });
        }, 200);
        break;
    }
  };

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div
      ref={ref}
      tabIndex={0}
      onKeyDown={keyDown}
      style={{
        position: "relative",
        width: "500px",
        height: "500px",
      }}
    >
      <Character pos={pos} />
      <Ground />
    </div>
  );
}

export default App;
