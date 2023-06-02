import React, { useEffect, Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getcapsuldata } from '../resduxToolkit/capsulSlice'
import { additem } from '../resduxToolkit/capsulSlice'
import Popuppage from './Popuppage'
import SearchForm from '../searchform/SearchForm'

const DataGrid = () => {


  const [option, setOption] = useState("capsules")
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const { capsuldata } = useSelector((state) => state.capsul)
  // console.log(capsuldata)


  useEffect(() => {
    dispatch(getcapsuldata())
  }, [])

  const popupdata = (ele) => {
    dispatch(additem(ele))
  }

  let filterdata = capsuldata.filter((ele) => {
    if (ele.status === " ") {
      return ele
    } 
    
    if (ele.status === option) {
      return ele
    } 
    

  })




  return (
    <>
    <SearchForm setOption={setOption}/>

      <div className='datagrid'>
        {
          filterdata.length > 0 ? <> {
          filterdata && filterdata.map((item, i) => {
            return (
              <Fragment key={ i }>
                <div className="card" >
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">capsule_id : <span> { item.capsule_id}</span>
                    </li>
                    <li className="list-group-item">status: <span> { item.status }</span></li>
                    <li className="list-group-item">capsule_serial: <span>{ item.capsule_serial }</span> </li>

                    <li className="list-group-item">Type: <span>{ item.type }</span> </li>
                  </ul>

                  <button type="button" className="btn btn-primary" onClick={ () => {
                    popupdata(item)
                    setShow(true)
                  } }>
                    view details
                  </button>
                </div>
              </Fragment>
            )
          })
          }
          </> : <>
            {
              capsuldata && capsuldata.map((item, i) => {
            return (
              <Fragment key={ i }>
                <div className="card" >
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">capsule_id : <span> { item.capsule_id}</span>
                    </li>
                    <li className="list-group-item">status: <span> { item.status }</span></li>
                    <li className="list-group-item">capsule_serial: <span>{ item.capsule_serial }</span> </li>

                    <li className="list-group-item">Type: <span>{ item.type }</span> </li>
                  </ul>

                  <button type="button" className="btn btn-primary" onClick={ () => {
                    popupdata(item)
                    setShow(true)
                  } }>
                    view details
                  </button>
                </div>
              </Fragment>
            )
          })
            }
          </>
        }
      </div>

      { show && <Popuppage show={ show } setShow={ setShow } /> }

    </>
  )
}

export default DataGrid;
