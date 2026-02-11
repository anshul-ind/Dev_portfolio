import Container from '@/components/common/Container';
import { githubConfig } from '@/config/Github';
import GithubClient from './GithubClient';
import GithubIcon from '../svgs/Github';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Suspense } from 'react';

type ContributionItem = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type GitHubContributionResponse = {
  date: string;
  contributionCount: number;
  contributionLevel:
    | 'NONE'
    | 'FIRST_QUARTILE'
    | 'SECOND_QUARTILE'
    | 'THIRD_QUARTILE'
    | 'FOURTH_QUARTILE';
};

// Helper function to filter contributions to past year
function filterLastYear(contributions: ContributionItem[]): ContributionItem[] {
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  return contributions.filter((item) => {
    const itemDate = new Date(item.date);
    return itemDate >= oneYearAgo;
  });
}

async function getGithubData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/github`, {
      next: { revalidate: 86400 },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub data');
    }

    const data: { contributions?: unknown[] } = await response.json();

    if (data?.contributions && Array.isArray(data.contributions)) {
      // Flatten the nested array structure
      const flattenedContributions = data.contributions.flat();

      // Convert contribution levels to numbers
      const contributionLevelMap = {
        NONE: 0,
        FIRST_QUARTILE: 1,
        SECOND_QUARTILE: 2,
        THIRD_QUARTILE: 3,
        FOURTH_QUARTILE: 4,
      };

      // Transform to the expected format
      const validContributions = flattenedContributions
        .filter(
          (item: unknown): item is GitHubContributionResponse =>
            typeof item === 'object' &&
            item !== null &&
            'date' in item &&
            'contributionCount' in item &&
            'contributionLevel' in item,
        )
        .map((item: GitHubContributionResponse) => ({
          date: String(item.date),
          count: Number(item.contributionCount || 0),
          level: (contributionLevelMap[
            item.contributionLevel as keyof typeof contributionLevelMap
          ] || 0) as ContributionItem['level'],
        }));

      if (validContributions.length > 0) {
        // Calculate total contributions
        const total = validContributions.reduce(
          (sum, item) => sum + item.count,
          0,
        );

        // Filter to show only the past year
        const filteredContributions = filterLastYear(validContributions);

        return {
          contributions: filteredContributions,
          totalContributions: total,
          hasError: false,
        };
      }
    }

    return {
      contributions: [],
      totalContributions: 0,
      hasError: true,
    };
  } catch (error) {
    console.error('Failed to fetch GitHub contributions:', error);
    return {
      contributions: [],
      totalContributions: 0,
      hasError: true,
    };
  }
}

export default async function Github() {
  const { contributions, totalContributions, hasError } = await getGithubData();

  return (
    <Container className="mt-20">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-foreground text-2xl font-bold">
              {githubConfig.title}
            </h2>
            <p className="text-muted-foreground text-sm">
              <b>{githubConfig.username}</b>&apos;s {githubConfig.subtitle}
            </p>
            {!hasError && totalContributions > 0 && (
              <p className="text-primary mt-1 text-sm font-medium">
                Total:{' '}
                <span className="font-black">
                  {totalContributions.toLocaleString()}
                </span>{' '}
                contributions
              </p>
            )}
          </div>
        </div>

        {/* Content */}
        {hasError || contributions.length === 0 ? (
          <div className="text-muted-foreground border-border rounded-xl border-2 border-dashed p-8 text-center">
            <div className="bg-muted mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
              <GithubIcon className="h-8 w-8" />
            </div>
            <p className="mb-2 font-medium">{githubConfig.errorState.title}</p>
            <p className="mb-4 text-sm">
              {githubConfig.errorState.description}
            </p>
            <Button variant="outline" asChild>
              <Link
                href={`https://github.com/${githubConfig.username}`}
                className="inline-flex items-center gap-2"
              >
                <GithubIcon className="h-4 w-4" />
                {githubConfig.errorState.buttonText}
              </Link>
            </Button>
          </div>
        ) : (
          <Suspense 
            fallback={
              <div className="animate-pulse h-[150px] bg-zinc-800 rounded-lg" />
            }
          >
            <GithubClient contributions={contributions} />
          </Suspense>
        )}
      </div>
    </Container>
  );
}
