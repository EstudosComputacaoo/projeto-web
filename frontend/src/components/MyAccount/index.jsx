import * as MC from "./myAccountStyle";
import {useAuthContext} from '../_Context/AuthContext'

export default function MyAccount() {
  const {user} = useAuthContext()
  return (
    <div>
      <MC.Title>{user  ? 'MINHA CONTA' :  'SAIR'}</MC.Title>
    </div>
  );
}
