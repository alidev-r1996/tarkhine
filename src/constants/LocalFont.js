import LocalFont from "next/font/local";

const estedad = LocalFont({
  src: [
    {
      style: "normal",
      weight: "100",
      path: "../../public/fonts/Estedad/Estedad-FD-Thin.woff2",
    },
    {
      style: "normal",
      weight: "200",
      path: "../../public/fonts/Estedad/Estedad-FD-ExtraLight.woff2",
    },
    {
      style: "normal",
      weight: "300",
      path: "../../public/fonts/Estedad/Estedad-FD-Light.woff2",
    },
    {
      style: "normal",
      weight: "400",
      path: "../../public/fonts/Estedad/Estedad-FD-Regular.woff2",
    },
    {
      style: "normal",
      weight: "500",
      path: "../../public/fonts/Estedad/Estedad-FD-Medium.woff2",
    },
    {
      style: "normal",
      weight: "600",
      path: "../../public/fonts/Estedad/Estedad-FD-SemiBold.woff2",
    },
    {
      style: "normal",
      weight: "700",
      path: "../../public/fonts/Estedad/Estedad-FD-Bold.woff2",
    },
    {
      style: "normal",
      weight: "800",
      path: "../../public/fonts/Estedad/Estedad-FD-ExtraBold.woff2",
    },
    {
      style: "normal",
      weight: "900",
      path: "../../public/fonts/Estedad/Estedad-FD-Black.woff2",
    },
  ],
  variable: "--font-estedad",
});

export default estedad;



