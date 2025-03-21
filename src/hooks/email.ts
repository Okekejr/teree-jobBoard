export const useEmail = (emailAd: string) => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAd}`;
  };

  return { handleEmailClick };
};
