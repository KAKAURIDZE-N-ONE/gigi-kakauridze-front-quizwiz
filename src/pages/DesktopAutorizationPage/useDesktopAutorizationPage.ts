import { useLocation, useNavigate } from "react-router-dom";

export default function useDesktopAutorizationPage() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return { navigate, pathname };
}
