import "./App.css";
export default function Header() {
  return (
    <div className="header" style={{ color: "white" }}>
      <b>Your name</b>
      <div className="headerS">
        <p>About</p>
        <p>Experience</p>
        <p>Projects</p>
        <p>Contacts</p>
      </div>
    </div>
  );
}
