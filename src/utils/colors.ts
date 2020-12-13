export const colors = {
  'red': '#cf1322',
  'blue': '#1890ff',
  'green': '#3f8600',
  'yellow': '#faad14',
  'black': '#000000',
  'white': '#FFFFFF'
}

export const getColorCode = (color: string) => {
  const colorUpcased = color ? color.toUpperCase() : '';
  switch(colorUpcased) {
    case 'GREEN':
      return colors.green;
    case 'RED':
      return colors.red;
    case 'YELLOW':
      return colors.yellow;
    case 'BLUE':
      return colors.blue;
    case 'WHITE':
      return colors.white;
    default:
      return colors.black;
  }
}