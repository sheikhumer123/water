import React, { useState } from "react";
import axios from "../components/axios";

const Test = () => {
  const [formdata, setFormData] = useState({
    test_name: "",
    test_email: "",
    password: "",
    sb_test: [],
    test_image: "",
  });

  console.log(formdata);

  //   const add_test = async (e) => {
  //     e.preventDefault();
  //     await axios.post("/todos/", formdata).then((res) => {});
  //     alert("some context needed");
  //   };

  const test = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("File", formData.test_image);
    console.log(formData);
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          value={formdata.test_name}
          onChange={(e) =>
            setFormData({ ...formdata, test_name: e.target.value })
          }
          style={{ margin: 25 }}
          type="text"
        />
        <input
          value={formdata.test_email}
          onChange={(e) =>
            setFormData({ ...formdata, test_email: e.target.value })
          }
          style={{ margin: 25 }}
          type="text"
        />
        <input
          value={formdata.password}
          onChange={(e) =>
            setFormData({ ...formdata, password: e.target.value })
          }
          style={{ margin: 25 }}
          type="text"
        />
        <input
          onChange={(e) =>
            setFormData({ ...formdata, test_image: e.target.files[0] })
          }
          style={{ margin: 25 }}
          type="file"
        />
        <button onClick={test} className="btn btn-primary">
          DO
        </button>
      </div>
    </>
  );
};
export default Test;
