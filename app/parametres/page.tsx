"use client";
import { useState } from "react";

const SettingsPage = () => {
  const [theme, setTheme] = useState("light"); // Thème par défaut sur "light"
  const [notifications, setNotifications] = useState(true);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSaveSettings = () => {
    alert("Paramètres sauvegardés !");
    console.log({
      theme,
      notifications,
      password,
      newPassword,
    });
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#fff7e6",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-8">Paramètres</h1>
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        {/* Thème */}
        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <h4 style={{ marginBottom: "10px", color: "#555" }}>Thème</h4>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              width: "100%",
            }}
          >
            <option value="light">Clair</option>
            <option value="dark">Sombre</option>
          </select>
        </div>

        {/* Notifications */}
        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <h4 style={{ marginBottom: "10px", color: "#555" }}>Notifications</h4>
          <label>
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              style={{
                marginRight: "10px",
              }}
            />
            Activer les notifications
          </label>
        </div>

        {/* Changer le mot de passe */}
        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <h4 style={{ marginBottom: "10px", color: "#555" }}>
            Changer le mot de passe
          </h4>
          <input
            type="password"
            placeholder="Mot de passe actuel"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              width: "100%",
              marginBottom: "10px",
            }}
          />
          <input
            type="password"
            placeholder="Nouveau mot de passe"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              width: "100%",
            }}
          />
        </div>

        {/* Bouton de sauvegarde */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={handleSaveSettings}
            style={{
              background: "linear-gradient(to right, #ee390f, #f9b700)",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              fontSize: "16px",
              transition: "background 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "linear-gradient(to right, #f9b700, #ee390f)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "linear-gradient(to right, #ee390f, #f9b700)")
            }
          >
            Sauvegarder les paramètres
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
