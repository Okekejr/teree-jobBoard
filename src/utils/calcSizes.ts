interface SizesProps {
  isSmall: boolean;
  isMobile: boolean;
  isTablet: boolean;
}

export const calculateSizes = ({ isSmall, isMobile, isTablet }: SizesProps) => {
  return {
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 8],
  };
};
