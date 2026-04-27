import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 675,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "675px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FFD700 0%, #000000 60%, #000000 100%)",
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
              "linear-gradient(120deg, rgba(255,215,0,0.20) 0%, rgba(255,215,0,0.0) 55%), linear-gradient(0deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.0) 60%)",
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
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "66px",
                height: "66px",
                borderRadius: "18px",
                border: "1px solid rgba(255,215,0,0.5)",
                background: "rgba(255,215,0,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: 800,
                color: "#FFD700",
              }}
            >
              BC
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "44px",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                }}
              >
                PRADA BC
              </div>
              <div style={{ fontSize: "18px", color: "rgba(255,255,255,0.75)" }}>
                Empowering Badminton Excellence
              </div>
            </div>
          </div>

          <div
            style={{
              fontSize: "18px",
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.82)",
              maxWidth: "880px",
            }}
          >
            Klub badminton premium dari Surabaya di bawah Ardana Perkasa Group.
            Pembinaan atlet, program latihan, dan prestasi.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

