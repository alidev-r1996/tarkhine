import http from "@/services/configs/Config";

export async function GetFoods() {
  return await http.get("/").then((res) => res.data);
}

export async function GetEkbatanFoods({search="", filter="all"}) {
 return await http
    .get(`/ekbatan/?filter=${filter}&search=${search}`)
    .then((res) => res.data);
}

export async function LikeFoods(id){
  return await http.post("/", {foodId : id}).then((res)=>res.data)
}

export async function LikeEkbatanFoods(id){
  return await http.post("/ekbatan", {foodId : id}).then((res)=>res.data)
}
