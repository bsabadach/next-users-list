import * as React from "react";

import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className="w-full max-h-32">
      <nav className={styles.nav}>
        <div className="container mx-auto flex justify-between items-center overflow-hidden mb-16 pl-16">
          <div className="flex flex-row justify-between">
            <h1 className={styles.title}>USERS LIST APPLICATION</h1>
          </div>
        </div>
      </nav>
    </header>
  );
};
