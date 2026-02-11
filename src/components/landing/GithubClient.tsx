'use client';

import { githubConfig } from '@/config/Github';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';

const ActivityCalendar = dynamic(
  () => import('react-activity-calendar').then((mod) => mod.default),
  { ssr: false },
);

type ContributionItem = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type GithubClientProps = {
  contributions: ContributionItem[];
};

export default function GithubClient({ contributions }: GithubClientProps) {
  const { theme } = useTheme();

  return (
    <div className="relative overflow-hidden">
      <div className="bg-background/50 relative rounded-lg border border-dashed border-black/20 p-6 backdrop-blur-sm dark:border-white/10">
        <div className="w-full overflow-x-auto">
          <ActivityCalendar
            data={contributions}
            blockSize={12}
            blockMargin={4}
            fontSize={githubConfig.fontSize}
            colorScheme={theme === 'dark' ? 'dark' : 'light'}
            maxLevel={githubConfig.maxLevel}
            hideTotalCount={true}
            hideColorLegend={false}
            hideMonthLabels={false}
            theme={githubConfig.theme}
            labels={{
              months: githubConfig.months,
              weekdays: githubConfig.weekdays,
              totalCount: githubConfig.totalCountLabel,
            }}
            style={{
              color: 'rgb(139, 148, 158)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
