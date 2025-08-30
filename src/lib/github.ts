export async function getGithubReleaseDownloads(repoPath: string): Promise<number> {
    const res = await fetch(`https://api.github.com/repos/${repoPath}/releases`);
    if (!res.ok) return 0;

    const releases = await res.json();
    return releases.reduce(
        (total: number, release: any) =>
            total +
            (release.assets?.reduce(
                (assetTotal: number, asset: any) => assetTotal + (asset.download_count || 0),
                0
            ) || 0),
        0
    );
}

export async function getGithubRepoStats(githubUrl: string) {
    const { pathname } = new URL(githubUrl);
    const repoPath = pathname.slice(1);

    const [repoRes, downloads] = await Promise.all([
        fetch(`https://api.github.com/repos/${repoPath}`),
        getGithubReleaseDownloads(repoPath),
    ]);

    if (!repoRes.ok) {
        return { github: githubUrl, stars: 0, forks: 0, downloads };
    }

    const data = await repoRes.json();
    return {
        github: githubUrl,
        stars: data.stargazers_count ?? 0,
        forks: data.forks_count ?? 0,
        downloads,
    };
}
