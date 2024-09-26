import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

import { AiOutlineUser, AiOutlineEdit, AiOutlineDelete, AiOutlineComment, AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai'

const EditButton = ({ action }) => <IconButton icon={<AiOutlineEdit color='deepskyblue' />} action={action} />
const DeleteButton = ({ action }) => <IconButton icon={<AiOutlineDelete color='deepskyblue' />} action={action} />
const CommentButton = () => <IconButton icon={<AiOutlineComment />} />
const HeartButton = () => <IconButton icon={<AiOutlineHeart />} />
const RetweetButton = () => <IconButton icon={<AiOutlineRetweet />} />

const IconButton = ({ icon, action }) => {
  return (
    <button className='icon-button' onClick={() => action()}>
      {icon}
    </button>
  );
};

const TweetView = ({ date, tweet, editTweet, deleteTweet, addComment }) => {
  return (
    <div className='container'>
      <div className='header'>
        <AiOutlineUser className='user-avatar' />
        <span className='user-name'>Monty Carlo Pineda</span>
        <span className='user-handle'>@moncarpine</span>
      </div>
      <div>
        <span>{tweet}</span>
      </div>
      <div className='footer'>
        <div><EditButton action={editTweet} /> <DeleteButton action={deleteTweet} /></div>
        <div><CommentButton action={addComment} /><HeartButton action={() => {}} /><RetweetButton action={() => {}} /></div>
        <span className='date'>{date}</span>
      </div>
    </div>
  );
};

const AddTweetView = () => {
  const maxCharCount = 250;
  const [charCount, setCharCount] = useState(maxCharCount);
  const updateCharCount = (e) => {
    setCharCount(maxCharCount - e.target.value.length);
  };

  return (
    <div className='container add-tweet'>
      <div className='textarea-container'>
        <textarea placeholder='Tweet about 30 Days of React...' onChange={updateCharCount} />
        <span className='char-count'>{charCount}</span>
      </div>
      <div className='button-container'>
        <button className='button'>Add Post</button>
      </div>
    </div>
  );
};

const EditTweetView = () => {
  return (
    <div className='container add-tweet'>
      <div className='textarea-container'>
        <textarea placeholder='Tweet about 30 Days of React...' onChange={() => {}} />
        <span className='char-count'>{250}</span>
      </div>
      <div className='button-container'>
          <button className='button'>Save</button>
          <button className='button cancel-button'>Cancel</button>
        </div>
    </div>
  );
};

const App = (props) => {
  const date = new Date();
  const formattedDate = date.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' })

  const [tweets, setTweets] = useState([
    { id: 1, date: formattedDate, isEditing: false, tweet: '30 Days Of React challenge has been started on 1 October and still ongoing. It will end the 30 October 2020. It was a real challenge for everyone. Students learned quite a lot of concepts. I hope this will help lots of students.' },
    { id: 2, date: formattedDate, isEditing: false, tweet: '30 Days Of React challenge has been started on 1 October and still ongoing. It will end the 30 October 2020. It was a real challenge for everyone. Students learned quite a lot of concepts. I hope this will help lots of students.' },
    { id: 3, date: formattedDate, isEditing: false, tweet: '30 Days Of React challenge has been started on 1 October and still ongoing. It will end the 30 October 2020. It was a real challenge for everyone. Students learned quite a lot of concepts. I hope this will help lots of students.' },
    { id: 4, date: formattedDate, isEditing: false, tweet: 'random tweet' },
  ]);

  const editTweet = (id, isEditing) => {
    const index = tweets.findIndex(tweet => tweet.id === id);
    tweets[index].isEditing = isEditing;
    setTweets([...tweets]);
  }

  const deleteTweet = (id) => {
    const updatedTweets = tweets.filter(tweet => tweet.id !== id  );
    setTweets(updatedTweets);
  }

  const addComment = () => { console.log('comment'); };

  const tweetViews = tweets.map(({ id, date, isEditing, tweet }, index) => {
    if (isEditing) {
      return <EditTweetView />;
    } else {
      return (
        <TweetView key={index} id={id} date={date} tweet={tweet} 
          editTweet={() => editTweet(id, true)}
          deleteTweet={() => deleteTweet(id)}
          addComment={() => addComment()} />
      );
    }
  });

  return (
    <div className='main'>
      <AddTweetView />
      <EditTweetView />
      {tweetViews}
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

// <div style={{ display: 'inline-block', borderRadius: '50%', width: '90px', height: '90px', border: '3px solid black' }}><h1><AiOutlineUser /></h1></div>