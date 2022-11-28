// import axios from "axios";

// const saveUserOnDb = user => {
//     const userInfo = {
//         displayName: user?.displayName,
//         email: user?.email,
//         role: user?.role,
//     };
//     // axios.post({"https://machineries-sells-server-sofiuzzamansofi.vercel.app/user", userInfo} )
//     axios({
//         method: 'post',
//         url: "https://machineries-sells-server-sofiuzzamansofi.vercel.app/user",
//         data: userInfo,
//     }).then(res => {

//         if (res?.data?.success) {
//             // console.log(res?.data?.success)
//             return true;
//         } else {
//             // console.log(res?.data?.success)
//             return false;
//         };
//     });
//     // console.log("under axios");
//     // return
// };

// export default saveUserOnDb;