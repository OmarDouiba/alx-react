import React from "react";
import PropTypes from "prop-types";

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const backgroundRows = { background: "#f5f5f5ab" };
  const backgroundHeader = { background: "#deb5b545" };
  return (
    <>
      {isHeader ? (
        textSecondCell === null ? (
          <tr style={backgroundHeader}>
            <th colSpan={2}>{textFirstCell}</th>
          </tr>
        ) : (
          <tr style={backgroundHeader}>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </tr>
        )
      ) : (
        <tr style={backgroundRows}>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </tr>
      )}
    </>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
