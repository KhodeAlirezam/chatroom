import { useState, useEffect } from "react";

const useUserData = (url) => {
  const [userData, setUserData] = useState({
    isLoading: true,
    isError: false,
    userList: [],
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDataRaw = await fetch(url);
        const userList = await userDataRaw.json();
        setUserData({
          userList,
          isLoading: false,
          isError: false,
        });
      } catch (error) {
        setUserData({
          userList: [],
          isLoading: false,
          isError: true,
        });
        console.log("Failed to fetch user data", error);
      }
    };
    fetchUserData();
  }, [url]);

  return userData;
};

export default useUserData;
