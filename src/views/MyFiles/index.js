import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import DefaultButton from 'components/Button/Default'
import FileItem from './FileItem'

import './style.scss'

function MyFiles() {
  return (
    <div className='my-files'>
      <div className='my-files__header'>
        <h1 className='my-files__title'>Your files</h1>
        <DefaultButton className='my-files__upload-file-btn'>
          <FontAwesomeIcon
            icon={faArrowUp}
            className='my-files__upload-file-btn__icon'
          />
          <p className='my-files__upload-file-btn__label'>Upload a new file</p>
        </DefaultButton>
      </div>
      <div className='my-files__list'>
        <div className='my-files__item'>
          <FileItem />
        </div>
        <div className='my-files__item'>
          <FileItem />
        </div>
        <div className='my-files__item'>
          <FileItem />
        </div>
        <div className='my-files__item'>
          <FileItem />
        </div>
        <div className='my-files__item'>
          <FileItem />
        </div>
        <div className='my-files__item'>
          <FileItem />
        </div>{' '}
        <div className='my-files__item'>
          <FileItem />
        </div>
        <div className='my-files__item'>
          <FileItem />
        </div>
        <div className='my-files__item'>
          <FileItem />
        </div>
        <div className='my-files__item'>
          <FileItem />
        </div>
        <div className='my-files__item'>
          <FileItem />
        </div>
        <div className='my-files__item'>
          <FileItem />
        </div>
      </div>
    </div>
  )
}

export default MyFiles
