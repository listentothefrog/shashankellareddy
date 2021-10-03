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
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">
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
