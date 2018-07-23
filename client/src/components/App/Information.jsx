import React from "react";

const Information = () => (
  <div className="information">
    <h3>
      <span className="step-signifier">Step 1</span>: Select a Table
    </h3>
    <p className="instruction-details">
      Choose from one of the many Tables that DataUSA lists as available.
      Unfortunately, sometimes these resources are not available. If that is the
      case, select a different table. This is all you really need to do before
      requesting the table. If you want, skip to{" "}
      <span className="step-signifier">Step 5</span>.
    </p>
    <hr />
    <h3>
      <span className="step-signifier">Step 2</span>: Select Desired Table
      Filters
    </h3>
    <p className="instruction-details">
      Limit the amount of rows in your table, or choose what level of data that
      you wish to display. Some of levels of data are not available, so you may
      need to select another if your request turns up empty.
    </p>
    <hr />
    <h3>
      <span className="step-signifier">Step 3</span>: Select Columns
    </h3>
    <p className="instruction-details">
      Choose the columns that you wish to add to your table. All of the columns
      are used if you do not select any.
    </p>
    <hr />
    <h3>
      <span className="step-signifier">Step 4</span>: Select Desired Column
      Filters
    </h3>
    <p className="instruction-details">
      Further refine your request by narrowing the scope of the data in a
      particular column. Do this with as many columns as you like, but doing so
      will shrink your response. If no table with these search parameters is
      available, try loosening or removing the offending column filters.
    </p>
    <hr />
    <h3>
      <span className="step-signifier">Step 5</span>: Click Go!
    </h3>
  </div>
);

export default Information;
