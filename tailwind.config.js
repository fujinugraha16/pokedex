/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './views/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '500px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        primary: '#F5FBFB',
        secondary: '#2e3157',
      },
      textColor: {
        primary: '#2e3157',
        secondary: '#F5FBFB',
      },
      colors: {
        pokedex: {
          primary: '#F5FBFB',
          secondary: '#2e3157',
        },
        normal: {
          DEFAULT: '#A8A77A',
          darker: '#848458',
        },
        fire: {
          DEFAULT: '#EE8130',
          darker: '#C55F07',
        },
        water: {
          DEFAULT: '#6390F0',
          darker: '#3B71CD',
        },
        electric: {
          DEFAULT: '#F7D02C',
          darker: '#C3A200',
        },
        grass: {
          DEFAULT: '#7AC74C',
          darker: '#519F24',
        },
        ice: {
          DEFAULT: '#96D9D6',
          darker: '#69ABA9',
        },
        fighting: {
          DEFAULT: '#C22E28',
          darker: '#E65042',
        },
        poison: {
          DEFAULT: '#A33EA1',
          darker: '#C35CC0'
        },
        ground: {
          DEFAULT: '#E2BF65',
          darker: '#B4953D',
        },
        flying: {
          DEFAULT: '#A98FF3',
          darker: '#856DCE',
        },
        psychic: {
          DEFAULT: '#F95587',
          darker: '#D42E69',
        },
        bug: {
          DEFAULT: '#A6B91A',
          darker: '#7D9300',
        },
        rock: {
          DEFAULT: '#B6A136',
          darker: '#907F0D',
        },
        ghost: {
          DEFAULT: '#735797',
          darker: '#9174B6',
        },
        dragon: {
          DEFAULT: '#6F35FC',
          darker: '#9454FF',
        },
        dark: {
          DEFAULT: '#705746',
          darker: '#907563',
        },
        steel: {
          DEFAULT: '#B7B7CE',
          darker: '#8F8FA5',
        },
        fairy: {
          DEFAULT: '#D685AD',
          darker: '#B1638B',
        },
      },
    },
  },
  plugins: [],
}
