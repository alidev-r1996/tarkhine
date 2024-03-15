import http from "@/services/configs/Config";

export async function LoginUser(number) {
  return await http.post("/auth", { phoneNumber: number }).then(({data})=>data.message);
}
