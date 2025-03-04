import React from "react";

export function Card({ children, className }) {
  return (
    <div className={`border rounded-lg shadow-md p-4 bg-white dark:bg-gray-800 ${className}`}>
      {children}
    </div>
  );
}
