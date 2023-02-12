module.exports = {
  mode: "jit",
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "daunku-dark": "#2D3949;",
        "daunku-green": "#2af598;",
        "daunku-blue": "#009efd;",
      },
      spacing: {
        2.5: "0.625rem", // 10px (Header PaddingY)
        5: "1.25rem", // 20px
        5.25: "1.3125rem", // 21px (basket icon size)
        7: "1.75rem", // 28px
        7.5: "1.875rem", // 30px
        8.5: "2.125rem", // 34px
        9: "2.25rem", // 36px
        11: "2.75rem", // 44px
        11.5: "2.875rem", // 46px (Header Height)
        12.5: "3.125rem", // 50px
        13: "3.25rem", // 52px
        15: "3.75rem", // 60px
        17: "4.25rem", // (navbar link gap)
        30: "7.5rem", // 120px
      },
      width: {
        "header-width": "calc(100% - 36rem)",
      },
      fontSize: {
        "heading-2": ["82px", "96px"],
      },
    },
  },
  plugins: [],
};
