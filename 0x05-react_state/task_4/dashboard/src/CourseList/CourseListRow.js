import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  th: {
    borderBottom: '0.15rem solid #ddd',
    padding: ' 8px',
    textAlign: 'left',
  },

  td: {
    padding: '8px',
    textAlign: 'left',
  },

  thColspan: {
    borderBottom: '0.15rem solid #ddd',
    padding: ' 8px',
    textAlign: 'center',
  },

  rowChecked: {
    background: '#e6e4e4',
  },
});

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [check, setCheck] = useState(false);
  const backgroundRows = { background: '#f5f5f5ab' };
  const backgroundHeader = { background: '#deb5b545' };

  const handleCheck = (e) => {
    setCheck(!check);
  };
  return (
    <>
      {isHeader ? (
        textSecondCell === null ? (
          <tr style={backgroundHeader}>
            <th colSpan={2} className={css(styles.thColspan)}>
              {textFirstCell}
            </th>
          </tr>
        ) : (
          <tr style={backgroundHeader}>
            <th className={css(styles.th)}>{textFirstCell}</th>
            <th className={css(styles.th)}>{textSecondCell}</th>
          </tr>
        )
      ) : (
        <tr
          style={backgroundRows}
          className={check ? css(styles.rowChecked) : ''}
        >
          <td className={css(styles.td)}>
            <input type="checkbox" onChange={handleCheck} />
            {textFirstCell}
          </td>
          <td className={css(styles.td)}>{textSecondCell}</td>
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
