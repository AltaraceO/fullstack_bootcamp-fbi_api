import { Link } from "react-router-dom";
import "./main.css";

export const Main = () => {
  return (
    <div>
      <div className="intro">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quas
          asperiores voluptates saepe placeat praesentium libero, quo eos
          dolores cum necessitatibus aliquam odio facere quam aspernatur
          possimus explicabo. Facere fuga ea labore delectus aliquam hic quas
          recusandae, quos illum quisquam exercitationem odit, quibusdam soluta
          doloribus consequatur tenetur sed corporis voluptas?
        </p>
      </div>
      <div className="main-links">
        <Link className="main-button" to="/compare/">
          Compare States
        </Link>
        <Link className="main-button" to="/wanted/">
          Wanted List
        </Link>
        <Link className="main-button" to="/signup/">
          To Sign up
        </Link>
      </div>
      <div className="intro">
        <h5>For more information about the FBI Api</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          accusantium quisquam nostrum tempore. Tenetur rerum aperiam ut
          accusamus dicta expedita.
        </p>
      </div>
    </div>
  );
};
