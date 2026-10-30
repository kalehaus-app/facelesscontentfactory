export const C = {
  night: "#0B1020", wall: "#18203A", wall2: "#212A48", deep: "#060912",
  yellow: "#FFC83D", yellowD: "#D9A22A", red: "#FF3B47", white: "#F2F4F8",
  mute: "#8A93AD", skin: "#E9BE9C", skinD: "#C99A7C", hair: "#0E1016",
  glow: "#BFD8FF", warm: "#FFD58A", green: "#3E6B48",
};
// ellipse as cubic path
export const E = (cx, cy, rx, ry) => {
  const k = 0.5523, ox = rx * k, oy = ry * k;
  return `M${cx - rx} ${cy} C${cx - rx} ${cy - oy} ${cx - ox} ${cy - ry} ${cx} ${cy - ry} C${cx + ox} ${cy - ry} ${cx + rx} ${cy - oy} ${cx + rx} ${cy} C${cx + rx} ${cy + oy} ${cx + ox} ${cy + ry} ${cx} ${cy + ry} C${cx - ox} ${cy + ry} ${cx - rx} ${cy + oy} ${cx - rx} ${cy} Z`;
};
// scale every number in a path (only M L C Q Z used, so numbers alternate x,y)
export const sc = (d, k) => d.replace(/-?\d+(\.\d+)?/g, (n) => String(+(parseFloat(n) * k).toFixed(2)));

const FULL = { width: 1080, height: 1920, layout: "none" };

// Shape placed at (ox,oy) with scale k, drawn in a local W x H box
export const Shape = ({ d, ox, oy, k = 1, W = 400, H = 560, fill, stroke }) => (
  <path d={sc(d, k)} x={ox} y={oy} width={W * k} height={H * k} fill={fill} stroke={stroke} />
);

// Mia: local box 400 x 560, head centre (200,170)
export const Mia = ({ ox, oy, k = 1, eyes = "normal", phone = true }) => {
  const P = (d, fill, stroke) => <Shape d={d} ox={ox} oy={oy} k={k} fill={fill} stroke={stroke} />;
  const eyeRy = eyes === "wide" ? 20 : 16;
  return [
    P("M80 265 C70 175 90 60 200 40 C310 60 330 175 320 265 C300 280 270 278 255 262 L145 262 C130 278 100 280 80 265 Z", C.hair),
    P("M50 560 C50 400 105 330 200 330 C295 330 350 400 350 560 Z", C.yellow),
    P("M182 280 L218 280 L222 336 L178 336 Z", C.skinD),
    P("M118 340 C150 312 250 312 282 340 C255 362 145 362 118 340 Z", C.yellowD),
    P("M160 420 L160 560 M240 420 L240 560", undefined, { width: 5 * k, color: "#E3AE2F", cap: "round" }),
    P(E(200, 172, 92, 106), C.skin),
    P("M104 150 C108 82 152 50 200 50 C248 50 292 82 296 150 C255 128 145 128 104 150 Z", C.hair),
    P(E(162, 190, 13, eyeRy), "#15161C"),
    P(E(238, 190, 13, eyeRy), "#15161C"),
    P(E(166, 183, 4.5, 4.5), "#FFFFFF"),
    P(E(242, 183, 4.5, 4.5), "#FFFFFF"),
    P("M146 160 Q162 152 178 158", undefined, { width: 5 * k, color: C.hair, cap: "round" }),
    P("M222 158 Q238 152 254 160", undefined, { width: 5 * k, color: C.hair, cap: "round" }),
    eyes === "wide"
      ? P(E(200, 240, 9, 7), "#5A2E2A")
      : P("M188 242 Q200 236 212 242", undefined, { width: 4 * k, color: "#7A4A3A", cap: "round" }),
    phone ? P("M150 390 C150 380 156 376 164 376 L236 376 C244 376 250 380 250 390 L250 520 C250 528 244 532 236 532 L164 532 C156 532 150 528 150 520 Z", "#1C2236") : null,
    phone ? P("M158 388 L242 388 L242 520 L158 520 Z", C.glow) : null,
    phone ? P(E(146, 470, 26, 34), C.skin) : null,
    phone ? P(E(254, 470, 26, 34), C.skin) : null,
  ];
};

// Persistent HUD
export const Hud = ({ time }) => [
  <rect x={60} y={96} width={250} height={54} radius={27} fill="#0B102099" strokeColor={C.red} strokeWidth={2} />,
  <rect x={84} y={116} width={14} height={14} radius={7} fill={C.red}
    animate={[{ property: "opacity", keyframes: [{ at: 0, value: 1 }, { at: 0.5, value: 0.25 }, { at: 1, value: 1 }], repeat: 2 }]} />,
  <text x={110} y={108} width={200} fontFamily="JetBrains Mono" fontWeight={700} fontSize={26} letterSpacing={3} color={C.white}>NOTICE #1</text>,
  <text x={60} y={164} width={400} fontFamily="Montserrat" fontWeight={800} fontSize={58} color={C.white}>{time}</text>,
  <text x={62} y={232} width={420} fontFamily="JetBrains Mono" fontWeight={500} fontSize={20} letterSpacing={4} color={C.mute}>RULES ACTIVE: 1</text>,
];

// vignette over a scene
export const Vignette = ({ strength = 0.85 }) => (
  <rect x={-200} y={-200} width={1480} height={2320}
    fill={{ kind: "radial", stops: [{ offset: 0, color: "#000000", opacity: 0 }, { offset: 0.45, color: "#000000", opacity: 0 }, { offset: 0.7, color: "#000000", opacity: strength }] }} />
);

export const Glow = ({ x, y, r, color, opacity = 0.6, animate }) => (
  <rect x={x - r} y={y - r} width={r * 2} height={r * 2} animate={animate}
    fill={{ kind: "radial", stops: [{ offset: 0, color, opacity }, { offset: 0.68, color, opacity: 0 }] }} />
);
