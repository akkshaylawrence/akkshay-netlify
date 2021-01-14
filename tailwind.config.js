module.exports = {
  corePlugins: {
    preflight: false,
  },
  purge: {
    content: [
      './pages/*.{js,jsx}',
      './pages/**/*.{js,jsx}',
      './pages/**/**/*.{js,jsx}',
      './pages/**/**/**/*.{js,jsx}',
      './components/*.{js,jsx}'
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
