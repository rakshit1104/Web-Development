import React from 'react'

export default function About(props) {
  return (
    <>
      <div class="card mb-3" style={{ border: props.mode === 'dark' ? '3px solid white' : '3px solid black' }}>
        <img src="/about.jpg" class="card-img-top" alt="About" />
        <div class="card-body card text-center" style={{ backgroundColor: props.mode === 'dark' ? '#2b3035' : 'white', color: props.mode === 'dark' ? 'white' : 'black', border: props.mode === 'dark' ? '3px solid white' : '3px solid black' }}>
          <h2 class="card-title">Made by Rakshit Pandey!</h2>
          <p class="card-text">TextUtils is a word and a character counter utility which can be used to manipulate your text in the way you want. You can covert your text from UpperCase to LowerCase and vice-versa, clear text, and copy the manipulated text</p>
        </div>
      </div>
    </>
  )
}