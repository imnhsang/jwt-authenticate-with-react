import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faArrowDown } from '@fortawesome/free-solid-svg-icons'

import DefaultButton from 'components/Button/Default'

import './style.scss'

function FileItem() {
  return (
    <div className='my-files__file-item'>
      <div className='my-files__file-item__delete-action'>
        <button
          title='Delete file'
          className='my-files__file-item__delete-btn'
          onClick={() => console.log('delete button')}
        >
          <FontAwesomeIcon
            className='my-files__file-item__delete-icon'
            icon={faTrash}
          />
        </button>
      </div>
      <div className='my-files__file-item__main'>
        <div className='my-files__file-item__info'>
          <p className='my-files__file-item__title'>
            27 - Zara Larsson - Aint My fault
          </p>
          <p className='my-files__file-item__size'>13,72 MB</p>
        </div>
        <DefaultButton className='my-files__file-item__download-btn'>
          <FontAwesomeIcon
            icon={faArrowDown}
            className='my-files__file-item__download-btn__icon'
          />
          <p className='my-files__file-item__download-btn__label'>Download</p>
        </DefaultButton>
      </div>
    </div>
  )
}

export default FileItem
