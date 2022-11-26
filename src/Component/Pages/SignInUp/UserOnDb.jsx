// import axios from "axios";

// const saveUserOnDb = user => {
//     const userInfo = {
//         displayName: user?.displayName,
//         email: user?.email,
//         role: user?.role,
//     };
//     // axios.post({"http://localhost:5000/user", userInfo} )
//     axios({
//         method: 'post',
//         url: "http://localhost:5000/user",
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