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
      listingId: "listing-id",
      installed: true,
    },
    {
      listingId: "listing-id-2",
      installed: false,
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
    process.env.NEXT_PUBLIC_STORE_URL || "http://demo.integrations.store";
  const { installed, onInstalled } = useInstallState();
  return (
    <div className="h-full w-full flex flex-col bg-gray-200 p-4 shadow-md">
      <div className="mb-2 p-2 bg-gray-300 rounded text-black text-lg font-semibold">
        Managing install status externally
      </div>
      <Store
        unsafeParams={{ installed }}
        url={NEXT_PUBLIC_STORE_URL}
        onInstalledChange={onInstalled}
      />
    </div>
  );
}
