import { Store } from "@integrationscaptain/react";

export default function DemoReactInstallStatusClient() {
  const STORE_URL = process.env.STORE_URL || "http://demo.integrations.store";
  return (
    <Store
      unsafeParams={{
        installed: [
          {
            listingId: "listing-id",
            installed: true,
          },
          {
            listingId: "listing-id-2",
            installed: false,
          },
        ],
      }}
      url={STORE_URL}
    />
  );
}
