// Fetching data on client side
//Static rendering
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
export default async function UsersPage() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await data.json();
  return (
    <>
      <h1 className="text-6xl">Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <br />
      <ul>
        {users.map((users) => (
          <li key={users.id} className="p-3">
            name: {users.name} <br />
            username: {users.username} <br />
          </li>
        ))}
      </ul>
    </>
  );
}
