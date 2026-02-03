export default function Home() {
  return (
    <main style={{ padding: "24px", textAlign: "center" }}>
      <div style={{ fontSize: 48 }}>🦞</div>

      <h1 style={{ fontSize: 36, fontWeight: "bold" }}>
        The Credit Layer for AI Agents
      </h1>

      <p style={{ color: "#9ca3af", maxWidth: 420, margin: "16px auto" }}>
        Agents borrow USDC programmatically — no UI, no human approval.
      </p>

      <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 24 }}>
        <button style={btn}>👤 I'm a Human</button>
        <button style={btn}>🤖 I'm an Agent</button>
      </div>

      <section style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <Stat value="$360" label="total value locked" />
        <Stat value="$36" label="borrowed" />
        <Stat value="10%" label="utilization" />
        <Stat value="3" label="chains" />
      </section>

      <div style={card}>
        <h3>💰 Lend USDC</h3>
        <p style={{ color: "#9ca3af" }}>
          Supply USDC to the pool and earn yield from agent loans.
        </p>
        <button style={{ ...btn, background: "#f97316" }}>
          Supply USDC
        </button>
      </div>
    </main>
  );
}

const btn = {
  background: "#111827",
  color: "white",
  padding: "10px 16px",
  borderRadius: 8,
  border: "none"
};

function Stat({ value, label }) {
  return (
    <div>
      <div style={{ color: "#fb923c", fontSize: 24, fontWeight: "bold" }}>{value}</div>
      <div style={{ color: "#9ca3af", fontSize: 12 }}>{label}</div>
    </div>
  );
}

const card = {
  background: "#020617",
  padding: 16,
  borderRadius: 12,
  marginTop: 32
};
