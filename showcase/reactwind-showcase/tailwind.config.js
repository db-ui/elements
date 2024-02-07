import {
  screens as _screens,
  spacing as _spacing,
  font,
  fontSize as _fontSize,
  color,
  gap as _gap,
  space as _space
} from '@db-ui/base/build/tailwind/tailwind-tokens.json';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: _screens,
    spacing: _spacing,
    fontFamily: font.family,
    fontSize: _fontSize,
    colors: color,
    gap: ({ theme }) => ({
      ...theme('spacing'),
      ..._gap
    }),
    space: ({ theme }) => ({
      ...theme('spacing'),
      ..._space
    })
  },
  plugins: []
};
