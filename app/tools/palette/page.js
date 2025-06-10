"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Blog() {
  const { language } = useLanguage();
  MAGIC_COLORS = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 0],
    [1, 0.5, 0],
    [0.163, 0.373, 0.6],
    [0.0, 0.66, 0.2],
    [0.5, 0.0, 0.5],
    [0.2, 0.094, 0.0],
  ];

  MAGIC_LINES = {
    red_orange: [1, Math.sqrt(3), -Math.sqrt(3)],
    red_purple: [1, -Math.sqrt(3), Math.sqrt(3)],
    orange_black: [1, -Math.sqrt(3), 0],
    yellow_orange: [1, 0, -Math.sqrt(3) / 2],
    yellow_green: [1, -Math.sqrt(3), -Math.sqrt(3)],
    green_black: [1, 0, 0],
    blue_green: [1, Math.sqrt(3), Math.sqrt(3)],
    blue_purple: [1, 0, Math.sqrt(3) / 2],
    purple_black: [1, Math.sqrt(3), 0],
  };

  const point2lineDistance = (x, y, line, r) => {
    return (
      (line[0] * x + line[1] * y + line[2] * r) /
      Math.sqrt(line[0] * line[0] + line[1] * line[1])
    );
  };

  const point2ryb = (x, y, radius) => {
    var color = [0, 0, 0];
    if (x == 0 && y == 0) {
      color = [255, 255, 255];
    } else {
      if (
        point2lineDistance(x, y, MAGIC_LINES.red_orange, radius) <= 0 &&
        point2lineDistance(x, y, MAGIC_LINES.red_purple, radius) >= 0 &&
        point2lineDistance(x, y, MAGIC_LINES.orange_black, radius) < 0 &&
        point2lineDistance(x, y, MAGIC_LINES.purple_black, radius) >= 0
      ) {
        var red_orange = -point2lineDistance(
          x,
          y,
          MAGIC_LINES.red_orange,
          radius
        );
        var purple_black = point2lineDistance(
          x,
          y,
          MAGIC_LINES.purple_black,
          radius
        );
        var red_purple = point2lineDistance(
          x,
          y,
          MAGIC_LINES.red_purple,
          radius
        );
        var orange_black = -point2lineDistance(
          x,
          y,
          MAGIC_LINES.orange_black,
          radius
        );
        var red = 255 - state.white_scale;
        var yellow = (red_purple / (red_purple + orange_black)) * red;
        var blue = (red_orange / (red_orange + purple_black)) * red;
        color = [red, yellow, blue];
      } else if (
        point2lineDistance(x, y, MAGIC_LINES.orange_black, radius) >= 0 &&
        point2lineDistance(x, y, MAGIC_LINES.yellow_orange, radius) <= 0 &&
        point2lineDistance(x, y, MAGIC_LINES.yellow_green, radius) <= 0 &&
        point2lineDistance(x, y, MAGIC_LINES.green_black, radius) > 0
      ) {
        var orange_black = point2lineDistance(
          x,
          y,
          MAGIC_LINES.orange_black,
          radius
        );
        var yellow_orange = -point2lineDistance(
          x,
          y,
          MAGIC_LINES.yellow_orange,
          radius
        );
        var yellow_green = -point2lineDistance(
          x,
          y,
          MAGIC_LINES.yellow_green,
          radius
        );
        var green_black = point2lineDistance(
          x,
          y,
          MAGIC_LINES.green_black,
          radius
        );
        var yellow = 255 - state.white_scale;
        var red = (yellow_green / (yellow_green + orange_black)) * yellow;
        var blue = (yellow_orange / (yellow_orange + green_black)) * yellow;
        color = [red, yellow, blue];
      } else if (
        point2lineDistance(x, y, MAGIC_LINES.green_black, radius) <= 0 &&
        point2lineDistance(x, y, MAGIC_LINES.blue_green, radius) >= 0 &&
        point2lineDistance(x, y, MAGIC_LINES.blue_purple, radius) >= 0 &&
        point2lineDistance(x, y, MAGIC_LINES.purple_black, radius) < 0
      ) {
        var blue_purple = point2lineDistance(
          x,
          y,
          MAGIC_LINES.blue_purple,
          radius
        );
        var green_black = -point2lineDistance(
          x,
          y,
          MAGIC_LINES.green_black,
          radius
        );
        var blue_green = point2lineDistance(
          x,
          y,
          MAGIC_LINES.blue_green,
          radius
        );
        var purple_black = -point2lineDistance(
          x,
          y,
          MAGIC_LINES.purple_black,
          radius
        );
        var blue = 255 - state.white_scale;
        var yellow = (blue_purple / (blue_purple + green_black)) * blue;
        var red = (blue_green / (blue_green + purple_black)) * blue;
        color = [red, yellow, blue];
      }
    }

    return color;
  };

  const d2h = (d) => {
    var hex = Math.round(d).toString(16);
    while (hex.length < 2) hex = "0" + hex;
    return hex;
  };

  const h2d = (h) => {
    return parseInt(h, 16);
  };

  const rxb2hex = (rxb) => {
    return d2h(rxb[0]) + d2h(rxb[1]) + d2h(rxb[2]);
  };

  const hex2rxb = (hex) => {
    if (hex.charAt(0) === "#") hex = hex.substr(1);
    var r = hex.substr(0, 2);
    var g = hex.substr(2, 2);
    var b = hex.substr(4, 2);
    return [h2d(r), h2d(g), h2d(b)];
  };

  const cubicInt = (t, A, B) => {
    var weight = t * t * (3 - 2 * t);
    return A + weight * (B - A);
  };

  const getR = (iR, iY, iB, magic) => {
    magic = magic || MAGIC_COLORS;
    // red
    var x0 = cubicInt(iB, magic[0][0], magic[4][0]);
    var x1 = cubicInt(iB, magic[1][0], magic[5][0]);
    var x2 = cubicInt(iB, magic[2][0], magic[6][0]);
    var x3 = cubicInt(iB, magic[3][0], magic[7][0]);
    var y0 = cubicInt(iY, x0, x1);
    var y1 = cubicInt(iY, x2, x3);
    return cubicInt(iR, y0, y1);
  };

  const getG = (iR, iY, iB, magic) => {
    magic = magic || MAGIC_COLORS;
    // green
    var x0 = cubicInt(iB, magic[0][1], magic[4][1]);
    var x1 = cubicInt(iB, magic[1][1], magic[5][1]);
    var x2 = cubicInt(iB, magic[2][1], magic[6][1]);
    var x3 = cubicInt(iB, magic[3][1], magic[7][1]);
    var y0 = cubicInt(iY, x0, x1);
    var y1 = cubicInt(iY, x2, x3);
    return cubicInt(iR, y0, y1);
  };

  const getB = (iR, iY, iB, magic) => {
    magic = magic || MAGIC_COLORS;
    // blue
    var x0 = cubicInt(iB, magic[0][2], magic[4][2]);
    var x1 = cubicInt(iB, magic[1][2], magic[5][2]);
    var x2 = cubicInt(iB, magic[2][2], magic[6][2]);
    var x3 = cubicInt(iB, magic[3][2], magic[7][2]);
    var y0 = cubicInt(iY, x0, x1);
    var y1 = cubicInt(iY, x2, x3);
    return cubicInt(iR, y0, y1);
  };

  const ryb2rgb = (color, limit, magic) => {
    limit = limit || 255;
    magic = magic || MAGIC_COLORS;
    var R = color[0] / limit;
    var Y = color[1] / limit;
    var B = color[2] / limit;
    var R1 = getR(R, Y, B, magic);
    var G1 = getG(R, Y, B, magic);
    var B1 = getB(R, Y, B, magic);
    return [
      Math.ceil(R1 * limit),
      Math.ceil(G1 * limit),
      Math.ceil(B1 * limit),
    ];
  };
  if (language === null) return null;
  return (
    <div className="flex flex-col items-center justify-start min-h-screen mt-20">
      hello
    </div>
  );
}
