import { Config } from 'tailwindcss';
import type { PluginCreator } from 'tailwindcss/types/config';

const addVariablesForColors: PluginCreator = ({ addBase, theme }) => {
  const colors = theme('colors') as Record<string, string | Record<string, string>>;
  const newVars = Object.entries(colors).reduce((vars, [color, shades]) => {
    if (typeof shades === 'object') {
      Object.entries(shades).forEach(([shade, value]) => {
        vars[`--${color}-${shade}`] = value;
      });
    } else {
      vars[`--${color}`] = shades;
    }
    return vars;
  }, {} as Record<string, string>);

  addBase({
    ':root': newVars,
  });
};


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maskImage: {
        'gradient-to-r': 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)',
      },
      fontFamily: {
        foldit: ['Foldit', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
        kalnia: ['Kalnia Glaze', 'sans-serif'],
        karla: ['Karla', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin-slow 8s linear infinite',
        shimmer: 'shimmer 2s linear infinite',
        move: 'move 5s linear infinite',
        first: 'moveVertical 30s ease infinite',
        second: 'moveInCircle 20s reverse infinite',
        third: 'moveInCircle 40s linear infinite',
        fourth: 'moveHorizontal 40s ease infinite',
        fifth: 'moveInCircle 20s ease infinite',
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
        moveHorizontal: {
          '0%': { transform: 'translateX(-50%) translateY(-10%)' },
          '50%': { transform: 'translateX(50%) translateY(10%)' },
          '100%': { transform: 'translateX(-50%) translateY(-10%)' },
        },
        moveInCircle: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        moveVertical: {
          '0%': { transform: 'translateY(-50%)' },
          '50%': { transform: 'translateY(50%)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

export default config;
