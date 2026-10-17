import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Call root API
    fetch("http://127.0.0.1:8000/")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // Call users API
    fetch("http://127.0.0.1:8000/users/")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="app">
      <div className="container">
        <h1>FastAPI + React</h1>

        <div className="welcome">
          <h2>{message}</h2>
        </div>

        {user && (
          <div className="user-card">
            <h2>User Details</h2>

            <p>
              <strong>Name:</strong> {user.name}
            </p>

            <p>
              <strong>Age:</strong> {user.age}
            </p>

            <p>
              <strong>Phone Number:</strong> {user.phone_number}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
