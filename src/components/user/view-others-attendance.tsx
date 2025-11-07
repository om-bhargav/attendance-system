import React from "react";
import Calender from "../calender";
import SectionLoading from "../SectionLoading";
const viewStudentAttendance = ({ id, user, loaded }: any) => {
  return loaded ? (
    <>
      <div className="w-full gap-5 rounded grid lg:grid-cols-3">
        {[...Array.from(Array(12))].map((e, i) => (
          <Calender
            key={i}
            holidays={user.attendance}
            month_index={i}
          />
        ))}
      </div>
    </>
  ) : (
    <SectionLoading />
  );
};

export default viewStudentAttendance;
