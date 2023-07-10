import * as React from "react";
import cx from "classnames";

import { SimpleUser } from "@/types";

import styles from "./user.module.css";
import Link from "next/link";
import Image from "next/image";

type Props = {
  user: SimpleUser;
  onSelectUser: (selectedUserId: string) => void;
};

export const UserCard = ({ user, onSelectUser }: Props) => {
  return (
    <Link href={`/users/${user.id}`} className="w-full md:w-1/3 lg:w-1/5">
      <div
        className={cx(
          "flex flex-col mb-8 px-3",
          styles.userCard
        )}
      >
        <div className="relative overflow-hidden bg-white rounded-lg shadow-xl hover:shadow-raised transform transition duration-200 hover:-translate-y-2">
          <div className={styles.userImagePlaceholder}></div>
          <img
            className={cx("w-full", styles.userImage)}
            src={user.picture}
            alt={user.firstName + " " + user.lastName}
          />

          <div
            className={cx(
              "p-6 flex flex-col justify-between",
              styles.detailWrapper
            )}
          >
            <p className="font-medium text-gray-900 leading-normal mb-2">
              {user.firstName} {user.lastName}
            </p>
            <p
              className="font-hairline text-sm text-gray-500 truncate mb-4"
              title={user.email}
            >
              {user.email}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
