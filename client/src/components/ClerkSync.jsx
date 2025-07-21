
import { useEffect } from "react";
import { useUser, useAuth } from "@clerk/clerk-react";
import axios from "axios";

const ClerkSync = () => {
  const { user } = useUser();
  const { getToken, isSignedIn } = useAuth();

  useEffect(() => {
    const syncUser = async () => {
      try {
        const token = await getToken();

        await axios.post("/api/user/sync", {}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

      } catch (error) {
        console.error("Sync failed:", error);
      }
    };

    if (user && isSignedIn) {
      syncUser();
    }
  }, [user, isSignedIn]);

  return null;
};

export default ClerkSync;
