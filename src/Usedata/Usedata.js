import { useEffect, useState } from "react";

const Usedata = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("./Courses.JSON")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);
  return [data];
};

export { Usedata };
