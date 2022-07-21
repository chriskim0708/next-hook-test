import type { NextPage } from "next";
import React, { useState, memo, FC, useMemo, useCallback } from "react";

interface BoxProps {
  count?: number;
  obj?: any;
  onClick?: () => void;
}

const RedBox: FC<BoxProps> = memo(({ count }) => {
  return (
    <div
      style={{
        width: 300,
        height: 300,
        backgroundColor: "red",
      }}
    >
      {count}
    </div>
  );
});

RedBox.displayName = "RedBox";

const BlueBox: FC<BoxProps> = memo(({ obj = { x: 0 } }) => {
  return (
    <div
      style={{
        width: 300,
        height: 300,
        backgroundColor: "blue",
        marginTop: 20,
      }}
    >
      {obj.x}
    </div>
  );
});

BlueBox.displayName = "BlueBox";

const GreenBox: FC<BoxProps> = memo(({ obj = { x: 1 } }) => {
  return (
    <div
      style={{
        width: 300,
        height: 300,
        backgroundColor: "green",
        marginTop: 20,
      }}
    >
      {obj.x}
    </div>
  );
});

GreenBox.displayName = "GreenBox";

const Home: NextPage = () => {
  const [count, setCount] = useState<number>(0);
  const obj = useMemo(() => ({ x: 0 }), []);
  const getCount = () => {
    return { x: 1 };
  };
  const memoCount = useMemo(() => getCount(), []);
  const handleClick = useCallback(() => {
    console.log("onclick");
  }, []);

  return (
    <>
      <div style={{ width: 500, backgroundColor: "#000" }}>
        <button onClick={() => setCount((count) => count + 1)}>increase</button>
        <div style={{ padding: 20 }}>
          <RedBox count={count} />
          <BlueBox obj={obj} />
          <GreenBox obj={memoCount} />
        </div>
      </div>
    </>
  );
};

export default Home;
