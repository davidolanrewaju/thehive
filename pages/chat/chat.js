import React, { useState } from "react";
import styles from "./chat.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Chat() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.nav}>
          <div className={styles.active}>
            <div className={styles.spot}></div>
            <div className={styles.hive}>Hive</div>
          </div>

          <div className={styles.navlist}>
            <div id={styles.profile}>
              <Image src="/profile.svg" alt="profile" width={22} height={16} />
            </div>
          </div>
          <div className={styles.navlist}>
            <div className={styles.holder}>
              <Image
                src="/settings.svg"
                alt="settings"
                width={22}
                height={16}
              />
            </div>
          </div>
          <div className={styles.navlist}>
            <div className={styles.holder}>
              <Image src="/help.svg" alt="help" width={22} height={16} />
            </div>
          </div>
          <div className={styles.navlist}>
            <div>
              <Image src="/avi.svg" alt="profile" width={36} height={36} />
            </div>
          </div>
          <div className={styles.user}>John1234</div>
        </div>
        <div className={styles.sec}>
          <div className={styles.leftPane}>
            <div className={styles.spans}>
              <div>
                <h4>Chats</h4>
              </div>
              <div className={styles.menuspot}>
                <div className={styles.menu}>
                  <Image src="/menu.svg" alt="profile" width={4} height={16} />
                </div>
              </div>
            </div>
            <div className={styles.search}>
              <input type="search" placeholder="Search" />
            </div>
            <div className={styles.nil}>
              <div className={styles.deet}>
                <p>No chats here</p>
                <Link href="#">
                  <a>Start a new chat </a>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.midpane}>
            <div
              className={styles["navi"]}
              id={expanded ? styles["xpanded"] : ""}
            >
              <div className={styles.dot}>
                <div className={styles.pers}>
                  <Image
                    src="/person.svg"
                    alt="person"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
              <div className={styles.icons}>
                <Image
                  src="/call.svg"
                  alt="call"
                  width={17.96}
                  height={17.96}
                />
              </div>
              <div className={styles.icons}>
                <Image
                  src="/videocam.svg"
                  alt="videocam"
                  width={18}
                  height={12}
                />
              </div>
              <div id={styles.menu2} onClick={() => setExpanded(false)}>
                <Image src="/menu2.svg" alt="menu" width={4} height={16} />
              </div>
            </div>
            <div
              className={styles["section"]}
              id={expanded ? styles["xpanded"] : ""}
            >
              <div className={styles.msgArea}>
                <div className={styles.teddy}>
                  <div className={styles.bear}>
                    <Image src="/bear.svg" alt="bear" width={88} height={88} />
                  </div>
                  <p>Send and receive messages here</p>
                </div>
              </div>
              <div
                className={styles["msgInput"]}
                id={expanded ? styles["xpand"] : ""}
              >
                <div className={styles.add}>
                  <div className={styles.imj}>
                    <Image src="/add.svg" alt="add" width={14} height={14} />
                  </div>
                </div>
                <div className={styles.fol}>
                  <Image
                    src="/folder.svg"
                    alt="folder"
                    width={22}
                    height={19}
                  />
                </div>
                <div>
                  {/* <Image src="/emoji.svg" alt="emoji" width={20} height={10} /> */}
                  <div contentEditable="true" className={styles.edit}>
                    edit
                  </div>
                </div>
                <div className={styles.send}>
                  <div className={styles.imj}>
                    <Image
                      src="/send.svg"
                      alt="send"
                      width={17.84}
                      height={15.56}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={expanded ? styles["none"] : styles["rightpane"]}>
            <div
              className={styles["close"]}
              onClick={() => setExpanded(!expanded)}
            >
              <Image src="/close.svg" alt="close" width={14} height={14} />
            </div>
            <div className={styles.txt}>
              <p>Your contact profile </p>
              <p id={styles.up}>appears here</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
