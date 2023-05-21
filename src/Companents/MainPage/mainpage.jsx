import "./mainpage.css";
export default function PageOne() {
  return (
    <div className="top">
      <div>
        <button className="YourName">Your Name</button>
      </div>
      <div className="topRight">
        <button className="About">About</button>
        <button className="Experience">Experience</button>
        <button className="Projects">Projects</button>
        <button className="Contacts">Contacts</button>
      </div>
    </div>
  );
}
