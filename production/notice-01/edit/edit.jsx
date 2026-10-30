import { W } from "./words.js";
import { C, Hud } from "./lib.jsx";
import { City, RuleCard, Bedroom, Door, Peephole, shake } from "./sets.jsx";
import { Phone, Choice } from "./scenes2.jsx";
import { Captions } from "./captions.jsx";

const END = 35.5;
const S = [0, 4.1, 9.0, 12.7, 15.4, 19.6, 25.7, 30.25, END];
const RULE = [[14, "DO"], [15, "NOT"], [16, "OPEN"], [17, "YOUR"], [18, "DOOR"], [19, "FOR"], [20, "ANYONE"], [21, "WHO"], [22, "KNOWS"], [23, "YOUR"], [24, "NAME."]];

const Scene = ({ i, children, anim = [], hud }) => {
  const d = S[i + 1] - S[i];
  const fade = i === 0 ? [] : [{ property: "opacity", keyframes: [{ at: 0, value: 0 }, { at: 0.12, value: 1 }, { at: d, value: 1 }] }];
  return (
    <frame at={S[i]} duration={d} width={1080} height={1920} layout="none" origin="center" animate={fade}>
      <frame width={1080} height={1920} layout="none" origin="center" animate={anim.length ? anim : undefined}>{children}</frame>
      {hud ? <Hud time={hud} /> : null}
    </frame>
  );
};
const D = (i) => S[i + 1] - S[i];
const push = (i, a, b) => ({ property: "scale", from: a, to: b, at: 0, duration: D(i), easing: "linear" });

export default async ({ project }) => {
  const p = await project({ dir: ".", size: "1080x1920", fps: 30, background: C.night });
  const voice = await p.add("../mix.wav");
  p.compose(
    <frame width={1080} height={1920} layout="none">
      <Scene i={0}><City dur={D(0)} /></Scene>
      <Scene i={1} anim={[push(1, 1.0, 1.06)]} hud="3:00 AM"><RuleCard t0={S[1]} W={W} words={RULE} /></Scene>
      <Scene i={2} anim={[push(2, 1.0, 1.08), shake(11.95 - S[2]), shake(12.22 - S[2]), shake(12.49 - S[2])]} hud="3:00 AM">
        <Bedroom dur={D(2)} knocks={[11.95 - S[2], 12.22 - S[2], 12.49 - S[2]]} />
      </Scene>
      <Scene i={3} anim={[push(3, 1.0, 1.1), shake(14.95 - S[3], 10), shake(15.2 - S[3], 10)]} hud="3:00 AM"><Door dur={D(3)} /></Scene>
      <Scene i={4} hud="3:01 AM"><Peephole dur={D(4)} /></Scene>
      <Scene i={5} hud="3:01 AM"><Phone dur={D(5)} tTyping={21.2 - S[5]} tReply={23.1 - S[5]} /></Scene>
      <Scene i={6} hud="3:02 AM" anim={[push(6, 1.0, 1.22), { property: "offsetY", from: 0, to: -260, at: 0, duration: D(6), easing: "ease-in-out" }]}>
        <Door dur={D(6)} feet={{ flicker: 28.0 - S[6] }} />
      </Scene>
      <Scene i={7} hud="3:02 AM"><Choice dur={D(7)} tLine2={31.28 - S[7]} tButtons={32.2 - S[7]} tAsk={32.9 - S[7]} tKnock={34.1 - S[7]} /></Scene>
      <Captions W={W} end={END} />
    </frame>,
    { at: 0, dur: END }
  );
  p.cut(voice, { at: 0 });
};
