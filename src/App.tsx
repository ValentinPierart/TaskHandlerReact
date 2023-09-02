import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-intro">
          <h2>User list</h2>
          {users.map((user) => (
            <div key={user.id}>{user.firstName}</div>
          ))}
        </div>
      </header>
    </div>
  );
};
export default App;
