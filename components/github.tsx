"use client"

import { useEffect, useState } from 'react';
import { getPinnedRepos } from '@/actions/githubService';
import SectionHeading from './section-heading';
import { BsStar, BsEye } from 'react-icons/bs'

const GitHub = () => {
interface RepoData {
  repo: string;
  link: string;
  language: string;
  stars: number;
  forks: number;
}

const [data, setData] = useState<RepoData[]>([]);

useEffect(() => {
  async function fetchData() {
    const response = await fetch('https://api.github.com/users/ugurakcora/repos');
    const json = await response.json();
    setData(json.map((repo: any) => ({
      repo: repo.name,
      link: repo.html_url,
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
    })));
  }
  fetchData();
}, []);
  console.log(data)

  return (
    <section className='scroll-mt-28 mb-28'>
      <SectionHeading>Github</SectionHeading>
      <div className="flex gap-6 flex-wrap items-center justify-center">
      {data.map((item) => (
        item.stars > 0 ? (
          <div className="group h-full w-1/2" key={item.repo}>
            <div className="card flex items-center flex-col h-full w-full p-4 md:p-6 sm:w-1/2">
                <a href={item.link} target="_blank" rel="noreferrer" className="font-semibold lg:text-lg flex items-center space-x-2">
                  <span className="truncate">{item.repo}</span></a>
                  <p className="text-sm mt-2 text-zinc-500">dummy text</p>
                  <div className="flex items-center mt-auto">
                    <div className="text-sm inline-flex items-center gap-1 mr-4">
                      {/* icon */}
                      <span>{item.language}</span>
                    </div>
                    <div className="text-sm inline-flex items-center gap-1 mr-2">
                      <BsStar />
                      <span>{item.stars}</span>
                    </div>
                    <div className="text-sm inline-flex items-center gap-1 mr-2">
                      <BsEye />
                      <span>{item.forks}</span>
                    </div>
                </div>
            </div>
          </div>
        ) : (null)
      ))}
      </div>

    </section>
  );
};

export default GitHub;



