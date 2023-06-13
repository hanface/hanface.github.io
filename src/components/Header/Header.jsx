import "./header.css";

import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="80px"
        height="80px"
        viewBox="0 0 121.000000 152.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,152.000000) scale(0.100000,-0.100000)"
          fill="#35403a"
          stroke="none"
        >
          <path
            d="M591 1435 c-51 -36 -66 -57 -69 -98 -3 -36 23 -137 38 -147 5 -3 18
      -39 30 -80 11 -41 26 -83 31 -93 5 -9 17 -65 26 -122 15 -100 15 -107 -3 -146
      -11 -25 -54 -75 -112 -129 -95 -88 -194 -151 -325 -206 -155 -66 -229 -192
      -137 -236 30 -14 48 -15 122 -7 89 9 140 31 223 96 57 46 255 314 316 430 l39
      74 -1 207 c0 114 -4 221 -9 237 -5 17 -13 55 -18 87 -12 67 -53 133 -91 146
      -21 7 -33 5 -60 -13z"
          />
          <path
            d="M1135 1166 c-52 -23 -132 -113 -180 -201 -25 -47 -48 -93 -50 -103
      -2 -9 -10 -35 -18 -57 -12 -34 -18 -40 -40 -37 -34 3 -45 -27 -17 -48 23 -17
      23 -24 -5 -145 -29 -123 -5 -379 40 -424 13 -14 17 -14 31 0 14 14 13 22 -8
      80 -28 81 -34 250 -11 349 8 36 16 79 18 95 2 17 13 57 25 90 12 33 23 70 25
      82 4 29 80 171 107 200 18 19 22 20 35 7 26 -26 60 -27 93 -4 24 17 30 28 30
      59 0 24 -7 44 -18 54 -22 20 -19 20 -57 3z"
          />
        </g>
      </svg>
      <Nav />
    </header>
  );
}

export default Header;