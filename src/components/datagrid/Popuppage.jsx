import React from 'react'
import { useSelector } from 'react-redux'
const Popuppage = (props) => {

    const { popupitem } = useSelector((state) => state.capsul)
    

    return (
        <>
            <div className="cards">

                <p >capsule_id : <span> { popupitem.capsule_id }</span></p>
                <p >status: <span> { popupitem.status }</span></p>
                <p >capsule_serial: <span>{ popupitem.capsule_serial }</span> </p>

                <p >Type: <span>{ popupitem.type }</span> </p>


                <button type="button" className="btn btn-primary" onClick={ () => {
                    props.setShow(false)
                } }>  close </button>

            </div>

        </>
    )
}

export default Popuppage;
