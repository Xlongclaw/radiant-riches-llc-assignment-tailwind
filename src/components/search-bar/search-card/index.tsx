import Image from 'next/image'
import React from 'react'
import { useRouter } from "next/navigation";
import { SearchCardPropType } from '@/types';


/**
 * Component that renders Search Bar Card
 */
const SearchCard = ({searchInput,changeSearchInput,screen}:SearchCardPropType) => {
  const router = useRouter();

   /**
   * handleChange - function that handle changes in the search field.
   * It sets the value of searchInput equal to what user is entering in the search field.
   */
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => changeSearchInput(e.target.value);

  /**
   * handleSubmit - funcion executed when user searches anything.
   * It changes the current route to the search/{SEARCH_INPUT} route.
   */
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      router.push(`/search/${searchInput}`);
    };

    /**
     * Tailwind styles for small screens
     */
    const mobileStyle = `nav-md:h-9 absolute bg-WHITE border flex h-12 w-64 nav-md:hidden top-12 left-0 bg-ASCENT/10
    nav-md:bg-white rounded-lg nav-md:flex items-center px-2 gap-2 `
    
    /**
     * Tailwind styles for large screens
     */
    const wideStyle =`nav-md:h-9 h-12 w-64 hidden nav-md:static top-12 left-0 bg-ASCENT/10
    nav-md:bg-white rounded-lg nav-md:flex items-center px-2 gap-2 `

  return (
    <form onSubmit={handleSubmit}
        className={screen=='small'?mobileStyle:wideStyle}>

          {/* Search Icon inside of the Search Bar */}
          <Image width={16} height={16} src={`/images/search.png`} alt="search icon" />

          {/* Search Input Field */}
          <input type="text" name="search" id="search" value={searchInput} onChange={handleChange}
          className="border-none focus:outline-none text-sm bg-transparent" placeholder="Search Something..."/>

          {/* search button */}
        <button type="submit">
          <Image width={20}height={20} src={`/images/chevron-down.png`} alt="search icon"
            className="-rotate-90 hover:bg-ASCENT/30 p-1 rounded-full"/>
        </button>
      </form>
  )
}

export default SearchCard