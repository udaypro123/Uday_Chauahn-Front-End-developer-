import React from 'react'
import Banner from '../banner/Banner'
import SearchForm from '../searchform/SearchForm'
import DataGrid from '../datagrid/DataGrid'
import Popuppage from '../datagrid/Popuppage'

const Landingpage = () => {
  return (
    <>
      <div className='landingpage'>
        <Banner />
        <DataGrid/>
      </div>
    </>
  )
}

export default Landingpage
