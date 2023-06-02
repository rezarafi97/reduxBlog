import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>وبلاگ کوچک ریداکسی من</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to={"/"}>وبلاگ</Link>
          </div>
          <div className="navLinks">
            <Link to={"/users"}>نویسندگان</Link>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
