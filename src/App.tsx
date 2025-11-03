import { useEffect, useState } from "react";
import BasicRoutes from "../routes/basic-routes";
import { ContextUser } from "../context/userContext";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import DirectorRoutes from "../routes/director-routes";
import TeacherRoutes from "../routes/teacher-routes";
import HODRoutes from "../routes/hod-routes";
import StudentRoutes from "../routes/student-routes";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../lib/firebase";
import { getDoc, doc } from "firebase/firestore";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import {fetchHolidays} from "../handlers/calander"
function App() {
  const { isLoggedIn, setUser, setIsLoggedIn, user }: any = ContextUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const cleaner = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setLoading(true);
        const id = user.uid;
        const userDetails = await getDoc(doc(db, "users", id));
        setIsLoggedIn(true);
        setUser({"id":id,...userDetails.data()});
        setLoading(false);
      }
    });
    return () => cleaner();
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <Routes>
      {BasicRoutes()}
      {isLoggedIn && (
        <Route>
          {user.role === "director" && DirectorRoutes}
          {user.role === "hod" && HODRoutes}
          {user.role === "teacher" && TeacherRoutes}
          {user.role === "student" && StudentRoutes}
        </Route>
      )}
    </Routes>
  );
}

export default App;
