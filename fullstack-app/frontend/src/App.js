import { useEffect } from "react";
import { useState } from "react";
function App() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/main")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          <p>{userData.firstData}</p>
          <p>{userData.secondData}</p>
        </div>
      ) : null}
    </div>
  );
}

export default App;
