import { C, E, Mia, Glow, Vignette } from "./lib.jsx";

const shake = (t0, amp = 14) => ({ property: "offsetX", keyframes: [
  { at: t0, value: 0 }, { at: t0 + 0.04, value: -amp }, { at: t0 + 0.08, value: amp * 0.8 },
  { at: t0 + 0.12, value: -amp * 0.5 }, { at: t0 + 0.17, value: 0 }] });
export { shake };

// ---------- S1: city at 3AM, windows light up, notice banner ----------
export const City = ({ dur }) => {
  let seed = 7; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  const blds = [[-60, 900, 420, "#141B33"], [330, 700, 440, "#18203A"], [740, 1000, 420, "#121830"]];
  const wins = [];
  blds.forEach(([bx, by, bw, col]) => {
    wins.push(<rect x={bx} y={by} width={bw} height={1920 - by + 100} fill={col} />);
    for (let r = 0; r < 14; r++) for (let c = 0; c < 4; c++) {
      const x = bx + 40 + c * ((bw - 80) / 4) + 10, y = by + 50 + r * 95;
      if (y > 1900) continue;
      wins.push(<rect x={x} y={y} width={56} height={62} radius={4} fill="#0D1226" />);
      const t = 0.25 + rnd() * 3.2;
      wins.push(<rect x={x} y={y} width={56} height={62} radius={4} fill="#9FC3FF"
        animate={[{ property: "opacity", keyframes: [{ at: 0, value: 0, easing: "hold" }, { at: t, value: 0 }, { at: t + 0.15, value: 0.85 }, { at: dur, value: 0.75 }] }]} />);
    }
  });
  return [
    <rect x={0} y={0} width={1080} height={1920} fill={{ kind: "linear", angle: 180, stops: [{ offset: 0, color: "#05070F" }, { offset: 1, color: "#1A2547" }] }} />,
    <Glow x={830} y={560} r={260} color="#C9D6FF" opacity={0.35} />,
    <path d={E(830, 560, 62, 62)} x={0} y={0} width={1080} height={1920} fill="#E8ECF5" />,
    <frame width={1080} height={1920} layout="none" origin="center"
      animate={[{ property: "scale", from: 1.0, to: 1.08, at: 0, duration: dur, easing: "linear" }]}>{wins}</frame>,
    <Vignette strength={0.7} />,
    <frame width={1080} height={1920} layout="none"
      animate={[{ property: "offsetY", keyframes: [{ at: 0, value: -340 }, { at: 0.15, value: -340 }, { at: 0.5, value: 0, easing: "ease-out" }, { at: dur, value: 0 }] }]}>
      <rect x={50} y={150} width={980} height={250} radius={44} fill="#1C2338EE" strokeColor="#FF3B4766" strokeWidth={2} shadow={{ x: 0, y: 14, blur: 40, color: "#000000AA" }} />
      <rect x={86} y={188} width={72} height={72} radius={18} fill={C.red} />
      <text x={86} y={192} width={72} align="center" fontFamily="Montserrat" fontWeight={800} fontSize={48} color="#FFFFFF">!</text>
      <text x={178} y={196} width={500} fontFamily="Montserrat" fontWeight={800} fontSize={32} letterSpacing={3} color={C.white}>NOTICE</text>
      <text x={800} y={200} width={200} align="right" fontFamily="Montserrat" fontWeight={600} fontSize={26} color={C.mute}>now</text>
      <text x={86} y={282} width={910} fontFamily="Montserrat" fontWeight={700} fontSize={38} lineHeight={1.25} color={C.white}>Do not open your door for anyone who knows your name.</text>
    </frame>,
  ];
};

// ---------- S2: the rule card ----------
export const RuleCard = ({ t0, W, words }) => {
  const red = new Set([22, 23, 24]);
  return [
    <rect x={0} y={0} width={1080} height={1920} fill={{ kind: "linear", angle: 180, stops: [{ offset: 0, color: "#07080F" }, { offset: 1, color: "#140A12" }] }} />,
    <Glow x={540} y={960} r={760} color={C.red} opacity={0.32}
      animate={[{ property: "opacity", keyframes: [{ at: 0, value: 0.6 }, { at: 0.8, value: 1 }, { at: 1.6, value: 0.6 }], repeat: 3 }]} />,
    <text x={0} y={560} width={1080} align="center" fontFamily="JetBrains Mono" fontWeight={700} fontSize={36} letterSpacing={10} color={C.red}>NOTICE #1</text>,
    <rect x={390} y={630} width={300} height={4} fill={C.red} />,
    <row x={70} y={700} width={940} gap={22} rowGap={4} wrap={true} justify="center">
      {words.map(([i, label]) => (
        <text fontFamily="Montserrat" fontWeight={800} fontSize={96} color={red.has(i) ? C.red : C.white}
          shadow={{ x: 0, y: 6, blur: 24, color: "#000000CC" }}
          animate={[{ property: "opacity", keyframes: [{ at: 0, value: 0.18, easing: "hold" }, { at: Math.max(0.01, W[i][0] - t0), value: 1 }] }]}>{label}</text>
      ))}
    </row>,
    <text x={0} y={1440} width={1080} align="center" fontFamily="JetBrains Mono" fontWeight={500} fontSize={24} letterSpacing={4} color={C.mute}>{"SENDER: UNKNOWN\nDELIVERED TO: EVERY DEVICE ON EARTH"}</text>,
    <Vignette strength={0.6} />,
  ];
};

// ---------- S3: Mia in bed ----------
export const Bedroom = ({ knocks, dur }) => [
  <rect x={0} y={0} width={1080} height={1920} fill={{ kind: "linear", angle: 180, stops: [{ offset: 0, color: "#0E1428" }, { offset: 1, color: "#1A2242" }] }} />,
  <rect x={640} y={260} width={330} height={480} radius={6} fill="#2B3A66" strokeColor="#0A0E1C" strokeWidth={18} />,
  <rect x={797} y={260} width={16} height={480} fill="#0A0E1C" />,
  <path d="M640 740 L970 740 L1080 1500 L420 1500 Z" x={0} y={0} width={1080} height={1920} fill={{ kind: "linear", angle: 180, stops: [{ offset: 0, color: "#8FA8E8", opacity: 0.18 }, { offset: 1, color: "#8FA8E8", opacity: 0 }] }} />,
  <rect x={130} y={700} width={820} height={560} radius={40} fill="#141A33" />,
  <Mia ox={240} oy={720} k={1.5} />,
  <path d="M0 1600 C200 1560 400 1590 540 1580 C700 1570 900 1550 1080 1590 L1080 1920 L0 1920 Z" x={0} y={0} width={1080} height={1920} fill="#2C3560" />,
  <path d="M0 1680 C300 1650 700 1680 1080 1660" x={0} y={0} width={1080} height={1920} stroke={{ width: 6, color: "#3A4475" }} />,
  <Glow x={540} y={1180} r={480} color={C.glow} opacity={0.32} />,
  ...knocks.map((t, n) => (
    <text x={50} y={430 + n * 110} width={500} fontFamily="Montserrat" fontWeight={800} fontSize={86} color={C.white}
      shadow={{ x: 0, y: 6, blur: 20, color: "#000000" }}
      animate={[{ property: "opacity", keyframes: [{ at: 0, value: 0, easing: "hold" }, { at: t, value: 1 }, { at: Math.min(t + 0.6, dur), value: 0.85 }] },
                { property: "scale", keyframes: [{ at: 0, value: 1.3, easing: "hold" }, { at: t, value: 1.3 }, { at: t + 0.12, value: 1, easing: "ease-out" }, { at: Math.min(t + 0.6, dur), value: 1 }] }]}>KNOCK.</text>
  )),
  <Vignette strength={0.75} />,
];

// ---------- Door (S4, S7) ----------
export const Door = ({ feet = null, dur }) => [
  <rect x={0} y={0} width={1080} height={1920} fill={{ kind: "linear", angle: 180, stops: [{ offset: 0, color: "#0C1124" }, { offset: 1, color: "#161D38" }] }} />,
  <rect x={0} y={1570} width={1080} height={350} fill="#0A0E1C" />,
  <rect x={262} y={350} width={556} height={1222} radius={6} fill="#121830" />,
  <rect x={290} y={378} width={500} height={1194} radius={4} fill="#2A3354" />,
  <rect x={340} y={440} width={400} height={470} radius={6} fill="#00000000" strokeColor="#1E2642" strokeWidth={8} />,
  <rect x={340} y={980} width={400} height={520} radius={6} fill="#00000000" strokeColor="#1E2642" strokeWidth={8} />,
  <path d={E(540, 660, 22, 22)} x={0} y={0} width={1080} height={1920} fill="#9AA3C0" />,
  <path d={E(540, 660, 12, 12)} x={0} y={0} width={1080} height={1920} fill="#05070D" />,
  <path d={E(722, 1010, 26, 26)} x={0} y={0} width={1080} height={1920} fill="#C9A45C" />,
  <rect x={690} y={820} width={70} height={22} radius={6} fill="#9AA3C0" />,
  <path d="M700 830 Q660 900 720 960" x={0} y={0} width={1080} height={1920} stroke={{ width: 6, color: "#9AA3C0" }} dash={[14, 8]} />,
  <rect x={290} y={1562} width={500} height={12} fill={C.warm}
    animate={feet ? [{ property: "opacity", keyframes: [{ at: 0, value: 1 }, { at: feet.flicker, value: 1 }, { at: feet.flicker + 0.05, value: 0.3 }, { at: feet.flicker + 0.1, value: 1 }, { at: feet.flicker + 0.16, value: 0.4 }, { at: feet.flicker + 0.24, value: 1 }, { at: dur, value: 1 }] }] : undefined} />,
  <path d="M290 1574 L790 1574 L980 1760 L100 1760 Z" x={0} y={0} width={1080} height={1920}
    fill={{ kind: "linear", angle: 180, stops: [{ offset: 0, color: C.warm, opacity: 0.35 }, { offset: 1, color: C.warm, opacity: 0 }] }} />,
  ...(feet ? [
    <rect x={430} y={1562} width={80} height={12} fill="#05070D" />,
    <rect x={570} y={1562} width={80} height={12} fill="#05070D" />,
    <path d="M430 1574 L510 1574 L540 1760 L380 1760 Z" x={0} y={0} width={1080} height={1920} fill="#05070DCC" />,
    <path d="M570 1574 L650 1574 L700 1760 L560 1760 Z" x={0} y={0} width={1080} height={1920} fill="#05070DCC" />,
  ] : []),
  <Vignette strength={0.8} />,
];

// ---------- S5: peephole ----------
export const Peephole = ({ dur }) => [
  <rect x={0} y={0} width={1080} height={1920} fill="#000000" />,
  <frame width={1080} height={1920} layout="none" origin="center"
    animate={[{ property: "scale", from: 1.0, to: 1.12, at: 0, duration: dur, easing: "linear" },
              { property: "offsetX", keyframes: [{ at: 0, value: -20 }, { at: dur / 2, value: 15 }, { at: dur, value: -10 }] }]}>
    <rect x={0} y={400} width={1080} height={1000} fill="#5E6448" />
    <path d="M0 400 L1080 400 L760 640 L320 640 Z" x={0} y={0} width={1080} height={1920} fill="#4A4F38" />
    <rect x={440} y={430} width={200} height={26} radius={8} fill="#F4F7D8" />
    <Glow x={540} y={470} r={360} color="#E9F0B8" opacity={0.45} />
    <path d="M0 1400 L1080 1400 L760 1160 L320 1160 Z" x={0} y={0} width={1080} height={1920} fill="#3A3C2C" />
    <rect x={320} y={640} width={440} height={520} fill="#6A7052" />
    <rect x={480} y={700} width={120} height={460} fill="#3E4230" />
    <path d="M250 1400 C250 1200 330 1110 540 1100 C750 1110 830 1200 830 1400 Z" x={0} y={0} width={1080} height={1920} fill={C.green} />
    <path d="M540 1100 L540 1400" x={0} y={0} width={1080} height={1920} stroke={{ width: 6, color: "#2C4E34" }} />
    <path d="M440 1110 L540 1190 L640 1110 Z" x={0} y={0} width={1080} height={1920} fill="#2C4E34" />
    <rect x={505} y={1040} width={70} height={80} fill="#15171C" />
    <path d={E(540, 960, 105, 125)} x={0} y={0} width={1080} height={1920} fill="#15171C" />
    <path d="M440 900 C450 820 500 800 540 800 C590 800 640 830 645 910 C600 880 480 880 440 900 Z" x={0} y={0} width={1080} height={1920} fill="#0B0C10" />
  </frame>,
  <rect x={-460} y={-100} width={2000} height={2000}
    fill={{ kind: "radial", stops: [{ offset: 0, color: "#000000", opacity: 0 }, { offset: 0.36, color: "#000000", opacity: 0.15 }, { offset: 0.43, color: "#000000", opacity: 1 }, { offset: 1, color: "#000000", opacity: 1 }] }} />,
  <rect x={-460} y={-100} width={2000} height={2000} blendMode="screen"
    fill={{ kind: "radial", stops: [{ offset: 0.38, color: "#9FC3FF", opacity: 0 }, { offset: 0.415, color: "#9FC3FF", opacity: 0.25 }, { offset: 0.43, color: "#9FC3FF", opacity: 0 }] }} />,
];
