// Confetti placements per section, shared by both sites (same skeleton).
// wide.x = distance from the content column into the gutter.
// narrow = position inside the section's top padding band (below 1440px).
export type Shape = "sparkle" | "ring" | "squiggle" | "zigzag" | "cross" | "triangle" | "dots" | "arc" | "disc" | "capsule";
export type Motion = "spin" | "bob" | "sway" | "drift" | "pulse";
export interface Pos { top: string; x: string }
export interface Piece {
  shape: Shape;
  size: number;
  side: "left" | "right";
  wide: Pos;
  narrow?: Pos;
  motion: Motion;
  muted?: boolean;
  fill?: boolean;
}

export const confetti: Record<string, Piece[]> = {
  hero: [
    { shape: "sparkle", size: 52, side: "right", wide: { top: "14%", x: "24px" }, narrow: { top: "16px", x: "8%" }, motion: "spin" },
    { shape: "ring", size: 40, side: "right", wide: { top: "48%", x: "64px" }, motion: "bob" },
    { shape: "squiggle", size: 84, side: "right", wide: { top: "76%", x: "16px" }, motion: "sway" },
    { shape: "dots", size: 34, side: "left", wide: { top: "20%", x: "40px" }, narrow: { top: "16px", x: "22%" }, motion: "drift", muted: true },
    { shape: "triangle", size: 30, side: "left", wide: { top: "62%", x: "60px" }, motion: "sway" },
  ],
  what: [
    { shape: "zigzag", size: 76, side: "left", wide: { top: "18%", x: "24px" }, narrow: { top: "16px", x: "6%" }, motion: "drift" },
    { shape: "disc", size: 18, side: "right", wide: { top: "30%", x: "56px" }, narrow: { top: "16px", x: "14%" }, motion: "pulse" },
    { shape: "cross", size: 28, side: "right", wide: { top: "70%", x: "28px" }, motion: "spin", muted: true },
  ],
  skills: [
    { shape: "arc", size: 54, side: "right", wide: { top: "6%", x: "30px" }, narrow: { top: "16px", x: "10%" }, motion: "sway" },
    { shape: "sparkle", size: 30, side: "left", wide: { top: "28%", x: "48px" }, motion: "spin" },
    { shape: "capsule", size: 52, side: "right", wide: { top: "52%", x: "40px" }, motion: "bob", muted: true },
    { shape: "ring", size: 30, side: "left", wide: { top: "74%", x: "28px" }, motion: "drift" },
    { shape: "dots", size: 30, side: "right", wide: { top: "90%", x: "60px" }, motion: "pulse" },
  ],
  agents: [
    { shape: "triangle", size: 32, side: "right", wide: { top: "22%", x: "44px" }, narrow: { top: "16px", x: "12%" }, motion: "spin" },
    { shape: "squiggle", size: 70, side: "left", wide: { top: "60%", x: "20px" }, motion: "sway", muted: true },
  ],
  faq: [
    { shape: "sparkle", size: 40, side: "left", wide: { top: "56%", x: "36px" }, narrow: { top: "16px", x: "70%" }, motion: "spin" },
    { shape: "disc", size: 16, side: "right", wide: { top: "18%", x: "60px" }, motion: "bob" },
    { shape: "zigzag", size: 64, side: "right", wide: { top: "72%", x: "22px" }, motion: "drift", muted: true },
  ],
  footer: [
    { shape: "ring", size: 44, side: "left", wide: { top: "10%", x: "40px" }, narrow: { top: "16px", x: "75%" }, motion: "bob" },
    { shape: "sparkle", size: 34, side: "right", wide: { top: "14%", x: "50px" }, motion: "spin" },
    { shape: "capsule", size: 46, side: "right", wide: { top: "64%", x: "24px" }, motion: "sway", muted: true },
  ],
};
