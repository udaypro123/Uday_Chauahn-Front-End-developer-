
const SearchForm = ({setOption}) => {


 
  
  return (
    <>
      <div className='searchform'>
        <div className='searchfilter'>
          <select onChange={ (e) => {
            setOption(e.target.value)
          
          } }>
            <option value=" " > ---choose by status--</option>
            <option value='retired' >retired</option>
            <option value='unknown' > unknown</option>
            <option value="active" > active</option>
            {/* <option value='capsules' >All capsules</option>
            <option value='status' > status</option>
            <option value="original_launch" > original_launch</option>
            <option value="type" > type of capsuls</option> */}
          </select>
        </div>
      
      </div>
    </>
  )
}

export default SearchForm
