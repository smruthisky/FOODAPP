export function filtersearch(searchInput,resturants){
    const filteredres=resturants.filter((resturant)=>
    
      resturant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())

    );
   
    return filteredres;

};