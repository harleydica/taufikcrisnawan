export default function Track(track: any) {
  return (
    <div className="pb-4 flex flex-row items-baseline border-b border-theme-300 dark:border-theme-700 max-w-3xl w-full mt-8">
      <p className="text-sm font-bold text-theme-500 dark:text-gray-400">
        {track.ranking}
      </p>
      <div className="flex flex-col pl-3">
        <a
          className="border-b border-dashed border-transparent hover:border-b-theme-500 font-medium text-gray-900 dark:text-gray-100 truncate w-60 sm:w-96 md:w-full"
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {track.title}
        </a>
        <p
          className="text-theme-500 dark:text-gray-400 mb-4 truncate w-60 sm:w-96 md:w-full"
          color="gray.500"
        >
          {track.artist}
        </p>
      </div>
    </div>
  );
}
