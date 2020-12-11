import React from "react";

// Our Link component that efficiently redirects to another page
// by preventing a full page reload
const Link = ({ className, href, style, children }) => {
  const onClick = (event) => {
    // Allows you to open a new tab
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    // Changes URL without changing content
    window.history.pushState({}, "", href);

    // Emit a navigation event to each route to keep track of
    // whether URL is changed or not
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} href={href} className={className} style={style}>
      {children}
    </a>
  );
};

export default Link;
