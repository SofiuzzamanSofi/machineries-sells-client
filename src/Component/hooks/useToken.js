import { useEffect, useState } from "react";



//create &  get token from backend-function--------
const useToken = email => {

    const [token, setToken] = useState("");
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        localStorage.setItem("accessToken", data?.data);
                        setToken(data?.data);
                    };
                });
        };
    }, [email]);

    return [token];
};

export default useToken;