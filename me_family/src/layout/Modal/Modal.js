import { IoCloseSharp } from 'react-icons/io5';

const Modal = ({ setModal }) => {
  const handleOutsideClick = ({ target, currentTarget }) => {
    if (target === currentTarget) setModal(null);
  }

  return (
    <div onClick={handleOutsideClick} className="px-4 md:px-0 flex justify-center items-center fixed left-0 top-0 z-[7000] w-full h-screen bg-modal">
      <div className="animate-show-modal rounded-xl bg-white p-5 md:max-w-xl">
        <div className="w-full flex justify-end">
          <button onClick={() => setModal(null)} className="p-1">
            <IoCloseSharp className="fa-solid fa-xmark text-black text-2xl"></IoCloseSharp>
          </button>
        </div>

        <div className="modal-area-content text-center">
          <h2 className="text-xl md:text-2xl font-bold">Lucas Bargas - MeFamily</h2>

          <p className="mt-4">Esta aplicação web é uma réplica desenvolvida, a fins estudantis, por <a className="font-bold hover:underline" target="_blank" href="https://projetoslucasbargas.com/" rel="noopener noreferrer">Lucas Bargas</a>, com base em uma aplicação encontrada na web. Porém, toda a codificação é própria.</p>

          <div className="button-repo pt-2 pb-4">
            <a className="font-bold hover:underline" target="_blank" href="https://github.com/LucasBargas/projetos_tailwindcss/tree/main/me_family" rel="noopener noreferrer">Clique aqui para visualizar o Repositório no GitHub</a>
          </div>

          <div>
            <button onClick={() => setModal(null)} className="px-4 py-2 rounded button bg-dark-blue text-white">
              Visualizar projeto
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;
