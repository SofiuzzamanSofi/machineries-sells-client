import axios from "axios";
import { useEffect, useState } from "react";

const useUser = user => {
    // console.log("under useUser hooks", email);
    const [dbUser, setDbUser] = useState(null);

    // /create user on db or get user on db---
    useEffect(() => {
        if (user?.email) {
            axios.post("http://localhost:5000/user", { email: user?.email })
                .then(res => {
                    // console.log("clg from useUser hooks then success:", res?.data)
                    setDbUser(res?.data?.data);
                })
                .catch(error => console.log("error from useUser hooks from catch:", error));
        };
    }, [user?.email]);
    return [dbUser];
};
export default useUser;