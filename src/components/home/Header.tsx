import { Button } from "components/Button";
import React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "state";
import { Avatar, Box, Text } from "zmp-ui";

const Header: React.FunctionComponent = () => {
    const { userInfo } = useRecoilValue(userState);

    return (
        <div className="p-4">
            <Box flex>
                <Avatar
                    story="default"
                    online
                    src={
                        userInfo.avatar.startsWith("http")
                            ? userInfo.avatar
                            : undefined
                    }
                >
                    {userInfo.avatar}
                </Avatar>
                <Box ml={4}>
                    <Text.Title>{userInfo.name}</Text.Title>
                    <Text>{userInfo.id}</Text>
                </Box>
            </Box>
        </div>
        // <div className="bg-white w-[100%] p-2.5 bottom-5 mx-auto">
        //     <div className="flex justify-between items-center">
        //         <div className="flex items-center">
        //             <Button className="p-0.5 mx-1">
        //                 <div className="max-w-[40px] max-h-[40px]">
        //                     <img src="https://storage.googleapis.com/pangocdp-images/p-act/public/c9385ae058a24a129175d183ec46711e.png" alt="..." className="rounded-[5px]" />
        //                 </div>s
        //             </Button>
        //             <div>
        //                 <p className="text-[#a1a0a0] text-sm w-60">
        //                     {/* {brand.pangoConnect?.general?.welcome} */}
        //                 </p>
        //                 <div className="flex gap-1 items-center">
        //                     {/* {userInfo.oaName ? (
        //         <div className="text-sm font-semibold">{userInfo?.oaName}</div>
        //       ) : null} */}
        //                     <svg
        //                         width="15"
        //                         height="15"
        //                         viewBox="0 0 15 15"
        //                         fill="none"
        //                         xmlns="http://www.w3.org/2000/svg"
        //                     >
        //                         <path
        //                             d="M1.19885 11.0208L3.85141 1.12126L13.7509 3.77382L11.0983 13.6733L1.19885 11.0208Z"
        //                             fill="#1EC675"
        //                         />
        //                         <path
        //                             d="M0.474854 5.52124L9.3505 0.396885L14.4749 9.27253L5.59921 14.3969L0.474854 5.52124Z"
        //                             fill="#1EC675"
        //                         />
        //                         <path
        //                             d="M3.88281 6.69401L6.50558 9.68972L10.9441 4.98218"
        //                             stroke="white"
        //                         />
        //                     </svg>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="text-right">
        //             {/* <div onClick={shareLink} className="flex justify-end items-center">
        //       <div className="rounded-full flex items-center justify-center p-1">
        //         <svg
        //           xmlns="http://www.w3.org/2000/svg"
        //           className="w-7 text-[#B14FE3]"
        //           viewBox="0 0 256 256"
        //         >
        //           <path
        //             fill="var(--zmp-theme-color)"
        //             d="m237.66 106.35l-80-80A8 8 0 0 0 144 32v40.35c-25.94 2.22-54.59 14.92-78.16 34.91c-28.38 24.08-46.05 55.11-49.76 87.37a12 12 0 0 0 20.68 9.58c11-11.71 50.14-48.74 107.24-52V192a8 8 0 0 0 13.66 5.65l80-80a8 8 0 0 0 0-11.3M160 172.69V144a8 8 0 0 0-8-8c-28.08 0-55.43 7.33-81.29 21.8a196.17 196.17 0 0 0-36.57 26.52c5.8-23.84 20.42-46.51 42.05-64.86C99.41 99.77 127.75 88 152 88a8 8 0 0 0 8-8V51.32L220.69 112Z"
        //           />
        //         </svg>
        //       </div>
        //     </div> */}
        //         </div>
        //     </div>
        // </div>
    );
};

export default Header;
