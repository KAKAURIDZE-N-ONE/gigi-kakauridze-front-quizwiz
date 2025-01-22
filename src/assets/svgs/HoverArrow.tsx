import React from "react";

const HoverArrow: React.FC<{ fill?: string }> = ({ fill }) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={`${fill ? "fill-" + fill : "fill-white"}`}
        d="M12.4993 7.99996C12.4961 7.64922 12.3548 7.31389 12.106 7.06663L9.24602 4.19997C9.12111 4.0758 8.95214 4.0061 8.77602 4.0061C8.59989 4.0061 8.43092 4.0758 8.30602 4.19997C8.24353 4.26194 8.19393 4.33567 8.16009 4.41691C8.12624 4.49815 8.10882 4.58529 8.10882 4.6733C8.10882 4.76131 8.12624 4.84844 8.16009 4.92968C8.19393 5.01092 8.24353 5.08466 8.30602 5.14663L10.4993 7.33329H3.83268C3.65587 7.33329 3.4863 7.40353 3.36128 7.52856C3.23625 7.65358 3.16602 7.82315 3.16602 7.99996C3.16602 8.17677 3.23625 8.34634 3.36128 8.47136C3.4863 8.59639 3.65587 8.66663 3.83268 8.66663H10.4993L8.30602 10.86C8.18048 10.9846 8.1096 11.154 8.10898 11.3309C8.10835 11.5078 8.17803 11.6778 8.30268 11.8033C8.42733 11.9288 8.59675 11.9997 8.77366 12.0003C8.95057 12.001 9.12048 11.9313 9.24602 11.8066L12.106 8.93996C12.3564 8.69106 12.4979 8.35301 12.4993 7.99996Z"
      />
    </svg>
  );
};

export default HoverArrow;
