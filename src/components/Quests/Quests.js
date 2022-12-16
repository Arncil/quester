import './Quests.css'
import { useState } from 'react'
import AddQuest from '../AddQuest/AddQuest'
import AddQuestButton from '../AddQuestButton/AddQuestButton'
import MoreOptions from '../MoreOptions/MoreOptions'

export default function Quests() {
  const [newQuestClicked, setNewQuestClicked] = useState(false)
  const [newQuest, setNewQuest] = useState('')
  const [sortOption, setSortOption] = useState('All')
  const [quests, setQuests] = useState([
    {
      id: 0,
      text: 'Click \'Add Quest\' to add more quests',
      style: {}
    },
    {
      id: 1,
      text: 'Click ✔️ when the quest is completed',
      style: {}
    },
    {
      id: 2,
      text: 'Click ✖️ to delete the quest Click',
      style: {}
    }
  ])

  const deleteQuest = id => {
    setQuests(quests.filter(quest => quest.id !== id))
  }
  const deleteAllQuests = () => {
    setQuests(quests.filter(quest => quest.id === ''))
  }
  const finnishAllQuests = () => {
    setQuests(quests.map((obj) => {
      return { ...obj, style: { textDecoration: 'line-through', color: 'hsla(0, 0%, 100%, 0.5)' } }
    }))
  }
  const finnishQuest = id => {
    // object from array found by id property
    const thisQuest = quests.find(obj => obj.id === id)

    // Object.keys(thisQuest.style).length returns true if object is empty
    // If so it will change this object's style property
    if (!Object.keys(thisQuest.style).length) {
      const newState = quests.map(obj => {
        if (obj.id === id) {
          return { ...obj, style: { textDecoration: 'line-through', color: 'hsla(0, 0%, 100%, 0.5)' } }
        }
        return obj
      })
      setQuests(newState)

      // Otherwise it will reset object's style property to empty object
    } else {
      const newState = quests.map(obj => {
        if (obj.id === id) {
          return { ...obj, style: {} }
        }
        return obj
      })
      setQuests(newState)
    }
  }
  const onSubmit = e => {
    e.preventDefault()
    if (!newQuest) {
      alert('Quest can not be empty')
      return
    }

    setQuests([
      {
        id: quests.length + 1,
        text: newQuest,
        style: {}
      },
      ...quests
    ])

    setNewQuestClicked(false)
  }


  let listOfQuests
  if (sortOption === 'All') {
    listOfQuests =
      quests.map((quest) => (
        <li style={quest.style} key={quest.id}>
          <span>
            {quest.text}
          </span>
          <div>
            <p onClick={() => finnishQuest(quest.id)}>✔️</p>
            <p onClick={() => deleteQuest(quest.id)}>✖️</p>
          </div>
        </li>
      ))
  } else if (sortOption === 'In Progress') {
    listOfQuests =
      quests.map((quest) => {
        if (!Object.keys(quest.style).length) {
          return (<li style={quest.style} key={quest.id}>
            <span>
              {quest.text}
            </span>
            <div>
              <p onClick={() => finnishQuest(quest.id)}>✔️</p>
              <p onClick={() => deleteQuest(quest.id)}>✖️</p>
            </div>
          </li>)
        }
        return null
      })
  } else if (sortOption === 'Checked') {
    listOfQuests =
      quests.map((quest) => {
        if (Object.keys(quest.style).length) {
          return (<li style={quest.style} key={quest.id}>
            <span>
              {quest.text}
            </span>
            <div>
              <p onClick={() => finnishQuest(quest.id)}>✔️</p>
              <p onClick={() => deleteQuest(quest.id)}>✖️</p>
            </div>
          </li>)
        }
        return null
      })
  }


  return (
    <div className='Quests'>
      <nav>
        <AddQuestButton
          newQuestClicked={newQuestClicked}
          setNewQuestClicked={setNewQuestClicked} />
      </nav>
      <ul>
        <AddQuest
          newQuestClicked={newQuestClicked}
          setNewQuest={setNewQuest}
          onSubmit={onSubmit} />
        {listOfQuests}
      </ul>
      <MoreOptions
        finnishAllQuests={finnishAllQuests}
        deleteAllQuests={deleteAllQuests}
        sortOption={sortOption}
        setSortOption={setSortOption} />
    </div>
  )
}
