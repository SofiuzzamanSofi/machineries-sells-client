import { useEffect, useState } from "react";



//create &  get token from backend-function--------
const useToken = email => {

    const [token, setToken] = useState("");
    const [tokenLoading, setTokenLoading] = useState(false);
    useEffect(() => {
        if (email) {
            setTokenLoading(true);
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        localStorage.setItem("accessToken", data?.data);
                        setToken(data?.data);
                        setTokenLoading(false);
                    };
                });
        };
    }, [email]);

    return [token, tokenLoading];
};

export default useToken;