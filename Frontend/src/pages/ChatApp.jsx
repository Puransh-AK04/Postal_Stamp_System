import React, { useState, useEffect, useCallback } from 'react';
import './ChatApp.css';

const mockService = {
  messages: [],
  subscribe(callback) {
    this.callback = callback;
  },
  sendMessage(message) {
    this.messages.push(message);
    if (this.callback) this.callback(this.messages);
  },
};

const EmojiPicker = React.memo(({ onSelect }) => {
  const emojis = ['😊', '😂', '❤️', '👍', '😢'];
  return (
    <div className="emoji-picker">
      {emojis.map((emoji, index) => (
        <span
          key={index}
          className="emoji"
          onClick={() => onSelect(emoji)}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
});

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

  useEffect(() => {
    mockService.subscribe((newMessages) => {
      setMessages(newMessages);
    });
  }, []);

  useEffect(() => {
    if (selectedFile) {
      setFilePreview(URL.createObjectURL(selectedFile));
      return () => URL.revokeObjectURL(filePreview); // Cleanup
    }
  }, [selectedFile]);

  const handleSendMessage = useCallback(() => {
    if (input.trim() || selectedFile) {
      const newMessage = {
        id: Date.now(), // Unique identifier
        text: input,
        timestamp: new Date(),
        file: selectedFile ? filePreview : null,
      };
      mockService.sendMessage(newMessage);
      setInput('');
      setSelectedFile(null);
      setFilePreview(null);
    }
  }, [input, selectedFile, filePreview]);

  const handleEmojiSelect = (emoji) => {
    setInput(prevInput => prevInput + emoji);
    setEmojiPickerVisible(false);
  };

  return (
    <div className="chat-app">
      <div className="sidebar">
        <div className="sidebar-header">ChatApp</div>
        {/* Additional sidebar content goes here */}
      </div>
      <div className="main-content">
        <div className="header">
          <h1>Chat Room</h1>
        </div>
        <div className="chat-window">
          <div className="messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.file ? 'media-message' : ''}`}>
                <div className="avatar"></div>
                <div className="message-content">
                  {msg.text && <div className="message-text">{msg.text}</div>}
                  {msg.file && <img src={msg.file} alt="attachment" className="message-media" />}
                </div>
                <small className="message-timestamp">{new Date(msg.timestamp).toLocaleTimeString()}</small>
              </div>
            ))}
          </div>
          <div className="message-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
            />
            <button onClick={() => setEmojiPickerVisible(!emojiPickerVisible)}>😊</button>
            {emojiPickerVisible && <EmojiPicker onSelect={handleEmojiSelect} />}
            <input
              type="file"
              accept="image/*,video/*"
              onChange={(e) => setSelectedFile(e.target.files[0])}
              style={{ display: 'none' }}
              id="file-input"
            />
            <label htmlFor="file-input" className="file-upload-button">Upload</label>
            {selectedFile && <div className="file-preview">Preview: <img src={filePreview} alt="preview" className="file-preview-img" /></div>}
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
