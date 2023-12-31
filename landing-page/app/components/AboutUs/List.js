import React from 'react'

export default function List({point}) {
  return (
    <li className="flex items-center mb-4 text-base ">
                        <span className="mr-3 text-blue-500 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black"
                                className="w-5 h-5 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                <path
                                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg>
                        </span>
                        {point}
                    </li>
  )
}
