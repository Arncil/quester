export default function AddQuest(props) {
    const newQuestClicked = props.newQuestClicked
    const setNewQuest = props.setNewQuest
    const onSubmit = props.onSubmit

    const addQuest =
        newQuestClicked ?
            <li style={{ backgroundColor: 'transparent' }}>
                <form onSubmit={onSubmit}>
                    <input
                        type='text'
                        placeholder='Add quest'
                        onChange={(e) => setNewQuest(e.target.value)} />
                    <button type='submit'>Add Quest</button>
                </form>
            </li> : null
            
    return addQuest
}

