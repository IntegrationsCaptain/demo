"use client";

import { Store } from "@integrationscaptain/react";
import { usePathname, useRouter } from "next/navigation";

const CURRENT_PATH = "/react_path_change";

export default function DemoReactPathChangeClient() {
  const STORE_URL = process.env.STORE_URL || "http://demo.integrations.store";
  const path = usePathname();
  const pathWithoutCurrent = path.replace(CURRENT_PATH, "");
  return (
    <Store
      url={`${STORE_URL}${pathWithoutCurrent}`}
      onStorePathChange={(path) => {
        window.history.pushState({}, "", `${CURRENT_PATH}${path}`);
      }}
    />
  );
}
