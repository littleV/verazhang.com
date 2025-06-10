"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const MAGIC_COLORS = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 0],
  [1, 0.5, 0],
  [0.163, 0.373, 0.6],
  [0.0, 0.66, 0.2],
  [0.5, 0.0, 0.5],
  [0.2, 0.094, 0.0],
];

const MAGIC_LINES = {
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

export default function Blog() {
  const { language } = useLanguage();
  const [whiteScale, setWhiteScale] = useState(0);
  const [chosenColor, setChosenColor] = useState([0, 0, 0]);
  const [chosenColorHex, setChosenColorHex] = useState("ffffff");
  const [clicked, setClicked] = useState(null);

  const point2lineDistance = (x, y, line, r) => {
    return (
      (line[0] * x + line[1] * y + line[2] * r) /
      Math.sqrt(line[0] * line[0] + line[1] * line[1])
    );
  };

  const getR = useCallback((iR, iY, iB, magic) => {
    magic = magic || MAGIC_COLORS;
    // red
    var x0 = cubicInt(iB, magic[0][0], magic[4][0]);
    var x1 = cubicInt(iB, magic[1][0], magic[5][0]);
    var x2 = cubicInt(iB, magic[2][0], magic[6][0]);
    var x3 = cubicInt(iB, magic[3][0], magic[7][0]);
    var y0 = cubicInt(iY, x0, x1);
    var y1 = cubicInt(iY, x2, x3);
    return cubicInt(iR, y0, y1);
  }, []);

  const getG = useCallback((iR, iY, iB, magic) => {
    magic = magic || MAGIC_COLORS;
    // green
    var x0 = cubicInt(iB, magic[0][1], magic[4][1]);
    var x1 = cubicInt(iB, magic[1][1], magic[5][1]);
    var x2 = cubicInt(iB, magic[2][1], magic[6][1]);
    var x3 = cubicInt(iB, magic[3][1], magic[7][1]);
    var y0 = cubicInt(iY, x0, x1);
    var y1 = cubicInt(iY, x2, x3);
    return cubicInt(iR, y0, y1);
  }, []);

  const getB = useCallback((iR, iY, iB, magic) => {
    magic = magic || MAGIC_COLORS;
    // blue
    var x0 = cubicInt(iB, magic[0][2], magic[4][2]);
    var x1 = cubicInt(iB, magic[1][2], magic[5][2]);
    var x2 = cubicInt(iB, magic[2][2], magic[6][2]);
    var x3 = cubicInt(iB, magic[3][2], magic[7][2]);
    var y0 = cubicInt(iY, x0, x1);
    var y1 = cubicInt(iY, x2, x3);
    return cubicInt(iR, y0, y1);
  }, []);

  const point2ryb = useCallback(
    (x, y, radius) => {
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
          var red = 255 - whiteScale;
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
          var yellow = 255 - whiteScale;
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
          var blue = 255 - whiteScale;
          var yellow = (blue_purple / (blue_purple + green_black)) * blue;
          var red = (blue_green / (blue_green + purple_black)) * blue;
          color = [red, yellow, blue];
        }
      }

      return color;
    },
    [whiteScale]
  );

  const d2h = (d) => {
    var hex = Math.round(d).toString(16);
    while (hex.length < 2) hex = "0" + hex;
    return hex;
  };

  const h2d = (h) => {
    return parseInt(h, 16);
  };

  const rxb2hex = useCallback((rxb) => {
    return d2h(rxb[0]) + d2h(rxb[1]) + d2h(rxb[2]);
  }, []);

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

  const ryb2rgb = useCallback(
    (color, limit, magic) => {
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
    },
    [getR, getG, getB]
  );

  const handleImageClick = (e) => {
    const x = e.nativeEvent.offsetX - 150;
    const y = 150 - e.nativeEvent.offsetY;

    setClicked([x, y]);
  };

  useEffect(() => {
    if (clicked != null) {
      const x = clicked[0];
      const y = clicked[1];
      const color = point2ryb(x, y, 140);
      setChosenColor(color);
      const hex = rxb2hex(ryb2rgb(color));
      setChosenColorHex(hex);
    }
  }, [clicked, whiteScale, point2ryb, rxb2hex, ryb2rgb]);

  const mixColors = () => {
    let red = chosenColor[0];
    let yellow = chosenColor[1];
    let blue = chosenColor[2];
    const white = whiteScale;
    if (white == 250 || (red == 0 && yellow == 0 && blue == 0)) {
      return (
        <div className="flex flex-col justify-center items-center mt-2">
          Use white only
        </div>
      );
    }
    const white_ratio = white / 256;
    red = Math.floor((1 - white_ratio) * red);
    yellow = Math.floor((1 - white_ratio) * yellow);
    blue = Math.floor((1 - white_ratio) * blue);
    const total = white + red + yellow + blue;
    const x_red = 0;
    const width_red = Math.floor((red / total) * 300);
    const x_yellow = Math.floor((red / total) * 300);
    const width_yellow = Math.floor((yellow / total) * 300);
    const x_blue = Math.floor(((red + yellow) / total) * 300);
    const width_blue = Math.floor((blue / total) * 300);
    const x_white = Math.floor(((red + yellow + blue) / total) * 300);
    const width_white = Math.floor((white / blue) * 300);
    return (
      <div className="flex flex-col justify-center items-center mt-2">
        {language == "English" ? "Ratio" : "比例"}
        <div>
          {red}:{yellow}:{blue}:{white}
        </div>
        <svg width="300" height="40">
          <rect
            x={x_red}
            y="0"
            width={width_red}
            height="40"
            fill="rgb(255,0,0)"
            stroke="none"
          />
          <rect
            x={x_yellow}
            y="0"
            width={width_yellow}
            height="40"
            fill="rgb(255,255,0)"
            stroke="none"
          />
          <rect
            x={x_blue}
            y="0"
            width={width_blue}
            height="40"
            fill="rgb(0,0,255)"
            stroke="none"
          />
          <rect
            x={x_white}
            y="0"
            width={width_white}
            height="40"
            fill="rgb(255,255,255)"
            stroke="none"
          />
          <rect
            x="0"
            y="0"
            width="300"
            height="40"
            fill="none"
            strokeWidth="1"
            stroke="rgb(0,0,0)"
          />
        </svg>
      </div>
    );
  };

  if (language === null) return null;
  return (
    <div className="flex flex-col items-center justify-start min-h-screen mt-20">
      {(() => {
        switch (whiteScale) {
          case 0:
            return (
              <div>
                <Image
                  src="/palette/0.png"
                  width={300}
                  height={300}
                  alt="0"
                  onClick={handleImageClick}
                  priority
                  // Prevent dragging
                  draggable={false}
                />
              </div>
            );
          case 50:
            return (
              <div>
                <Image
                  src="/palette/50.png"
                  width={300}
                  height={300}
                  alt="50"
                  onClick={handleImageClick}
                  priority
                  // Prevent dragging
                  draggable={false}
                />
              </div>
            );
          case 100:
            return (
              <div>
                <Image
                  src="/palette/100.png"
                  width={300}
                  height={300}
                  alt="100"
                  onClick={handleImageClick}
                  priority
                  // Prevent dragging
                  draggable={false}
                />
              </div>
            );
          case 150:
            return (
              <div>
                <Image
                  src="/palette/150.png"
                  width={300}
                  height={300}
                  alt="150"
                  onClick={handleImageClick}
                  priority
                  // Prevent dragging
                  draggable={false}
                />
              </div>
            );
          case 200:
            return (
              <div>
                <Image
                  src="/palette/200.png"
                  width={300}
                  height={300}
                  alt="200"
                  onClick={handleImageClick}
                  priority
                  // Prevent dragging
                  draggable={false}
                />
              </div>
            );
          case 250:
            return (
              <div>
                <Image
                  src="/palette/250.png"
                  width={300}
                  height={300}
                  alt="250"
                  onClick={handleImageClick}
                  priority
                  // Prevent dragging
                  draggable={false}
                />
              </div>
            );
          default:
            return <div>Unknown Error</div>;
        }
      })()}
      <div className="mt-8 w-full max-w-md mx-auto">
        <input
          id="scale-slider"
          type="range"
          min="0"
          max="250"
          step="50"
          value={whiteScale}
          onChange={(e) => {
            setWhiteScale(parseInt(e.target.value));
          }}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
      <div>
        {language == "English"
          ? "Chosen Color: #" + chosenColorHex
          : "选择颜色：#" + chosenColorHex}
      </div>
      <div
        className="mt-2 p-1 min-w-24"
        style={{ backgroundColor: "#" + chosenColorHex }}
      >
        <br />
      </div>
      <div>{mixColors()}</div>
    </div>
  );
}
