'use client'

// icons
import CloseIcon from "@/icons/close-icon"

const Modal = ({ open, toggle, children }) => {
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className={`${open ? 'block' : 'hidden'} fixed inset-0 bg-black bg-opacity-50 transition-opacity`} />

      <div className={`${open ? 'block' : 'hidden'} fixed inset-0 z-10 overflow-y-auto`}>
        <div className="flex min-h-full items-end justify-center text-center xs:items-center p-0">
          <div className="relative transform overflow-hidden rounded-t-3xl rounded-b-none xs:rounded-3xl bg-white text-left shadow-2xl transition-all xs:my-8 w-full xs:max-w-[400px]">
            <div className="bg-white flex flex-col gap-3">
              <button className="absolute top-4 right-4 text-white z-10" onClick={toggle}>
                <CloseIcon className="w-7 h-7" />
              </button>
              
              <div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal