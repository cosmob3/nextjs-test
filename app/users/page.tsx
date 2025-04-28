//Dynamic Rendering
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
export default async function UsersPage() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  //cache: "no-store" ==> to disable caching
  //next: {revalidate: 10 } ==> every 10 seconds
  const users: User[] = await data.json();
  return (
    <>
      <h1 className="text-6xl">Users</h1>
      {/*Time stamp on works in Dev mode, not in production because NextJS sees this as a static page.
      
      when using the fetch function NextJS will cache the data. So it treats data as static or unchanging data.*/}
      <p>{new Date().toLocaleTimeString()}</p>

      <table data-theme="coffee" className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="p-3">
              <td> {user.name}</td>
              <td> {user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
