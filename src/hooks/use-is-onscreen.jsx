import React from "react";
//https://codesandbox.io/s/customhook-observer-e1kthy?file=/App.js
function useIsOnscreen() {
  const [isOnScreen, setIsOnScreen] = React.useState(false);

  const elementRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      setIsOnScreen(entry.isIntersecting);
    });

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [elementRef]);

  return [isOnScreen, elementRef];
}

export default useIsOnscreen;
