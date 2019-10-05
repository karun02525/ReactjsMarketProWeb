//export const Root_Url ="http://192.168.2.118:8081"
export const Root_Url ="http://192.168.1.3:8081"

export const URL = {
LOGIN: `${Root_Url}/api/authenticate/login`,
SendOTP:`${Root_Url}/api/authenticate/send-otp`,
VerifyOTP:`${Root_Url}/api/authenticate/verify-otp`,
CreateUSER:`${Root_Url}/api/authenticate/create-user`,
GetCategory:`${Root_Url}/api/get-category`,

CheckVender:`${Root_Url}/store/check-vender?uid=`,
VenderRegister:`${Root_Url}/store/vender-register`,





PROFILE_AVATAR_BASE_URL:`${Root_Url}/api/authenticate/image-profile/`,
STORE_AVATAR_BASE_URL:`${Root_Url}/store/image-store/`,
CATEGORY_AVATAR_BASE_URL:`${Root_Url}/api/image-category/`,

};