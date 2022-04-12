import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={59} height={20} fill="red" {...props}>
    <Path
      d="M33.979 20a13.135 13.135 0 0 1-5.435-1.092l.715-4.337a8.034 8.034 0 0 0 4.693 1.354c2.037 0 3.252-.693 3.252-1.853 0-1.1-1.177-1.751-2.539-2.5A12.021 12.021 0 0 1 31.9 9.678 4.453 4.453 0 0 1 30.544 6.4a5.7 5.7 0 0 1 .924-3.238 6.154 6.154 0 0 1 2.212-1.95A10.971 10.971 0 0 1 38.607 0a13.5 13.5 0 0 1 4.329.842l-.687 4.15a8.342 8.342 0 0 0-3.861-.911 4.682 4.682 0 0 0-2.027.378A1.353 1.353 0 0 0 35.5 5.71c0 .868 1.084 1.477 2.339 2.184 1.951 1.1 4.38 2.465 4.38 5.492a5.879 5.879 0 0 1-2.89 5.121A10.369 10.369 0 0 1 33.979 20Zm12.913-.331h-5.019l7.18-17.884a2.245 2.245 0 0 1 2.223-1.44h3.869L59 19.667h-4.421l-.565-2.87H47.9l-1 2.87ZM51.811 5.6l-2.529 7.232h3.953ZM25.577 19.668h-4.814L23.772.345h4.815l-3.01 19.322Zm-11.343 0H9.219L5.038 2.885a7.329 7.329 0 0 0-.332-.2l-.258-.153c-.152-.088-.3-.172-.443-.249-.088-.048-.174-.093-.26-.138S3.561 2.044 3.47 2s-.164-.083-.267-.132c-.083-.041-.165-.079-.246-.117s-.173-.083-.257-.121l-.231-.1c-.166-.072-.3-.131-.438-.185L1.926 1.3l-.086-.034-.228-.086-.178-.067-.2-.071-.163-.055L.9.929.746.881A9.285 9.285 0 0 0 .523.813L.481.8.388.773.293.747.195.721.161.712.132.7.063.688H.044L.032.68A.288.288 0 0 1 0 .672L.089.345h7.587a2.1 2.1 0 0 1 2.284 1.74l1.62 8.689.544 2.861L16.713.345h5.181l-7.66 19.323Z"
      style={{
        fill: "#fff",
      }}
    />
  </Svg>
)

export default SvgComponent
