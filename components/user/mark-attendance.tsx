import React, { useState } from "react";
import {useParams} from "react-router-dom";
const CourseSubjectCalendar: React.FC = () => {
  const {type} = useParams();
  const [course, setCourse] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");

  const courses: Record<string, string[]> = {
    "B.Tech": ["Computer Science", "Electronics", "Mechanical", "Civil"],
    "BCA": ["Programming", "Networking", "Database", "Web Development"],
    "MBA": ["Finance", "Marketing", "HR", "Operations"],
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-orange-500 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6 text-orange-500">
          Course & Subject Selection
        </h1>

        {/* Select Course */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-700 font-medium">Select Course</label>
          <select
            value={course}
            onChange={(e) => {
              setCourse(e.target.value);
              setSubject("");
            }}
            className="w-full border border-orange-400 text-gray-800 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          >
            <option value="">-- Choose a Course --</option>
            {Object.keys(courses).map((courseName) => (
              <option key={courseName} value={courseName}>
                {courseName}
              </option>
            ))}
          </select>
        </div>

        {/* Select Subject */}
        {course && (
          <div className="mb-4 transition-all duration-300">
            <label className="block mb-2 text-gray-700 font-medium">Select Subject</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full border border-orange-400 text-gray-800 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            >
              <option value="">-- Choose a Subject --</option>
              {courses[course].map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Calendar */}
        {subject && (
          <div className="mt-6 text-center">
            <label className="block mb-2 text-gray-700 font-medium">Select a Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="border border-orange-400 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-800"
            />
            {selectedDate && (
              <p className="mt-3 text-orange-600 font-medium">
                Selected Date: <span className="font-semibold">{selectedDate}</span>
              </p>
            )}
          </div>
        )}

        {/* Submit Button (optional) */}
        {selectedDate && (
          <button
            className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-all duration-200"
            onClick={() =>
              alert(`Course: ${course}\nSubject: ${subject}\nDate: ${selectedDate}`)
            }
          >
            Confirm Selection
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseSubjectCalendar;
