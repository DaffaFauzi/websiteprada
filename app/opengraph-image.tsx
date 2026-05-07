import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FFD700 0%, #000000 55%, #000000 100%)",
          position: "relative",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial',
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "0",
            opacity: 0.35,
            backgroundImage:
              "linear-gradient(120deg, rgba(255,215,0,0.22) 0%, rgba(255,215,0,0.0) 50%), linear-gradient(0deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.0) 60%)",
          }}
        />

        <div
          style={{
            width: "980px",
            borderRadius: "36px",
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(0,0,0,0.55)",
            padding: "56px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            <div
              style={{
                width: "68px",
                height: "68px",
                borderRadius: "18px",
                border: "1px solid rgba(255,215,0,0.5)",
                background: "rgba(255,215,0,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: 700,
                color: "#FFD700",
              }}
            >
              BC
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "44px",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                }}
              >
                PRADA BC
              </div>
              <div style={{ fontSize: "18px", color: "rgba(255,255,255,0.75)" }}>
                Perkasa Ardana Badminton Club • Surabaya
              </div>
            </div>
          </div>

          <div
            style={{
              fontSize: "34px",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#FFD700",
              lineHeight: 1.2,
              marginTop: "6px",
            }}
          >
            Empowering Badminton Excellence
          </div>

          <div
            style={{
              fontSize: "18px",
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.8)",
              maxWidth: "860px",
            }}
          >
            Klub badminton premium dari Surabaya di bawah Ardana Perkasa Group —
            pembinaan atlet, program latihan terstruktur, dan prestasi yang
            menginspirasi.
          </div>

          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            {["Pembinaan", "Program", "Prestasi"].map((t) => (
              <div
                key={t}
                style={{
                  padding: "10px 14px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "rgba(0,0,0,0.35)",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}

