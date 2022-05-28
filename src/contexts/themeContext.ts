import { SemanticTheme } from '@/models/semantic-theme/theme';

import { createContext } from 'react';

import { juiceTheme } from '@/constants/theme';
import { ThemeOption } from '@/constants/theme/theme-option';

const defaultThemeOption: ThemeOption = ThemeOption.dark;

export type ThemeContextType = {
  themeOption: ThemeOption;
  theme: SemanticTheme;
  isDarkMode: boolean;
  setThemeOption: (themeOption: ThemeOption) => void;
  forThemeOption?: <T>(map: Record<ThemeOption, T>) => T;
};

export const ThemeContext = createContext<ThemeContextType>({
  themeOption: defaultThemeOption,
  theme: juiceTheme(defaultThemeOption),
  setThemeOption: () => {},
  isDarkMode: defaultThemeOption === ThemeOption.dark,
});
