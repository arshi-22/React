import "../styles.css";
export default function DashboardLayout({
  children,
  users,
  notifications,
  revenue,
  login,
}) {
  const isLogedIn = false;
  return isLogedIn ? (
    <>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {users}
          {revenue}
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </>
  ) : (
    login
  );
}
