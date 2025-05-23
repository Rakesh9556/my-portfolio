import React, { useEffect, useState } from 'react';
import { GraphQLClient, gql } from 'graphql-request';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const GitHubContributionHeatmap = ({ username }) => {
  const [contributions, setContributions] = useState([]);
  const [totalCommits, setTotalCommits] = useState(0);
  const [totalRepos, setTotalRepos] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDark, setIsDark] = useState(false);

  const token = import.meta.env.VITE_GITHUB_TOKEN;

  // Detect dark mode dynamically
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    setIsDark(document.documentElement.classList.contains('dark'));

    return () => observer.disconnect();
  }, []);

  // Fetch GitHub contributions
  useEffect(() => {
    if (!username) {
      setError('⚠️ GitHub username is required.');
      setLoading(false);
      return;
    }

    const fetchGraphQLContributions = async () => {
      const endpoint = 'https://api.github.com/graphql';

      const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const query = gql`
        query ($login: String!) {
          user(login: $login) {
            repositories(privacy: PUBLIC) {
              totalCount
            }
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    date
                    contributionCount
                  }
                }
              }
            }
          }
        }
      `;

      try {
        const variables = { login: username };
        const data = await graphQLClient.request(query, variables);

        const weeks = data.user.contributionsCollection.contributionCalendar.weeks;
        const flatDays = weeks.flatMap(week =>
          week.contributionDays.map(day => ({
            date: day.date,
            count: day.contributionCount,
          }))
        );

        setContributions(flatDays);
        setTotalCommits(data.user.contributionsCollection.contributionCalendar.totalContributions);
        setTotalRepos(data.user.repositories.totalCount);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching GitHub contribution data:', err);
        setError('Failed to fetch data. Check console for details.');
        setLoading(false);
      }
    };

    fetchGraphQLContributions();
  }, [username]);

  if (loading) return <div className="text-center py-6">⏳ Loading contributions...</div>;
  if (error) return <div className="text-red-500 text-center py-6">{error}</div>;

  const today = new Date();
  const yearAgo = new Date(today);
  yearAgo.setFullYear(today.getFullYear() - 1);

  // GitHub-style fill colors
  const getFillColor = (count) => {
    if (!count || count === 0) return isDark ? '#2d333b' : '#ebedf0';
    if (count <= 2) return isDark ? '#003820' : '#9be9a8';
    if (count <= 4) return isDark ? '#006d32' : '#40c463';
    if (count <= 7) return isDark ? '#238636' : '#30a14e';
    return isDark ? '#39d353' : '#216e39';
  };

  return (
    <div className="p-4 rounded-md shadow-md bg-white dark:bg-[#0d1117] overflow-auto">
      <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">GitHub Contributions</h2>
      <div className='flex justify-center gap-x-4'>
        <p className="mb-1 font-bold text-gray-700 dark:text-green-300">Repositories: {totalRepos}</p>
        <p className="mb-4 font-bold text-gray-700 dark:text-red-400">Commits: {totalCommits}</p>
      </div>
      <CalendarHeatmap
        startDate={yearAgo}
        endDate={today}
        values={contributions}
        showWeekdayLabels
        gutterSize={2}
        tooltipDataAttrs={(value) => {
          if (!value || !value.date) return {};
          return {
            'data-tooltip-id': 'github-tooltip',
            'data-tooltip-content': `${value.date}: ${value.count || 0} contribution${value.count === 1 ? '' : 's'}`,
          };
        }}
        classForValue={() => 'rounded-sm'}
        transformDayElement={(rect, value, index) => {
          const fill = getFillColor(value?.count);
          return React.cloneElement(rect, {
            style: { fill },
            width: 10,
            height: 10,
            rx: 2,
            ry: 2,
            key: index,
          });
        }}
      />

      <ReactTooltip
        id="github-tooltip"
        place="top"
        className="!bg-gray-800 !text-white !rounded-md !shadow-lg dark:!bg-black dark:!text-gray-200"
      />

      <div className="flex items-center justify-center gap-x-2 -mt-4 text-sm text-gray-700 dark:text-gray-300">
        <span>Less</span>
        <div className="w-4 h-4 bg-[#ebedf0] dark:bg-[#0d1117] rounded-sm" />
        <div className="w-4 h-4 bg-[#9be9a8] dark:bg-[#003820] rounded-sm" />
        <div className="w-4 h-4 bg-[#40c463] dark:bg-[#006d32] rounded-sm" />
        <div className="w-4 h-4 bg-[#30a14e] dark:bg-[#238636] rounded-sm" />
        <div className="w-4 h-4 bg-[#216e39] dark:bg-[#39d353] rounded-sm" />
        <span>More</span>
      </div>
    </div>
  );
};

export default GitHubContributionHeatmap;
