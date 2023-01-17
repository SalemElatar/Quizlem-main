import Users from "../../users.json";

const Admin = () => {
  return (
    <div>
      <ul>
        <h2>Users List </h2>
        {Users.map((user) => {
          return (
            <li>
              <ul>
                <li>{user.userName}</li>
                <li>{user.email}</li>
                <li>{user.password}</li>
              </ul>
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Admin;
