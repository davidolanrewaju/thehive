import React from "react";

import Footerr from "../components/footer";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import { BgAuthReset, HiveTopLeft } from "../signIn/signinStyles";


export default function ResetPassword() {
  return (
    <>

      <BgAuthReset>
        <HiveTopLeft>
          <p>Hive</p>
        </HiveTopLeft>
        <div className="forgotCard">
          <Image 
              src='/resetlockicon.svg' 
              alt='sent'
              height={50}
              width={50}/>
          <p className="hiveright">Set new password</p>
          <span>Your new password should be strong an unique</span>
          <form>
            <div className="resetpasswordinput">
            <label>Password</label>
            <input 
            type="password"
            placeholder="Enter password" />
            <span>Password must be atleast 6 characters long</span>

            </div>

            <label>Confirm Password</label>
            <input type="password" placeholder="Re-enter Password"></input>
            <br />

            <div className={styles.resetbutton}>
              <button>Reset Password</button>

            </div>
          </form>
        </div>
        {/* <div className={styles.push}></div> */}
        <Footerr />
      </BgAuthReset>
    </>
  );
}