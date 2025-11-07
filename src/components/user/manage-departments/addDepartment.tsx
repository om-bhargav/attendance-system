import { arrayUnion, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { ContextUser } from "../../../context/userContext";
import { db } from "../../../firebase";
import SubmitButton from "../../SubmitButton";
const addDepartment = () => {
  const navigate = useNavigate();
  const { user }: any = ContextUser();
  const [inputs, setInputs] = useState<any>([]);
  const onChangeHandler = (id: string, subject: string) => {
    const newInputs = inputs.map((item: any) => {
      return item.id === id ? { ...item, value: subject } : item;
    });
    setInputs(newInputs);
  };
  const addSubject = () => {
    setInputs([...inputs, { id: v4() as string, value: "", attendance: [] }]);
  };
  const removeSubject = (id: string) => {
    setInputs(inputs.filter((item: any) => item.id != id));
  };
  const addGroup = async (form_data: any) => {
    const { group } = Object.fromEntries(form_data);
    await setDoc(doc(db, "departments", user.id), {
      departments: arrayUnion(
        { name: group, id: v4(), subjects: inputs },
      ),
    },{ merge: true }),
    setInputs([]);
    navigate("/manage-departments");
    toast.success("Group Added Successfully");
  };

  return (
    <>
    <title>Add Department</title>
    <div className="max-w-[1200px] gap-2 flex flex-col items-center md:shadow-lg rounded mx-auto container my-12 p-5">
      <div className="text-2xl font-bold">Add Group</div>
      <form action={addGroup} className="grid gap-3 w-full p-5">
        <div className="grid">
          <label className="text-lg font-semibold">Enter Name Of Group:</label>
          <input
            type="text"
            name="group"
            required
            placeholder="Enter Name Of Your Group"
            />
        </div>
        <div className="grid gap-3">
          {inputs.length === 0 ? (
            <div>No Subjects Added Yet</div>
          ) : (
            inputs.map((item: any, index: number) => (
              <div className="grid gap-3" key={index}>
                <label className="text-lg font-semibold">
                  Enter Subject {index + 1}:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    onChange={(e) => onChangeHandler(item.id, e.target.value)}
                    className="w-full"
                    placeholder="Enter Subject Name"
                    required
                    value={item.value}
                    />
                  <button type="button" onClick={() => removeSubject(item.id)}>
                    <FaMinus />
                  </button>
                </div>
              </div>
            ))
          )}
          <button onClick={addSubject} type="button">
            Add Subject
          </button>
        </div>
        <SubmitButton text="Add Group" />
      </form>
    </div>
          </>
  );
};

export default addDepartment;
