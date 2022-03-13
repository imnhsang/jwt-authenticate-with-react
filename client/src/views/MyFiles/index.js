import React from 'react'

import DefaultButton from 'components/Button/Default'

function MyFiles() {
  return (
    <div className='my-files'>
      <div className='my-files__header'>
        <p className='my-files__title'>Your files</p>
        <DefaultButton className='my-files__upload-files-btn'>
          Upload a new file
        </DefaultButton>
      </div>
    </div>
  )
}

export default MyFiles
