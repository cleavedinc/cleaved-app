/**
 * This function formats the supplied number to the currently used units.
 * At the time of this writing (4/5/20), it will convert the supplied number
 * to rems. This can be used for font-sizes, margins/padding, or any other unit based
 * property. If we decide to use pixels or points at a later date, we can just change
 * this one file, and leave all components as they are.
 */
export const unitFormat = (size: number): string => `${size / 16}rem`;
