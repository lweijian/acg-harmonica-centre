import http from './http'
export const httpLogin =(param)=> http.post("/login",param)
export const httpRegister=(param)=>http.post("/centre_user/registered",param)
export const httpMusicPage=(param)=>http.post("/sheet_music/find_page",param)
export const httpVideoPage=(param)=>http.post("/music_video/find_page",param)
export const httpMusicSearch=(param)=>http.post("/sheet_music/find",param)
export const httpFindUser=()=>http.get("/centre_user/find_all");
export  const httpRemoveUser=(param)=>http.post("/centre_user/remove",param)
export  const httpEditUser=(param)=>http.post("/admin/edit_user",param)
export  const httpFindUserByName=(param)=>http.post("/centre_user/find",param)
// export const httpToAdmin=()=>http.get("/page/to_admin")

