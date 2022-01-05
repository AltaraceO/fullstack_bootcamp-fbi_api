import { Link } from "react-router-dom";
import "./main.css";

export const Main = () => {
  return (
    <div>
      <div className="intro">
        <h1>
          This site enables you to get access to the most updated crime data
          from the FBI.
        </h1>

        <h3>Compare States</h3>
        <p>
          Compare different states by crime category and year. The data
          presented has been calculated using the state's population of your
          chosen year to produce the respective crime rate of that state which
          can then be compared to any other state. Later, you can review, update
          and delete your search history.
        </p>

        <h3>Wanted List</h3>
        <p>
          Under the Wanted category, you will find an extensive list of wanted
          and missing people as well as information requests on unresolved
          crimes. Enlarge any image by clicking it, or click any of the links to
          be redirected to the FBI's official page.
        </p>
        <p>
          <strong>Start</strong> by signing in using a username of your choice
          and begin searching.
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
        <h2>Learn more about the FBI Crime Data API</h2>
        <p>
          The FBI Crime Data API is a read-only web service that returns JSON or
          CSV data. It is broadly organized around the data reporting systems
          the FBI UCR program uses and their related entities. Agencies submit
          data using one of two reporting formats -- the Summary Reporting
          System (SRS), or the National Incident Based Reporting System (NIBRS).
          SRS data is the legacy format that provides aggregated counts of the
          reported crime offenses known to law enforcement by location.
        </p>

        <p>
          Read more and get your own API key
          <a
            href="https://crime-data-explorer.fr.cloud.gov/pages/docApi"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
        </p>
        <hr />
        <p>
          To submit a tip to the FBI{" "}
          <a href="https://www.fbi.gov/tips" target="_blank" rel="noreferrer">
            click here
          </a>
        </p>
      </div>
    </div>
  );
};
