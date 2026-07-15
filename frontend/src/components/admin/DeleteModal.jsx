// Fenêtre modale de confirmation lorsque suppression
export default function DeleteModal({
  open,
  onConfirm,
  onCancel,
}) {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.45)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        <h3>Confirmer la suppression ?</h3>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button onClick={onConfirm}>
            Oui
          </button>

          <button onClick={onCancel}>
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}
