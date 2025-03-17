import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

import next from '../../assets/next.png'
import previous from '../../assets/previous.png'

import { RxEnterFullScreen } from 'react-icons/rx'
import { PiPlayPause } from 'react-icons/pi'

import './MultiVideo.css'

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <div
            key={index}
            className='grid-item'
          >
            {item}
            <div className='multi-popup'>
              <div className='multi-popup--pause'>
                <PiPlayPause color='black' />
              </div>
              <div className='multi-popup--fullscreen'>
                <RxEnterFullScreen color='black' />
              </div>
            </div>
          </div>
        ))}
    </>
  )
}

function MultiVideo() {
  const [itemOffset, setItemOffset] = useState(0)

  const itemsPerPage = 4

  const endOffset = itemOffset + itemsPerPage
  console.log(`Loading items from ${itemOffset} to ${endOffset}`)
  const currentItems = items.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(items.length / itemsPerPage)

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    )
    setItemOffset(newOffset)
  }

  return (
    <div className='multi-container'>
      <div className='grid-container'>
        <Items currentItems={currentItems} />
      </div>

      <ReactPaginate
        breakLabel='...'
        nextLabel={
          <img
            src={next}
            alt='Next'
            style={{ width: '40px', height: '40px' }}
          />
        }
        previousLabel={
          <img
            src={previous}
            alt='Previous'
            style={{ width: '40px', height: '40px' }}
          />
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName='pagination'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='previous-item'
        previousLinkClassName='previous-link'
        nextClassName='next-item'
        nextLinkClassName='next-link'
        breakClassName='break-item'
        breakLinkClassName='break-link'
        activeClassName='active'
      />
    </div>
  )
}

export default MultiVideo
