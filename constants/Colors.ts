const tintColorLight = '#ff7a00';
const tintColorDark = '#ffb366';

const Colors = {
  light: {
    text: '#1a1a1a',
    textSecondary: '#555',
    background: '#ffffff',
    backgroundAlt: '#f5f5f7',
    surface: '#ffffff',
    card: '#ffffff',
    border: '#e3e3e8',
    tint: tintColorLight,
    primary: tintColorLight,
    accent: '#ff7a00',
    tabIconDefault: '#b1b1b6',
    tabIconSelected: tintColorLight,
    iconActive: tintColorLight,
    iconInactive: '#b1b1b6',
    tabBar: '#ffffff',
    tabBarBackground: '#ffffff',
    tabBarBorder: '#e3e3e8',
    danger: '#d9534f',
  },
  dark: {
    text: '#ffffff',
    textSecondary: '#c5c5c8',
    background: '#121212',
    backgroundAlt: '#1d1d1f',
    surface: '#1f1f22',
    card: '#1f1f22',
    border: '#2c2c30',
    tint: tintColorDark,
    primary: tintColorDark,
    accent: '#ff9933',
    tabIconDefault: '#6c6c70',
    tabIconSelected: tintColorDark,
    iconActive: tintColorDark,
    iconInactive: '#6c6c70',
    tabBar: '#1f1f22',
    tabBarBackground: '#1f1f22',
    tabBarBorder: '#2c2c30',
    danger: '#ff6b63',
  },
};

export type ThemeName = keyof typeof Colors;
export type ThemeColors = typeof Colors.light;

export default Colors;
