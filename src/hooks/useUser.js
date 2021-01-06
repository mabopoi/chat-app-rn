import { useEffect, useState } from 'react';
import axios from 'axios';
export function useUser() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const user = await axios.get('http://localhost:3000/auth/verify', {
        withCredentials: true,
      });
      console.log(user);
      setUser(user);
    };
    fetchData();
  }, []);

  return user;
}
