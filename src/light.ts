import colors from './colorsLight';
import reset from './reset';
import core from './core';
import borderColor from './borderColor';
import backgroundColor from './backgroundColor';
import textColor from './textColor';
import outlineColor from './outlineColor';
import boxRadii from './boxRadii';

const theme = {
  colors: { ...colors },
  ...core,
  reset: reset,
  boxRadii: boxRadii,
  borderColor: borderColor(colors),
  backgroundColor: backgroundColor(colors),
  textColor: textColor(colors),
  outlineColor: outlineColor(colors),
};

export default theme;
