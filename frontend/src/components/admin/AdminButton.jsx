// bouton réutilisable et personnalisable pour pages d'administration.
export default function AdminButton({
  children,
  onClick,
  type = "button",
  variant = "primary",
}) {
  const colors = {
    primary: "#2E7D32",
    danger: "#C62828",
    secondary: "#1565C0",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        background: colors[variant],
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        padding: "10px 18px",
        cursor: "pointer",
        fontWeight: "600",
      }}
    >
      {children}
    </button>
  );
}
