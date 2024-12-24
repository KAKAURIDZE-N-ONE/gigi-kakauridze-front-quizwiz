import { getUser } from "@/services/apiAuth";
import { UserTable } from "@/types/tables";
import { useQuery } from "@tanstack/react-query";

export const useAuthentication = () => {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery<UserTable>({
    queryKey: ["userAuthentication"],
    queryFn: getUser,
  });

  const isAuthenticated = !!user?.email_verified_at;

  return { isAuthenticated, isLoading, error, user };
};
