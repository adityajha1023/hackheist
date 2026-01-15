/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'text-secondary' : 'rgba(255,255,255,0.7)',
      },
      fontFamily:{
        'bebas' : ['Bebas Neue', 'sans-serif'],
        'netflix': ['NetflixSans', 'system-ui', 'sans-serif'],
      },
      fontSize:{
			'sm': '0.833rem',
			'paragraph': '1rem',
			'h1': '2.986rem',
			'h2': '2.488rem',
			'h3': '2.074rem',
			'h4': '1.728rem',
			'h5': '1.44rem',
			'h6': '1.2rem'
		},
    },
  },
  plugins: [],
}

