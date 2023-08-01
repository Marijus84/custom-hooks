import { useEffect, useState } from "react";
import Content from "./Content";
import Header from "./Header";

function App() {
  const [isOnLine, setIsOnLine] = useState(navigator.onLine);

  useEffect(() => {
    function handleOnLine() {
      setIsOnLine(true);
    }
    function handleOffLine() {
      setIsOnLine(false);
    }

    window.addEventListener("online", handleOnLine);
    window.addEventListener("offline", handleOffLine);
    return () => {
      window.removeEventListener("online", handleOnLine);
      window.removeEventListener("offline", handleOffLine);
    };
  }, []);

  return (
    <>
      <Header online={isOnLine} />
      <Content online={isOnLine} />
    </>
  );
}

export default App;
