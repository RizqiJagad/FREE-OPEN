
export default function HowToStep({ number, title, description, code }) {
  return (
    <div
      className="flex gap-4 p-5 rounded-lg border border-gray-200
                 dark:border-gray-700 bg-white dark:bg-gray-800"
    >
      {/* Step number badge */}
      <div
        className="flex-shrink-0 w-10 h-10 flex items-center justify-center
                   rounded-full bg-brand-coral text-white font-bold text-lg"
      >
        {number}
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
          {description}
        </p>
        {code && (
          <pre
            className="bg-gray-100 dark:bg-gray-900 rounded p-3 text-sm
                       overflow-x-auto text-gray-800 dark:text-gray-200"
          >
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
