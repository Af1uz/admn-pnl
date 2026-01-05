import React from 'react'

const UpdateModal = ({updateId, setupdateModal }) => {
  return (
    <div className='dd' >
      <form >
        <input name='title' value={formData.title} type="text" placeholder='title' />
        <input name='price' value={formData.price} type="number" placeholder='price' />
        <input name='description' value={formData.description} type="text" placeholder='description' />
        <input name='category' value={formData.category} type="text" placeholder='category' />
        <input name='image' value={formData.image} type="url" placeholder='image' />
        <button onClick={()=> {
            setupdateModal(false)
        }} >Close</button>
        <button>Save</button>
      </form>
    </div>
  )
}

export default UpdateModal
