interface SizesProps {
  isSmall: boolean;
  isMobile: boolean;
  isTablet: boolean;
}

export const calculateSizes = ({ isSmall, isMobile, isTablet }: SizesProps) => {
  return {
    orbPosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 8],
  };
};

// const x = useControls("Terminal", {
//   positionX: {
//     value: 2.5,
//     min: -10,
//     max: 10,
//   },
//   positionY: {
//     value: 2.5,
//     min: -10,
//     max: 10,
//   },
//   positionZ: {
//     value: 2.5,
//     min: -10,
//     max: 10,
//   },
//   rotationX: {
//     value: 0,
//     min: -10,
//     max: 10,
//   },
//   rotationY: {
//     value: 0,
//     min: -10,
//     max: 10,
//   },
//   rotationZ: {
//     value: 0,
//     min: -10,
//     max: 10,
//   },
//   scale: {
//     value: 1,
//     min: 1,
//     max: 100,
//   },
// });
