// import AuthGuard from "@/components/AuthGuard"; // Update path as per your project

// export default function Dashboard() {
//   return (
//     <AuthGuard>
//       <h1>Welcome to the Dashboard</h1>
//     </AuthGuard>
//   );
// }
"use client"; // Mark as a Client Component

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthGuard({ children }) {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [router]);

  return <>{children}</>;
}
