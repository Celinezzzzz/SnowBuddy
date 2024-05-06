import "./Profile.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile({ setIsUserLoggedIn }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      console.log("No token found, redirecting to login...");
      // Redirect to login or set an error message
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("Profile fetched successfully:", response.data);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        // Additional handling based on the type of error
        // For instance, if token is expired or invalid, log out the user
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("authToken");
          setIsUserLoggedIn(false);
          // Optionally redirect to login
        }
      }
    };

    fetchProfile();
  }, [setIsUserLoggedIn]);

  if (!user) {
    return <h1>Loading user details...</h1>;
  }

  return (
    <main className="profile-page">
      <h2>Welcome back, {user.name}!</h2>

      <button
        className="logout-button"
        onClick={() => {
          localStorage.removeItem("authToken");
          setIsUserLoggedIn(false);
        }}
      >
        Log out
      </button>
    </main>
  );
}
