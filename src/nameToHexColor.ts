const hashCode = (str: string): number => str.split('')
  .reduce((hash, chr): number => (hash << 5) - hash + chr.charCodeAt(0), 0) >>> 1;

const hexColor = (hash: number): string => {
  let color = hash.toString(16);

  switch (color.length) {
    case 1:
      color = color.replace(/^(.)/, '$1$1$1$1$1$1');
      break;

    case 2:
      color = color.replace(/^(.)(.)/, '$1$2$1$2$1$2');
      break;

    case 3:
      color = color.replace(/^(.)(.)(.)/, '$1$1$2$2$3$3');
      break;

    case 4:
      color = color.replace(/^(.)(.)(.)(.)/, '$1$2$3$4$1$2');
      break;

    case 5:
      color = color.replace(/^(.)(.)(.)(.)(.)/, '$1$2$3$4$5$1');
      break;

    case 6:
      break;

    default:
      color = color.substr(0, 6);
      break;
  }

  return `#${color}`;
};

export const nameToHexColor = (name: string): string => hexColor(hashCode(name));
