import * as BL from "./styles";

export default function LoginButton() {
  return (
    <BL.Button>
      <BL.Text href={'/login'}>Logout</BL.Text>
    </BL.Button>
  );
}
