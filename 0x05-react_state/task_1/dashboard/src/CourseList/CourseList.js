import React from "react";
import CourseListRow from "./CourseListRow";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  CourseList: {
    width: "95%",
    borderCollapse: "collapse",
    border: "0.025rem solid #ddd",
  },
});
function CourseList({ listCourses }) {
  return (
    <table className={css(styles.CourseList)}>
      <thead>
        <CourseListRow isHeader={true} textFirstCell={"Available courses"} />
        <CourseListRow
          isHeader={true}
          textFirstCell={"Course name"}
          textSecondCell={"Credit"}
        />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow
            isHeader={false}
            textFirstCell="No course available yet"
            textSecondCell={null}
          />
        ) : (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              isHeader={false}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
