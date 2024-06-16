import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const checkIsLoggedIn = async (forServer = true) => {
  if (forServer) {
    return await checkSessionForServer();
  }
  return await checkSessionForClient();
};

const checkSessionForServer = async () => {
  const session = await getServerSession(authOptions);
  return session ? true : false;
};

const checkSessionForClient = async () => {
  const { data: session } = useSession();
  return session ? true : false;
};
