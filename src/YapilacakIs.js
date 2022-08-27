function YapilacakIs({is, tamamlandiYap}){




    return(
        <>
        <p > <input type="checkbox" checked={is.complete}
         onChange={()=>tamamlandiYap(is)}/>{is.title} 
         {is.complete?'OK': 'X'}</p>
        
        
        </>
    )
}
export default YapilacakIs;