import { C, E, Mia, Glow, Vignette } from "./lib.jsx";

const pop = (t, dur) => [
  { property: "opacity", keyframes: [{ at: 0, value: 0, easing: "hold" }, { at: t, value: 0 }, { at: t + 0.18, value: 1 }, { at: dur, value: 1 }] },
  { property: "offsetY", keyframes: [{ at: 0, value: 30, easing: "hold" }, { at: t, value: 30 }, { at: t + 0.25, value: 0, easing: "ease-out" }, { at: dur, value: 0 }] },
];

// a chat bubble as a full-canvas frame so it can animate
const Bubble = ({ x, y, w, h, fill, color, text, t, dur }) => (
  <frame width={1080} height={1920} layout="none" animate={pop(t, dur)}>
    <rect x={x} y={y} width={w} height={h} radius={40} fill={fill} />
    <text x={x + 36} y={y + 26} width={w - 72} fontFamily="Inter" fontWeight={600} fontSize={40} lineHeight={1.3} color={color}>{text}</text>
  </frame>
);

// ---------- S6: the text from Leo ----------
export const Phone = ({ dur, tTyping, tReply }) => [
  <rect x={0} y={0} width={1080} height={1920} fill="#04060B" />,
  <Glow x={540} y={1100} r={900} color={C.glow} opacity={0.12} />,
  <frame width={1080} height={1920} layout="none" origin="center"
    animate={[{ property: "scale", keyframes: [{ at: 0, value: 1, easing: "hold" }, { at: tReply, value: 1 }, { at: dur, value: 1.12, easing: "ease-in-out" }] },
              { property: "offsetY", keyframes: [{ at: 0, value: 0, easing: "hold" }, { at: tReply, value: 0 }, { at: dur, value: -60, easing: "ease-in-out" }] }]}>
    <rect x={100} y={300} width={880} height={1760} radius={96} fill="#1A1F2E" />
    <rect x={122} y={322} width={836} height={1716} radius={78} fill="#0E1220" />
    <path d={E(540, 470, 58, 58)} x={0} y={0} width={1080} height={1920} fill={C.green} />
    <text x={440} y={436} width={200} align="center" fontFamily="Inter" fontWeight={600} fontSize={52} color="#FFFFFF">L</text>
    <text x={240} y={545} width={600} align="center" fontFamily="Inter" fontWeight={600} fontSize={36} color={C.white}>Leo (brother)</text>
    <rect x={122} y={610} width={836} height={2} fill="#232A40" />
    <text x={240} y={650} width={600} align="center" fontFamily="Inter" fontWeight={400} fontSize={26} color={C.mute}>Yesterday 9:14 PM</text>
    <rect x={500} y={700} width={420} height={100} radius={40} fill={C.yellow} />
    <text x={536} y={726} width={370} fontFamily="Inter" fontWeight={600} fontSize={40} color="#1A1405">you home tmrw?</text>
    <rect x={160} y={830} width={560} height={150} radius={40} fill="#262C42" />
    <text x={196} y={856} width={500} fontFamily="Inter" fontWeight={600} fontSize={40} lineHeight={1.3} color={C.white}>night shift all week. call u after</text>
    <text x={240} y={1020} width={600} align="center" fontFamily="Inter" fontWeight={400} fontSize={26} color={C.mute}>Today 3:01 AM</text>
    <Bubble x={420} y={1070} w={500} h={150} fill={C.yellow} color="#1A1405" text={"are you outside my door??"} t={0.1} dur={dur} />
    <frame width={1080} height={1920} layout="none"
      animate={[{ property: "opacity", keyframes: [{ at: 0, value: 0, easing: "hold" }, { at: tTyping, value: 1, easing: "hold" }, { at: tReply - 0.05, value: 0, easing: "hold" }, { at: dur, value: 0 }] }]}>
      <rect x={160} y={1250} width={170} height={90} radius={40} fill="#262C42" />
      {[0, 1, 2].map((i) => (
        <path d={E(205 + i * 40, 1295, 11, 11)} x={0} y={0} width={1080} height={1920} fill={C.mute}
          animate={[{ property: "opacity", keyframes: [{ at: 0, value: 0.3 }, { at: 0.2 + i * 0.1, value: 1 }, { at: 0.6, value: 0.3 }], repeat: 3 }]} />
      ))}
    </frame>
    <Bubble x={160} y={1250} w={600} h={160} fill="#262C42" color={C.white} text={"Still at the hospital. Night shift. Why?"} t={tReply} dur={dur} />
  </frame>,
  <Vignette strength={0.5} />,
];

// ---------- S8: the choice ----------
export const Choice = ({ dur, tLine2, tButtons, tAsk, tKnock }) => [
  <rect x={0} y={0} width={1080} height={1920} fill={{ kind: "linear", angle: 180, stops: [{ offset: 0, color: "#0A0E1E" }, { offset: 1, color: "#151C38" }] }} />,
  <Glow x={540} y={800} r={700} color={C.red} opacity={0.18} />,
  <frame width={1080} height={1920} layout="none" origin="center"
    animate={[{ property: "scale", from: 1.0, to: 1.07, at: 0, duration: dur, easing: "linear" },
              { property: "offsetX", keyframes: [{ at: 0, value: 0, easing: "hold" }, { at: tKnock, value: 0 }, { at: tKnock + 0.04, value: -16 }, { at: tKnock + 0.08, value: 12 }, { at: tKnock + 0.13, value: -6 }, { at: tKnock + 0.18, value: 0 }, { at: dur, value: 0 }] }]}>
    <Mia ox={100} oy={640} k={2.2} eyes="wide" phone={false} />
    <Glow x={540} y={1500} r={640} color={C.glow} opacity={0.22} />
  </frame>,
  <rect x={0} y={0} width={1080} height={620} fill={{ kind: "linear", angle: 180, stops: [{ offset: 0, color: "#05070F", opacity: 0.95 }, { offset: 1, color: "#05070F", opacity: 0 }] }} />,
  <rect x={0} y={1300} width={1080} height={620} fill={{ kind: "linear", angle: 180, stops: [{ offset: 0, color: "#05070F", opacity: 0 }, { offset: 0.45, color: "#05070F", opacity: 0.92 }, { offset: 1, color: "#05070F", opacity: 1 }] }} />,
  <text x={40} y={290} width={1000} align="center" fontFamily="Montserrat" fontWeight={800} fontSize={76} lineHeight={1.1} color={C.white}
    shadow={{ x: 0, y: 6, blur: 20, color: "#000000" }} animate={pop(0.05, dur)}>{"WOULD YOU OPEN\nTHE DOOR..."}</text>,
  <text x={40} y={480} width={1000} align="center" fontFamily="Montserrat" fontWeight={800} fontSize={72} color={C.yellow}
    shadow={{ x: 0, y: 6, blur: 20, color: "#000000" }} animate={pop(tLine2, dur)}>...OR STAY SILENT?</text>,
  <frame width={1080} height={1920} layout="none" animate={pop(tButtons, dur)}>
    <rect x={80} y={1530} width={440} height={130} radius={65} fill={C.yellow} shadow={{ x: 0, y: 10, blur: 30, color: "#FFC83D55" }} />
    <text x={80} y={1572} width={440} align="center" fontFamily="Montserrat" fontWeight={800} fontSize={42} color="#1A1405">OPEN</text>
    <rect x={560} y={1530} width={440} height={130} radius={65} fill="#00000000" strokeColor={C.white} strokeWidth={5} />
    <text x={560} y={1572} width={440} align="center" fontFamily="Montserrat" fontWeight={800} fontSize={42} color={C.white}>STAY SILENT</text>
  </frame>,
  <frame width={1080} height={1920} layout="none" animate={pop(tAsk, dur)}>
    <text x={0} y={1710} width={1080} align="center" fontFamily="JetBrains Mono" fontWeight={700} fontSize={32} letterSpacing={6} color={C.white}>WHAT WOULD YOU DO?</text>
    <text x={0} y={1768} width={1080} align="center" fontFamily="JetBrains Mono" fontWeight={500} fontSize={24} letterSpacing={4} color={C.red}>YOUR ANSWER DECIDES NOTICE #2</text>
  </frame>,
];
