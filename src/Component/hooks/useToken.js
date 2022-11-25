import { data } from "autoprefixer";
import { useEffect, useState } from "react"

const useToken = user => {

    const [token, setToken] = useState("");
    console.log("upper usetoken", user);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/jwt?email=${user?.email}`)
                .then(res => res.json)
                .then(data => {
                    console.log(data)
                    if (data.success) {
                        localStorage.setItem("accessToken", data?.data);
                        setToken(data?.data);
                    };
                });
        };
    }, [user]);

    console.log("upper usetoken", user);
    return [token];
};

export default useToken;