function Button({ text = 'Add', onClick ,bgColor='bg-indigo-500'}) {
    return (
        <button className={`mx-2 my-1 h-12 ${bgColor} rounded-xl w-16 text-white font-bold`} onClick={onClick}>{text}</button>
    )
}
export default Button