import styles from './auth.module.scss';
import { Button } from "@mui/material";

/* eslint-disable-next-line */
export interface AuthProps {}

export function Auth(props: AuthProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Auth!</h1>
      <Button variant="contained">Hello World</Button>
    </div>
  );
}

export default Auth;
