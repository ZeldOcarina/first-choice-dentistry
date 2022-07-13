import { createGlobalStyle } from "styled-components"

import lightFont from "./fonts/UniformProXcon-Thn.ttf"
import boldFont from "./fonts/UniformProXcon-Bld.ttf"

export default createGlobalStyle`
    @font-face {
    font-family: 'Uniform Pro Extra Condensed';
    src: url(${boldFont}) format('truetype');
    font-weight: bold;
    font-style: normal;
}
    @font-face {
    font-family: 'Uniform Pro Extra Condensed';
    src: url(${lightFont}) format('truetype');
    font-weight: light;
    font-style: normal;
}
`
