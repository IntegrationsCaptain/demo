"use client";

import { Store } from "@integrationscaptain/react";
import { useCallback, useState } from "react";

/**
 * Hook that manages the install state of the listings.
 *
 * In a real application, this would be replaced with calls to your backend to read and update the install states of the
 * listings.
 */
function useInstallState() {
  const [installed, setInstallState] = useState([
    {
      listingId: "4f26c716-a85e-48e4-b197-84f1c1dd5b26",
      installed: true,
    },
  ]);

  const onInstalled = useCallback(
    (listingId: string, installed: boolean) => {
      setInstallState((oldState) => [
        ...oldState.filter((state) => state.listingId !== listingId),
        {
          listingId,
          installed,
        },
      ]);
    },
    [setInstallState]
  );

  return { installed, onInstalled };
}

export default function DemoReactInstallStatusClient() {
  const NEXT_PUBLIC_STORE_URL =
    process.env.NEXT_PUBLIC_STORE_URL || "https://demo.integrations.store";
  const { installed, onInstalled } = useInstallState();
  return (
    <Store
      unsafeParams={{ installed }}
      url={NEXT_PUBLIC_STORE_URL}
      onInstalledChange={onInstalled}
    />
  );
}
