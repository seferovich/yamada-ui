import type { ComponentMultiStyle } from "@yamada-ui/core"

export const AreaChart: ComponentMultiStyle = {
  baseStyle: {
    container: {},
    areaChart: {},
    referenceLine: {
      // strokeWidth: 1, //効かない
      fontSize: "xs",
      fillOpacity: 1,
    },
    grid: {
      strokeWidth: 1,
      // strokeDasharray:"5 5" //こっちが優先されちゃう
    },
    xAxis: {
      fontSize: "xs",
    },
    yAxis: {
      fontSize: "xs",
    },
    area: {},
    dot: {
      // fill: "white", //効かない
      // r: "4", //効かない
      // strokeWidth: 2, //効かない
    },
    activeDot: {
      // fill: "white", //こっちが優先される
      // r: "4", //こっちが優先される
      // strokeWidth: 2, //こっちが優先される
    },
    legend: {
      justifyContent: "flex-end",
      display: "flex",
      marginY: 4,
    },
    legendItem: {
      display: "flex",
      alignItems: "center",
      gap: 2,
      paddingX: 3,
      paddingY: 1,
      rounded: 5,
    },
    tooltip: {
      border: "solid",
      borderWidth: 0.2,
      borderColor: ["blackAlpha.400", "whiteAlpha.400"],
      bgColor: ["white", "neutral.900"],
      rounded: 3,
      paddingX: 5,
      paddingY: 3,
    },
    tooltipTitle: {
      marginBottom: 2,
      fontSize: "md",
      fontWeight: 500,
    },
    tooltipLabel: {
      color: ["black", "gray.200"],
      fontSize: "md",
    },
    tooltipValue: {
      fontSize: "md",
    },
  },

  variants: {
    subtl: ({ theme: t, colorMode: m, colorScheme: c = "primary" }) => ({
      grid: {
        stroke: ["gray.400", "gray.600"],
      },
      xAxis: {
        color: ["gray.600", "gray.400"],
      },
      yAxis: {
        color: ["gray.600", "gray.400"],
      },
      legend: {
        color: ["gray.800", "gray.200"],
      },
      legendItem: {
        _hover: {
          bgColor: ["blackAlpha.100", "whiteAlpha.100"],
        },
      },
    }),
    solid: {
      grid: {
        stroke: ["black", "white"],
      },
      xAxis: {
        color: ["black", "white"],
      },
      yAxis: {
        color: ["black", "white"],
      },
      legend: {
        color: ["black", "white"],
      },
      legendItem: {
        _hover: {
          bgColor: ["blackAlpha.200", "whiteAlpha.200"],
        },
      },
    },
  },

  sizes: {
    sm: {
      container: {
        w: "xl",
        h: "xs",
      },
      xAxis: {
        fontSize: "2xs",
      },
      yAxis: {
        fontSize: "2xs",
      },
      referenceLine: {
        fontSize: "2xs",
      },
    },
    md: {
      container: {
        w: "3xl",
        h: "sm",
      },
    },
    lg: {
      container: {
        w: "5xl",
        h: "md",
      },
    },
  },

  defaultProps: {
    size: "md",
    variant: "solid",
    colorScheme: "primary",
  },
}
