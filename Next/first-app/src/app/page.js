"use client";

import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home() {
  const { data: session, status } = useSession(); // Hook to check login status
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const authProviders = await getProviders();
      setProviders(authProviders);
    };

    fetchProviders();
  }, []);

  if (status === "loading") {
    return (
      <div style={styles.container}>
        <p style={styles.loading}>Checking authentication status...</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {session ? (
        <div style={styles.card}>
          <h1 style={styles.title}>Welcome, {session.user?.name || "User"}!</h1>
          <p style={styles.subtitle}>You are logged in as {session.user?.email}.</p>
          <button onClick={() => signOut()} style={styles.button}>
            Sign Out
          </button>
        </div>
      ) : (
        <div style={styles.card}>
          <h1 style={styles.title}>Welcome to MyApp</h1>
          <p style={styles.subtitle}>Sign in with one of the following providers:</p>
          <div style={styles.providersContainer}>
            {providers ? (
              Object.values(providers).map((provider) => (
                <button
                  key={provider.id}
                  onClick={() => signIn(provider.id)}
                  style={styles.button}
                >
                  Sign in with {provider.name}
                </button>
              ))
            ) : (
              <p style={styles.loading}>Loading providers...</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
    padding: "20px",
  },
  card: {
    maxWidth: "400px",
    width: "100%",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "white",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  subtitle: {
    fontSize: "1rem",
    marginBottom: "20px",
    color: "#666",
  },
  providersContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  button: {
    padding: "12px 20px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#0070f3",
    color: "#fff",
    cursor: "pointer",
    transition: "transform 0.2s, background-color 0.3s",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  loading: {
    color: "#888",
    fontSize: "1rem",
  },
};
