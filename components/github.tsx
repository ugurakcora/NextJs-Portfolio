"use client"

import { useEffect, useState } from 'react';
import { getPinnedRepos } from '@/actions/githubService';
import SectionHeading from './section-heading';
import { BsStar, BsEye, BsFileEarmarkCode } from 'react-icons/bs'

const GitHub = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPinnedRepos('ugurakcora');
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className='scroll-mt-28 mb-28'>
      <SectionHeading>Github</SectionHeading>
      <div className="flex gap-6 flex-wrap items-center justify-center">
      {data.map((repo) => (
        <div className="relative group h-full sm:w-3/4 flex-shrink-0" key={repo.repo}>
          <div className="card flex items-center flex-col h-full w-full p-4 md:p-6 sm:w-1/2">
              <a href={repo.link} target="_blank" rel="noreferrer" className="font-semibold lg:text-lg flex items-center space-x-2">
                <span className="truncate">{repo.repo}</span></a>
                <p className="text-sm mt-2 text-zinc-500">dummy text</p>
                <div className="flex items-center mt-auto">
                  <div className="text-sm inline-flex items-center gap-1 mr-4">
                    {/* icon */}
                    <span>{repo.language}</span>
                  </div>
                  <div className="text-sm inline-flex items-center gap-1 mr-2">
                    <BsStar />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="text-sm inline-flex items-center gap-1 mr-2">
                    <BsEye />
                    <span>{repo.forks}</span>
                  </div>
              </div>
          </div>
        </div>
      ))}
      </div>

    </section>
  );
};

export default GitHub;



