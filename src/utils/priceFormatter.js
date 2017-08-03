export function round(value) {
  if (value) {
    return parseFloat(Math.round(value * 100) / 100).toFixed(2);
  }

  return 0;
}

export default round;
