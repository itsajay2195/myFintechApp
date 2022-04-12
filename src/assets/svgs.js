import * as React from "react"
import Svg, { Defs, Path } from "react-native-svg"

export const SvgAccount = ({color}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={20.023} height={24} fill={color}>
      <Defs></Defs>
      <Path
        className="a"
        d="M9.86 11.547a5.6 5.6 0 0 0 4.091-1.691 5.58 5.58 0 0 0 1.692-4.083 5.581 5.581 0 0 0-1.7-4.082 5.793 5.793 0 0 0-8.181 0 5.581 5.581 0 0 0-1.7 4.082 5.58 5.58 0 0 0 1.7 4.082 5.605 5.605 0 0 0 4.098 1.692ZM19.975 18.462a14.244 14.244 0 0 0-.194-1.515 11.921 11.921 0 0 0-.373-1.523 7.517 7.517 0 0 0-.627-1.42 5.36 5.36 0 0 0-.945-1.23 4.168 4.168 0 0 0-1.358-.852 4.7 4.7 0 0 0-1.733-.313 1.76 1.76 0 0 0-.94.4c-.282.183-.611.4-.979.63a5.612 5.612 0 0 1-1.266.557 4.923 4.923 0 0 1-3.1 0 5.6 5.6 0 0 1-1.265-.557c-.364-.232-.694-.445-.98-.631a1.758 1.758 0 0 0-.939-.4 4.691 4.691 0 0 0-1.733.314 4.165 4.165 0 0 0-1.358.852 5.361 5.361 0 0 0-.945 1.23 7.532 7.532 0 0 0-.627 1.42 11.949 11.949 0 0 0-.373 1.523 14.193 14.193 0 0 0-.194 1.515 20.45 20.45 0 0 0-.048 1.416 3.978 3.978 0 0 0 1.186 3.014 4.264 4.264 0 0 0 3.05 1.111H15.79a4.263 4.263 0 0 0 3.05-1.111 3.976 3.976 0 0 0 1.184-3.012 20.914 20.914 0 0 0-.049-1.418Zm0 0"
      />
    </Svg>
)

export const SvgCard = ({color}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={color}>
      <Defs></Defs>
      <Path
        style={{
          fill: "transparent",
        }}
        d="M0 0h24v24H0z"
      />
      <Path
        className="b"
        d="M23.5 11H.5a.474.474 0 0 0-.5.5v7.053a2.485 2.485 0 0 0 2.5 2.519h19a2.485 2.485 0 0 0 2.5-2.519V11.5a.474.474 0 0 0-.5-.5Zm-20 4.03h4a.504.504 0 0 1 0 1.008h-4a.504.504 0 0 1 0-1.008Zm7 3.023h-7a.504.504 0 0 1 0-1.008h7a.504.504 0 0 1 0 1.008Zm8.5 0a1.68 1.68 0 0 1-1-.3 1.68 1.68 0 0 1-1 .3 2.015 2.015 0 0 1 0-4.03 1.68 1.68 0 0 1 1 .3 1.68 1.68 0 0 1 1-.3 2.015 2.015 0 0 1 0 4.03ZM21.5 3h-19C1.1 3 0 4.378 0 6.132v1.253c0 .376.2.626.5.626h23c.3 0 .5-.251.5-.626V6.132C24 4.378 22.9 3 21.5 3Z"
      />
    </Svg>
)

export const SvgCredit = ({color}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={25.5} height={25} fill={color}>
      <Path
        style={{
          fill: "transparent",
        }}
        d="M0 0h25v24H0z"
        transform="translate(.5 .499)"
      />
      <Path
        d="M12 24A12 12 0 0 1 3.515 3.516a12 12 0 0 1 16.97 16.971A11.922 11.922 0 0 1 12 24ZM10.453 9.746v8.837a1.162 1.162 0 0 0 1.161 1.161h.775a1.162 1.162 0 0 0 1.161-1.161V9.746l3.5 3.652a1.159 1.159 0 0 0 1.659.021l.527-.533a1.161 1.161 0 0 0 .342-.827 1.142 1.142 0 0 0-.342-.812l-6.413-6.422a1.159 1.159 0 0 0-1.64 0l-6.426 6.422a1.155 1.155 0 0 0-.342.824 1.142 1.142 0 0 0 .342.815l.527.533a1.166 1.166 0 0 0 .823.339 1.151 1.151 0 0 0 .842-.36l3.5-3.65Z"
        transform="translate(.5 .499)"
        style={{
          fill: color,
          stroke: "transparent",
          strokeMiterlimit: 10,
        }}
      />
    </Svg>
)

export const SvgDeactivate = ({color}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill={color}>
      <G transform="translate(213 -305)">
        <Circle
          cx={16}
          cy={16}
          r={16}
          transform="translate(-213 305)"
          style={{
            fill: "#325baf",
          }}
        />
        <Path
          d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8ZM2 8a5.961 5.961 0 0 1 1.115-3.471l8.356 8.356A5.99 5.99 0 0 1 2 8Zm10.885 3.471L4.529 3.115a5.991 5.991 0 0 1 8.356 8.356Z"
          transform="translate(-205 313)"
          style={{
            fill: "#9ac0fa",
          }}
        />
        <Path
          transform="rotate(45 -481.81 -83.958)"
          style={{
            fill: "#f1f3f4",
          }}
          d="M0 0h11.8v2H0z"
        />
      </G>
    </Svg>
)

export const SvgFreeze = ({color}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill={color}>
      <Defs>
        <ClipPath id="a">
          <Path
            transform="translate(-209 321)"
            style={{
              fill: "#fff",
            }}
            d="M0 0h25v8H0z"
          />
        </ClipPath>
      </Defs>
      <G transform="translate(213 -305)">
        <Circle
          cx={16}
          cy={16}
          r={16}
          transform="translate(-213 305)"
          style={{
            fill: "#325baf",
          }}
        />
        <Path
          d="M17 7.437h-2.264L15.759 5.9l-1.768-1.175-1.809 2.712h-2.62V4.376l2.6-1.3-.949-1.9L9.562 2V0H7.437v2l-1.65-.824-.949 1.9 2.6 1.3v3.061h-2.62L3.009 4.725 1.241 5.9l1.023 1.537H0v2.125h2.265L1.241 11.1l1.768 1.179 1.81-2.716h2.619v2.619l-2.715 1.811L5.9 15.761l1.535-1.024V17h2.127v-2.264l1.538 1.025 1.18-1.768-2.718-1.812V9.563h2.619l1.81 2.716 1.768-1.179-1.024-1.538H17Z"
          transform="rotate(45 -471.51 -83.62)"
          style={{
            fill: "#9ac0fa",
          }}
        />
        <G
          style={{
            clipPath: "url(#a)",
          }}
        >
          <Path
            d="M17 7.437h-2.264L15.759 5.9l-1.768-1.175-1.809 2.712h-2.62V4.376l2.6-1.3-.949-1.9L9.562 2V0H7.437v2l-1.65-.824-.949 1.9 2.6 1.3v3.061h-2.62L3.009 4.725 1.241 5.9l1.023 1.537H0v2.125h2.265L1.241 11.1l1.768 1.179 1.81-2.716h2.619v2.619l-2.715 1.811L5.9 15.761l1.535-1.024V17h2.127v-2.264l1.538 1.025 1.18-1.768-2.718-1.812V9.563h2.619l1.81 2.716 1.768-1.179-1.024-1.538H17Z"
            transform="rotate(45 -471.51 -83.62)"
            style={{
              fill: "#f1f3f4",
            }}
          />
        </G>
      </G>
    </Svg>
)

export const SvgInsight = ({color}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill={color}>
      <G transform="translate(-.094)">
        <Circle
          cx={16}
          cy={16}
          r={16}
          transform="translate(.094)"
          style={{
            fill: "#325baf",
          }}
        />
        <Path
          d="m8.589 5.246 1.431-1.4v6.394a1.149 1.149 0 0 0 2.3 0V3.844l1.43 1.4a1.166 1.166 0 0 0 1.625 0 1.11 1.11 0 0 0 0-1.592L11.981.33a1.166 1.166 0 0 0-1.625 0L6.964 3.653a1.11 1.11 0 0 0 0 1.592 1.167 1.167 0 0 0 1.625.001Z"
          transform="translate(4.961 7.899)"
          style={{
            stroke: "#325baf",
            strokeWidth: ".1px",
            fill: "#9ac0fa",
          }}
        />
        <Path
          d="M17.954 11.754a2.757 2.757 0 0 1-2.773 2.734H7.66a2.757 2.757 0 0 1-2.773-2.734 1.142 1.142 0 0 1 2.284 0 .487.487 0 0 0 .489.482h7.521a.487.487 0 0 0 .489-.482 1.142 1.142 0 0 1 2.284 0Z"
          transform="translate(4.709 9.667)"
          style={{
            fill: "#f1f3f4",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            stroke: "#325baf",
            strokeWidth: ".1px",
          }}
        />
      </G>
    </Svg>
)

export const SvgLimit = ({color}) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill={color}>
    <Defs></Defs>
    <G transform="translate(213 -305)">
      <Circle
        cx={16}
        cy={16}
        r={16}
        transform="translate(-213 305)"
        style={{
          fill: "#325baf",
        }}
      />
      <Path
        className="b"
        d="M-200.827 317.349a.219.219 0 0 0-.054-.159l-1.737-1.977a.219.219 0 0 0-.31-.02 9.039 9.039 0 0 0-1.97 2.46.219.219 0 0 0 .087.3l2.309 1.262a.219.219 0 0 0 .3-.087 5.976 5.976 0 0 1 1.3-1.626.219.219 0 0 0 .075-.153ZM-200.074 316.629a.219.219 0 0 0 .3.091 5.905 5.905 0 0 1 1.979-.637.219.219 0 0 0 .188-.247l-.354-2.608a.22.22 0 0 0-.247-.188 8.964 8.964 0 0 0-3 .967.219.219 0 0 0-.091.3ZM-202.877 320.124l-2.54-.689a.219.219 0 0 0-.269.154 9.059 9.059 0 0 0-.314 2.371c0 .138 0 .275.01.422a.219.219 0 0 0 .219.209h.01l2.629-.121a.219.219 0 0 0 .209-.229c0-.1-.007-.19-.007-.28a5.986 5.986 0 0 1 .208-1.567.219.219 0 0 0-.155-.27ZM-193.093 313.851a8.969 8.969 0 0 0-3.039-.85.219.219 0 0 0-.239.2l-.254 2.619a.219.219 0 0 0 .2.239 5.908 5.908 0 0 1 2 .56.219.219 0 0 0 .293-.1l1.143-2.371a.219.219 0 0 0-.104-.297ZM-189.25 317.519a.219.219 0 0 0-.024-.166 9.042 9.042 0 0 0-2.062-2.382.219.219 0 0 0-.308.032l-1.661 2.042a.219.219 0 0 0 .032.309 5.978 5.978 0 0 1 1.364 1.576.219.219 0 0 0 .3.076l2.259-1.35a.22.22 0 0 0 .1-.137ZM-188.412 319.257a.219.219 0 0 0-.275-.144l-2.511.787a.219.219 0 0 0-.144.275 5.968 5.968 0 0 1 .272 1.786c0 .09 0 .181-.007.28a.219.219 0 0 0 .209.229l2.629.121h.01a.219.219 0 0 0 .219-.209c.007-.146.01-.284.01-.422a9.035 9.035 0 0 0-.412-2.703Z"
      />
      <Path
        d="M173.745 310.747h-.113l-3.562-2.1a.226.226 0 0 0-.314.3l1.943 3.642a2.093 2.093 0 0 0-.011.212 2.057 2.057 0 1 0 2.057-2.057Z"
        transform="rotate(10.02 -84.976 -1791.345)"
        style={{
          fill: "#f1f3f4",
        }}
      />
    </G>
  </Svg>
)

export const SvgLogo = ({color}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={25.595} height={25} fill={color}>
      <Defs></Defs>
      <Path
        className="a"
        d="M25.073 15.759c0 .071 0 .142-.073.142a.159.159 0 0 1-.147-.142c-.22-.284-11.388-12.08-11.9-12.506-.22-.213-.294-.142-.514.071C12.363 3.395.754 15.617.607 15.83c-.073.07-.147.07-.147-.071a11.641 11.641 0 0 1-.441-3.908 11.032 11.032 0 0 1 1.616-5.4A12.217 12.217 0 0 1 10.011.339a12.62 12.62 0 0 1 11.977 3.482 11.636 11.636 0 0 1 3.453 6.68 9.408 9.408 0 0 1 .147 2.061 16.11 16.11 0 0 1-.515 3.197Z"
      />
      <Path
        className="a"
        d="M3.767 21.373c-.073-.071-.147-.142 0-.284s8.743-9.167 8.963-9.38c.073-.071.147-.071.147 0 .294.355 8.743 9.309 8.964 9.451.073.071.073.142-.073.142a9.965 9.965 0 0 1-1.617 1.354 12.563 12.563 0 0 1-6.319 2.274 6.53 6.53 0 0 1-1.176.071 12.7 12.7 0 0 1-8.889-3.628Z"
      />
    </Svg>
  )
  
export const SvgNewCard = ({color}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill={color}>
      <Defs></Defs>
      <G transform="translate(213 -305)">
        <Circle
          cx={16}
          cy={16}
          r={16}
          transform="translate(-213 305)"
          style={{
            fill: "#325baf",
          }}
        />
        <Path
          d="M387.881 300.224h-.79v-.79a.766.766 0 1 0-1.532 0v.79h-.79a.766.766 0 0 0 0 1.532h.79v.79a.766.766 0 0 0 1.532 0v-.79h.79a.766.766 0 0 0 0-1.532Z"
          transform="translate(-576.6 24.064)"
          style={{
            fill: "#f1f3f4",
          }}
        />
        <Path
          className="c"
          d="M-189.509 317.518a2.407 2.407 0 0 0-2.281-2.517h-10.929a2.407 2.407 0 0 0-2.281 2.517.2.2 0 0 0 .187.207h15.113a.2.2 0 0 0 .191-.207ZM-189.509 319.413v.936a.415.415 0 0 1-.424.436 4.1 4.1 0 0 0-4.138 4.567.422.422 0 0 1-.4.468h-8.248a2.407 2.407 0 0 1-2.281-2.515v-3.89a.2.2 0 0 1 .187-.21h15.113a.2.2 0 0 1 .191.208Z"
        />
      </G>
    </Svg>
)

export const SvgPayment = ({color}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={color}>
      <Path
        style={{
          fill: "transparent",
        }}
        d="M0 0h24v24H0z"
      />
      <Path
        d="M35.169 10A11.837 11.837 0 0 0 23.5 22a11.838 11.838 0 0 0 11.667 12 11.33 11.33 0 0 0 6.651-2.2c.5-.473.811-.529.811-1.041l.007-.1a1.075 1.075 0 0 0-1.06-1.09 1.026 1.026 0 0 0-.764.343 9.322 9.322 0 0 1-5.633 1.9 9.7 9.7 0 0 1-9.563-9.833 9.567 9.567 0 1 1 19.127 0 10.009 10.009 0 0 1-.921 4.19 9.724 9.724 0 0 0-.49 1.185l-.007.1a1.078 1.078 0 0 0 1.063 1.092 1.054 1.054 0 0 0 1-.776A12.189 12.189 0 0 0 46.836 22a11.835 11.835 0 0 0-11.667-12Zm-6.516 10.7a1.045 1.045 0 0 0 .3.676 1.026 1.026 0 0 0 .676.3.791.791 0 0 0 .108 0h10.8a1.033 1.033 0 1 0 0-2.067l-8.437.012 1.222-1.234a1 1 0 0 0-1.413-1.413l-2.956 2.983a.988.988 0 0 0-.289.632h-.007a.654.654 0 0 0 0 .11Zm8.247 6.891a1 1 0 0 0 1.416 0l2.958-2.978a1 1 0 0 0 .289-.629h.007v-.108a1.039 1.039 0 0 0-.3-.673 1.05 1.05 0 0 0-.676-.3.791.791 0 0 0-.108 0h-10.8a1.031 1.031 0 1 0 0 2.062l8.439-.012-1.222 1.237a.987.987 0 0 0-.003 1.401Z"
        transform="translate(-23.169 -10)"
        style={{
          fill: color,
        }}
      />
    </Svg>
)

export const SvgRemove = ({color}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill={color}>
      <Path
        d="M0 0h16v16H0Z"
        style={{
          fill: "none",
        }}
      />
      <Path
        d="M7.333 10a7.822 7.822 0 0 1-4.484-1.4A7.9 7.9 0 0 1 0 5a7.879 7.879 0 0 1 14.666 0 7.9 7.9 0 0 1-2.848 3.6A7.824 7.824 0 0 1 7.333 10Zm0-8.334A3.333 3.333 0 1 0 10.667 5a3.337 3.337 0 0 0-3.334-3.332Z"
        transform="translate(.667 2.999)"
        style={{
          stroke: "transparent",
          strokeMiterlimit: 10,
          fill: "#01d167",
        }}
      />
      <Path
        d="M2 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z"
        transform="translate(6 6)"
        style={{
          fill: "#01d167",
        }}
      />
    </Svg>
)

export const SvgShow = ({color}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill={color}>
      <Path
        d="M0 0h16v16H0Z"
        style={{
          fill: "none",
        }}
      />
      <Path
        d="M7.333 10a7.822 7.822 0 0 1-4.484-1.4A7.9 7.9 0 0 1 0 5a7.879 7.879 0 0 1 14.666 0 7.9 7.9 0 0 1-2.848 3.6A7.824 7.824 0 0 1 7.333 10Zm0-8.334A3.333 3.333 0 1 0 10.667 5a3.337 3.337 0 0 0-3.334-3.332Z"
        transform="translate(.667 2.999)"
        style={{
          stroke: "transparent",
          strokeMiterlimit: 10,
          fill: "#01d167",
        }}
      />
      <Path
        d="M2 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z"
        transform="translate(6 6)"
        style={{
          fill: "#01d167",
        }}
      />
      <Path
        transform="translate(2.269 2.269)"
        style={{
          stroke: "#01d167",
          strokeLinecap: "round",
          strokeWidth: 2,
          fill: "none",
        }}
        d="M10.907 0 0 10.907"
      />
    </Svg>
)

export const SvgTransfer = ({color}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill={color}>
      <Defs></Defs>
      <G transform="translate(213 -305)">
        <Circle
          cx={16}
          cy={16}
          r={16}
          transform="translate(-213 305)"
          style={{
            fill: "#325baf",
          }}
        />
        <Path
          className="b"
          d="M-200.827 317.349a.219.219 0 0 0-.054-.159l-1.737-1.977a.219.219 0 0 0-.31-.02 9.039 9.039 0 0 0-1.97 2.46.219.219 0 0 0 .087.3l2.309 1.262a.219.219 0 0 0 .3-.087 5.976 5.976 0 0 1 1.3-1.626.219.219 0 0 0 .075-.153ZM-200.074 316.629a.219.219 0 0 0 .3.091 5.905 5.905 0 0 1 1.979-.637.219.219 0 0 0 .188-.247l-.354-2.608a.22.22 0 0 0-.247-.188 8.964 8.964 0 0 0-3 .967.219.219 0 0 0-.091.3ZM-202.877 320.124l-2.54-.689a.219.219 0 0 0-.269.154 9.059 9.059 0 0 0-.314 2.371c0 .138 0 .275.01.422a.219.219 0 0 0 .219.209h.01l2.629-.121a.219.219 0 0 0 .209-.229c0-.1-.007-.19-.007-.28a5.986 5.986 0 0 1 .208-1.567.219.219 0 0 0-.155-.27ZM-193.093 313.851a8.969 8.969 0 0 0-3.039-.85.219.219 0 0 0-.239.2l-.254 2.619a.219.219 0 0 0 .2.239 5.908 5.908 0 0 1 2 .56.219.219 0 0 0 .293-.1l1.143-2.371a.219.219 0 0 0-.104-.297ZM-189.25 317.519a.219.219 0 0 0-.024-.166 9.042 9.042 0 0 0-2.062-2.382.219.219 0 0 0-.308.032l-1.661 2.042a.219.219 0 0 0 .032.309 5.978 5.978 0 0 1 1.364 1.576.219.219 0 0 0 .3.076l2.259-1.35a.22.22 0 0 0 .1-.137ZM-188.412 319.257a.219.219 0 0 0-.275-.144l-2.511.787a.219.219 0 0 0-.144.275 5.968 5.968 0 0 1 .272 1.786c0 .09 0 .181-.007.28a.219.219 0 0 0 .209.229l2.629.121h.01a.219.219 0 0 0 .219-.209c.007-.146.01-.284.01-.422a9.035 9.035 0 0 0-.412-2.703Z"
        />
        <Path
          d="M173.745 310.747h-.113l-3.562-2.1a.226.226 0 0 0-.314.3l1.943 3.642a2.093 2.093 0 0 0-.011.212 2.057 2.057 0 1 0 2.057-2.057Z"
          transform="rotate(10.02 -84.976 -1791.345)"
          style={{
            fill: "#f1f3f4",
          }}
        />
      </G>
    </Svg>
  )
  