import React from 'react'
import { NavLink } from 'react-router-dom'

const Articles = ({articles}) => {
  return (
    <>
      {articles.map((article, key) => (
            <div className='p-4 md:w-1/2' key={key}>
              <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                <NavLink to={`/article/${article.name}`}>
                  <img className='lg:h-48 md:h-36 w-full object-cover object-center' src={article.thumbnail} alt='blog' />
                </NavLink>
                <div className='p-6'>
                  <NavLink to={`/article/${article.name}`} key={key}>
                    <h3 className='text-lg font-medium text-gray-900 mb-3'>
                      {article.title}
                    </h3>
                  </NavLink>
                  <p className='leading-relaxed mb-3'>
                    {article.content[0].substring(0, 150)}...
                  </p>
                  <div className='flex items-center flex-wrap'>
                    <NavLink className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0' to={`/article/${article.name}`}>
                      Learn More
                    </NavLink>

                  </div>
                </div>
              </div>
            </div>
          ))}
    </>
  )
}

export default Articles