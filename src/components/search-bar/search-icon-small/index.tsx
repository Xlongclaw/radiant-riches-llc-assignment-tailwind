import Image from 'next/image'
import React from 'react'

/**
 * Component that return Search Icon Image
 * If expanded -> TRUE Component returns ASCENT COLOR SEARCH ICON
 * else it Returns WHITE SEARCH ICON
 */
const SearchIconSmall = ({expanded}:{expanded:boolean}) => {
  return (
    <Image
        width={26}
        height={26}
        src={`${expanded ? "/images/search.png" : "/images/search-white.png"}`}
        alt="search icon"
        className={`nav-md:hidden flex rounded-full ${
          expanded ? "bg-GREYBG p-2" : "bg-transparent p-1"
        } `}
      />
  )
}

export default SearchIconSmall