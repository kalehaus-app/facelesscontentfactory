import { C } from "./lib.jsx";
// [firstIdx, lastIdx, display words[], highlight positions, color, y]
export const GROUPS = [
  [0, 2, ["AT", "3", "A.M."], [1, 2]],
  [3, 6, ["EVERY", "PHONE", "ON", "EARTH"], [3]],
  [7, 10, ["GOT", "THE", "SAME", "MESSAGE"], [3]],
  [25, 28, ["MIA", "READ", "IT", "TWICE"], [0]],
  [29, 31, ["THEN", "SOMEONE", "KNOCKED"], [2]],
  [32, 36, ["“MIA?", "IT'S", "LEO.", "OPEN", "UP.”"], [2]],
  [37, 40, ["HER", "BROTHER.", "HIS", "VOICE."], [1]],
  [41, 46, ["HIS", "GREEN", "JACKET", "IN", "THE", "PEEPHOLE"], [1, 2]],
  [47, 50, ["THEN", "HER", "PHONE", "BUZZED"], [3], C.yellow, 1580],
  [51, 54, ["A", "TEXT", "FROM", "LEO"], [3], C.yellow, 1580],
  [62, 64, ["THE", "KNOCKING", "STOPPED"], [2]],
  [65, 69, ["“MIA...", "I", "KNOW", "YOU'RE", "AWAKE.”"], [4], C.red],
];
export const Captions = ({ W, end }) => GROUPS.map(([a, b, disp, hl, acc = C.yellow, y = 1460], gi) => {
  const t0 = Math.max(0, W[a][0] - 0.06);
  const next = gi + 1 < GROUPS.length ? Math.max(0, W[GROUPS[gi + 1][0]][0] - 0.06) : end;
  const t1 = Math.min(next, W[b][1] + 0.9);
  const d = t1 - t0;
  const idx = disp.map((_, k) => Math.min(a + k, b));
  return (
    <frame at={t0} duration={d} width={1080} height={1920} layout="none"
      animate={[{ property: "opacity", keyframes: [{ at: 0, value: 0 }, { at: 0.08, value: 1 }, { at: d, value: 1 }] }]}>
      <row x={60} y={y} width={960} gap={20} rowGap={4} wrap={true} justify="center">
        {disp.map((w, k) => (
          <text fontFamily="Montserrat" fontWeight={800} fontSize={74} color={hl.includes(k) ? acc : C.white}
            strokeColor="#000000" strokeWidth={6} shadow={{ x: 0, y: 6, blur: 18, color: "#000000CC" }}
            animate={[{ property: "opacity", keyframes: [{ at: 0, value: 0.35, easing: "hold" }, { at: Math.max(0.01, W[idx[k]][0] - t0), value: 1 }, { at: d, value: 1 }] }]}>{w}</text>
        ))}
      </row>
    </frame>
  );
});
