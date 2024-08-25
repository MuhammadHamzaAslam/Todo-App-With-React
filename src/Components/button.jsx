function Button({ text = 'Add', onClick }) {
    return (
        <button className='mx-3 h-12 bg-indigo-500 rounded-xl w-16 text-white font-bold' onClick={onClick}>{text}</button>
    )
}
export default Button