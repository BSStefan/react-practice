// @flow

export const shortText = (text: string, maxLenght: number): string => text.length > maxLenght ? `${text.slice(0, maxLenght - 5)} ...` : text;