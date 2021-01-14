module.exports = {
  corePlugins: {
    preflight: false,
  },
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      './pages/*.js',
      './pages/**/*.js',
      './pages/**/**/*.js',
      './pages/**/**/**/*.js',
      './Components/*.js'
    ]
  },
  darkMode: 'class',
  theme: {
    fontFamily: {
      body: [
        "Lato",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Open Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
    },
  }
};
