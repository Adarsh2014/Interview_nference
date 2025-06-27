import { useEffect, useState } from "react";

const URL = "https://worldtimeapi.org/api/timezone/Etc/UTC";

const useLocalPagination = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const data = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flag,capital"
        );
        const json = await data.json();
        setList(json);
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return list;
};
export default useLocalPagination;
