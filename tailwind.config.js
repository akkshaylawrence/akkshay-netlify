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
        'Roboto Mono',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'sans-serif',
      ],
      heading: ['Roboto Slab']
    },
  }
};
