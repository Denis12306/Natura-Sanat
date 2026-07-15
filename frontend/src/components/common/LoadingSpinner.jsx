// LoadingSpinner - Indicateur visuel de chargement
export default function LoadingSpinner() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 50px",
        gap: "16px"
      }}
    >
      <div className="w-10 h-10 border-4 border-[#e8f1df] border-t-[#5c7f49] rounded-full animate-spin"></div>

      <p style={{ color: "#2f3e29", fontWeight: 500, fontSize: "15px" }}>
        Chargement en cours...
      </p>
    </div>
  );
}
