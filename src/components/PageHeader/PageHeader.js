import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import Container from "react-bootstrap/Container";
import "components/PageHeader/pageheader.scss";

export default function PageHeader({ title, subtext }) { // Accept the "subtext" prop
  return (
    <section className="section-page-header h">
      
      <Container>
        <div className="page-header-content">
          <div className="page-name">
            <h3>{title}</h3>
          </div>
          <div className="page-title">
            <p>{subtext}</p> {/* Display the subtext using the prop */}
          </div>
        </div> 
      </Container>
    </section> 
  );
}

// Define prop types for validation
PageHeader.propTypes = {
  subtext: PropTypes.string.isRequired, // Make sure "subtext" is a required string prop
};
