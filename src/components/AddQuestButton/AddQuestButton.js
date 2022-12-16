export default function AddQuestButton(props) {
    const newQuestClicked = props.newQuestClicked
    const setNewQuestClicked = props.setNewQuestClicked

    const addQuestButton =
        <button onClick={() => setNewQuestClicked(!newQuestClicked)}>
            {newQuestClicked ? 'Cancel' : 'Add Quest'}
        </button>

    return addQuestButton
}
