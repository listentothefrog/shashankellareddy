// const Divider = () => {
//   return (
//     <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
//   );
// };

const Year = ({ children }: any) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const TimelineTitle = (props: any) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="6" cy="6" r="5.5" stroke="#ff6347" />
        </svg>

        <p className="font-medium text-gray-900 dark:text-gray-100 ml-3">
          {props.title}
        </p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{props.children}</p>
    </li>
  );
};

const Timeline = () => {
  return (
    <div>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black">
        High school Timeline
      </h3>
      <Year>2021</Year>
      <ul>
        <TimelineTitle title="First day of High School 🎉">
          A very excited freshman started his first day of high school with
          confusion and didn't know where to find his classes.
        </TimelineTitle>
      </ul>
    </div>
  );
};

export default Timeline;
