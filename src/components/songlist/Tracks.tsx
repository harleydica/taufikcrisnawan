import { UnstyledLink } from '@/UI/links'

export default function Track(track: any) {
  return (
    <div className="pb-4 flex flex-row items-baseline border-b border-theme-300 dark:border-theme-700 max-w-3xl w-full mt-8">
      <p className="text-sm font-bold text-theme-500 dark:text-gray-400">
        {track.ranking}
      </p>
      <div className="flex flex-col pl-3">
        <h5>
          <UnstyledLink
            className="border-b border-dashed border-transparent hover:border-theme-500 dark:hover:border-theme-300"
            href={track.songUrl}
            target="_blank"
          >
            {track.title}
          </UnstyledLink>
        </h5>
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
