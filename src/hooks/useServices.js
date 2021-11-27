import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://frightening-pumpkin-71085.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data.products));
  }, []);
  return [services, setServices];
};

export default useServices;
