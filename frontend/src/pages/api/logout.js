import { removeCookies } from "cookies-next";

export default function handler(req, res){
    removeCookies('user_id')

    res.status(200).redirect('/')
}