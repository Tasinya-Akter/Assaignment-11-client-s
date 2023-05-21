import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Baby's Toy Out | ${title}`;
  }, [title]);
};

export default useTitle;
